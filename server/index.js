import express from 'express';
import cors from 'cors';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const dataFilePath = path.join(rootDir, 'data', 'db.json');
const uploadsDir = path.join(rootDir, 'public', 'uploads');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Serve uploads statically
app.use('/uploads', express.static(uploadsDir));
app.use(express.static(path.join(rootDir, 'public')));

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const sanitizedName = path.basename(file.originalname, ext)
      .replace(/[^a-zA-Z0-9_-]/g, '_')
      .toLowerCase();
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E6);
    cb(null, `${sanitizedName}-${uniqueSuffix}${ext || '.jpg'}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 25 * 1024 * 1024 }, // 25MB max
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png|webp|gif|svg/;
    const extname = allowed.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowed.test(file.mimetype);
    if (extname || mimetype) {
      cb(null, true);
    } else {
      cb(new Error('Only JPG, PNG, WEBP and GIF image formats are allowed'));
    }
  }
});

// Helper functions for reading/writing database
function readDb() {
  try {
    const raw = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading db.json:', err);
    return null;
  }
}

function writeDb(data) {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Error writing to db.json:', err);
    return false;
  }
}

// Simple token authentication check
function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized. Admin credentials required.' });
  }
  const token = authHeader.split(' ')[1];
  if (token && token.length > 10) {
    return next();
  }
  return res.status(401).json({ error: 'Invalid or expired session token.' });
}

// -------------------------------------------------------------
// PUBLIC ENDPOINTS
// -------------------------------------------------------------

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Public data: returns published projects, timeline, company info, owner, capabilities, etc.
app.get('/api/public-data', (req, res) => {
  const db = readDb();
  if (!db) return res.status(500).json({ error: 'Failed to read database' });

  const publishedProjects = (db.projects || []).filter(p => p.status === 'published');
  const publishedTimeline = (db.timeline || []).filter(t => t.status === 'published');
  const publishedUpdates = (db.updates || []).filter(u => u.status === 'published');
  const publishedGallery = (db.gallery || []).filter(g => g.status === 'published' || !g.status);

  res.json({
    company: db.company,
    owner: db.owner,
    statistics: db.statistics,
    capabilities: db.capabilities,
    whyUs: db.whyUs,
    projects: publishedProjects,
    timeline: publishedTimeline,
    updates: publishedUpdates,
    gallery: publishedGallery
  });
});

// Submit contact form inquiry
app.post('/api/inquiries', (req, res) => {
  const { name, phone, email, organization, projectType, location, message } = req.body;
  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and Phone number are required' });
  }

  const db = readDb();
  if (!db) return res.status(500).json({ error: 'Database read failed' });

  const newInquiry = {
    id: 'inq-' + Date.now(),
    name: name.trim(),
    phone: phone.trim(),
    email: (email || '').trim(),
    organization: (organization || '').trim(),
    projectType: (projectType || 'General Civil Works').trim(),
    location: (location || 'Telangana').trim(),
    message: (message || '').trim(),
    date: new Date().toISOString(),
    status: 'new'
  };

  db.inquiries = db.inquiries || [];
  db.inquiries.unshift(newInquiry);
  writeDb(db);

  res.status(201).json({ success: true, message: 'Enquiry submitted successfully' });
});

// Admin login
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  const db = readDb();
  if (!db) return res.status(500).json({ error: 'Database read error' });

  const auth = db.auth || { username: 'admin', passwordHash: 'rajamuri2014' };
  if (username === auth.username && password === auth.passwordHash) {
    // Generate secure simple token
    const token = 'r-infra-adm-' + Buffer.from(`${username}:${Date.now()}:${Math.random()}`).toString('base64');
    return res.json({
      success: true,
      token,
      user: {
        username: auth.username,
        role: 'Administrator',
        name: 'Rajamuri Rajashekar Reddy'
      }
    });
  }

  return res.status(401).json({ error: 'Invalid username or password' });
});

// -------------------------------------------------------------
// ADMIN ENDPOINTS (AUTHENTICATED)
// -------------------------------------------------------------

// Get all data (including drafts and inquiries)
app.get('/api/admin/all-data', authenticate, (req, res) => {
  const db = readDb();
  if (!db) return res.status(500).json({ error: 'Database read failed' });
  
  // Exclude password hash from response
  const { auth, ...safeData } = db;
  res.json(safeData);
});

// Upload media file(s)
app.post('/api/media/upload', authenticate, upload.array('files', 10), (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      // Check if base64 data was sent in body
      if (req.body.base64 && req.body.filename) {
        const matches = req.body.base64.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        if (matches && matches.length === 3) {
          const ext = matches[1].split('/')[1] || 'jpg';
          const filename = `upload-${Date.now()}.${ext}`;
          const filepath = path.join(uploadsDir, filename);
          fs.writeFileSync(filepath, Buffer.from(matches[2], 'base64'));
          return res.json({
            urls: [`/uploads/${filename}`]
          });
        }
      }
      return res.status(400).json({ error: 'No files provided' });
    }

    const fileUrls = req.files.map(f => `/uploads/${f.filename}`);
    res.json({ urls: fileUrls });
  } catch (err) {
    console.error('File upload error:', err);
    res.status(500).json({ error: 'Upload failed: ' + err.message });
  }
});

// Create project
app.post('/api/projects', authenticate, (req, res) => {
  const db = readDb();
  if (!db) return res.status(500).json({ error: 'Database read failed' });

  const p = req.body;
  if (!p.name) return res.status(400).json({ error: 'Project name is required' });

  const newProject = {
    id: 'proj-' + Date.now(),
    name: p.name.trim(),
    category: p.category || 'CIVIL WORKS',
    year: p.year || '2024',
    location: p.location || 'Kodangal, Telangana',
    status: p.status || 'Completed',
    startDate: p.startDate || '',
    completionDate: p.completionDate || '',
    department: p.department || '',
    client: p.client || '',
    value: p.value || '',
    description: p.description || '',
    images: Array.isArray(p.images) ? p.images : [],
    beforeImages: Array.isArray(p.beforeImages) ? p.beforeImages : [],
    afterImages: Array.isArray(p.afterImages) ? p.afterImages : [],
    video: p.video || '',
    featured: Boolean(p.featured),
    status: p.publishState === 'published' ? 'published' : 'draft', // 'draft' or 'published'
    createdAt: new Date().toISOString()
  };

  db.projects = db.projects || [];
  db.projects.unshift(newProject);
  writeDb(db);

  res.status(201).json(newProject);
});

// Update project
app.put('/api/projects/:id', authenticate, (req, res) => {
  const db = readDb();
  if (!db) return res.status(500).json({ error: 'Database read failed' });

  const idx = (db.projects || []).findIndex(p => p.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Project not found' });

  const p = req.body;
  db.projects[idx] = {
    ...db.projects[idx],
    name: p.name !== undefined ? p.name.trim() : db.projects[idx].name,
    category: p.category !== undefined ? p.category : db.projects[idx].category,
    year: p.year !== undefined ? p.year : db.projects[idx].year,
    location: p.location !== undefined ? p.location : db.projects[idx].location,
    status: p.status !== undefined ? p.status : db.projects[idx].status,
    startDate: p.startDate !== undefined ? p.startDate : db.projects[idx].startDate,
    completionDate: p.completionDate !== undefined ? p.completionDate : db.projects[idx].completionDate,
    department: p.department !== undefined ? p.department : db.projects[idx].department,
    client: p.client !== undefined ? p.client : db.projects[idx].client,
    value: p.value !== undefined ? p.value : db.projects[idx].value,
    description: p.description !== undefined ? p.description : db.projects[idx].description,
    images: Array.isArray(p.images) ? p.images : db.projects[idx].images,
    beforeImages: Array.isArray(p.beforeImages) ? p.beforeImages : db.projects[idx].beforeImages,
    afterImages: Array.isArray(p.afterImages) ? p.afterImages : db.projects[idx].afterImages,
    video: p.video !== undefined ? p.video : db.projects[idx].video,
    featured: p.featured !== undefined ? Boolean(p.featured) : db.projects[idx].featured,
    status: p.publishState ? (p.publishState === 'published' ? 'published' : 'draft') : (p.status || db.projects[idx].status),
    updatedAt: new Date().toISOString()
  };

  writeDb(db);
  res.json(db.projects[idx]);
});

// Delete project
app.delete('/api/projects/:id', authenticate, (req, res) => {
  const db = readDb();
  if (!db) return res.status(500).json({ error: 'Database read failed' });

  db.projects = (db.projects || []).filter(p => p.id !== req.params.id);
  writeDb(db);
  res.json({ success: true });
});

// Create timeline entry
app.post('/api/timeline', authenticate, (req, res) => {
  const db = readDb();
  if (!db) return res.status(500).json({ error: 'Database read failed' });

  const t = req.body;
  if (!t.year || !t.title) return res.status(400).json({ error: 'Year and Title are required' });

  const newEntry = {
    id: 'tl-' + Date.now(),
    year: t.year.toString().trim(),
    title: t.title.trim(),
    description: t.description || '',
    location: t.location || 'Kodangal, Telangana',
    milestone: t.milestone || 'Project Milestone',
    projects: t.projects || '',
    images: Array.isArray(t.images) ? t.images : [],
    status: t.publishState === 'draft' ? 'draft' : 'published',
    createdAt: new Date().toISOString()
  };

  db.timeline = db.timeline || [];
  db.timeline.push(newEntry);
  // Sort timeline by year ascending
  db.timeline.sort((a, b) => parseInt(a.year, 10) - parseInt(b.year, 10));
  writeDb(db);

  res.status(201).json(newEntry);
});

// Update timeline entry
app.put('/api/timeline/:id', authenticate, (req, res) => {
  const db = readDb();
  if (!db) return res.status(500).json({ error: 'Database read failed' });

  const idx = (db.timeline || []).findIndex(t => t.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Timeline entry not found' });

  const t = req.body;
  db.timeline[idx] = {
    ...db.timeline[idx],
    year: t.year !== undefined ? t.year.toString().trim() : db.timeline[idx].year,
    title: t.title !== undefined ? t.title.trim() : db.timeline[idx].title,
    description: t.description !== undefined ? t.description : db.timeline[idx].description,
    location: t.location !== undefined ? t.location : db.timeline[idx].location,
    milestone: t.milestone !== undefined ? t.milestone : db.timeline[idx].milestone,
    projects: t.projects !== undefined ? t.projects : db.timeline[idx].projects,
    images: Array.isArray(t.images) ? t.images : db.timeline[idx].images,
    status: t.publishState ? (t.publishState === 'draft' ? 'draft' : 'published') : (t.status || db.timeline[idx].status),
    updatedAt: new Date().toISOString()
  };

  db.timeline.sort((a, b) => parseInt(a.year, 10) - parseInt(b.year, 10));
  writeDb(db);
  res.json(db.timeline[idx]);
});

// Delete timeline entry
app.delete('/api/timeline/:id', authenticate, (req, res) => {
  const db = readDb();
  if (!db) return res.status(500).json({ error: 'Database read failed' });

  db.timeline = (db.timeline || []).filter(t => t.id !== req.params.id);
  writeDb(db);
  res.json({ success: true });
});

// Update Owner Profile
app.post('/api/owner', authenticate, (req, res) => {
  const db = readDb();
  if (!db) return res.status(500).json({ error: 'Database read failed' });

  db.owner = {
    ...db.owner,
    name: req.body.name || db.owner.name,
    designation: req.body.designation || db.owner.designation,
    phone: req.body.phone || db.owner.phone,
    email: req.body.email || db.owner.email,
    bio: req.body.bio !== undefined ? req.body.bio : db.owner.bio,
    photoUrl: req.body.photoUrl !== undefined ? req.body.photoUrl : db.owner.photoUrl
  };

  writeDb(db);
  res.json({ success: true, owner: db.owner });
});

// Update Company Information & Statistics
app.post('/api/company', authenticate, (req, res) => {
  const db = readDb();
  if (!db) return res.status(500).json({ error: 'Database read failed' });

  if (req.body.company) {
    db.company = { ...db.company, ...req.body.company };
  }
  if (req.body.statistics && Array.isArray(req.body.statistics)) {
    db.statistics = req.body.statistics;
  }

  writeDb(db);
  res.json({ success: true, company: db.company, statistics: db.statistics });
});

// Gallery management
app.post('/api/gallery', authenticate, (req, res) => {
  const db = readDb();
  if (!db) return res.status(500).json({ error: 'Database read failed' });

  const item = {
    id: 'gal-' + Date.now(),
    url: req.body.url,
    title: req.body.title || 'Civil Infrastructure Work',
    category: req.body.category || 'CIVIL WORKS',
    status: req.body.publishState === 'draft' ? 'draft' : 'published',
    createdAt: new Date().toISOString()
  };

  db.gallery = db.gallery || [];
  db.gallery.unshift(item);
  writeDb(db);
  res.status(201).json(item);
});

app.delete('/api/gallery/:id', authenticate, (req, res) => {
  const db = readDb();
  if (!db) return res.status(500).json({ error: 'Database read failed' });

  db.gallery = (db.gallery || []).filter(g => g.id !== req.params.id);
  writeDb(db);
  res.json({ success: true });
});

// Updates / Announcements
app.post('/api/updates', authenticate, (req, res) => {
  const db = readDb();
  if (!db) return res.status(500).json({ error: 'Database read failed' });

  const u = {
    id: 'up-' + Date.now(),
    title: req.body.title,
    date: req.body.date || new Date().toISOString().split('T')[0],
    category: req.body.category || 'Announcements',
    description: req.body.description || '',
    images: req.body.images || [],
    status: req.body.publishState === 'draft' ? 'draft' : 'published',
    createdAt: new Date().toISOString()
  };

  db.updates = db.updates || [];
  db.updates.unshift(u);
  writeDb(db);
  res.status(201).json(u);
});

app.delete('/api/updates/:id', authenticate, (req, res) => {
  const db = readDb();
  if (!db) return res.status(500).json({ error: 'Database read failed' });

  db.updates = (db.updates || []).filter(u => u.id !== req.params.id);
  writeDb(db);
  res.json({ success: true });
});

// Delete inquiry
app.delete('/api/inquiries/:id', authenticate, (req, res) => {
  const db = readDb();
  if (!db) return res.status(500).json({ error: 'Database read failed' });

  db.inquiries = (db.inquiries || []).filter(i => i.id !== req.params.id);
  writeDb(db);
  res.json({ success: true });
});

// Update admin password
app.put('/api/settings/password', authenticate, (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const db = readDb();
  if (!db) return res.status(500).json({ error: 'Database read failed' });

  const auth = db.auth || { username: 'admin', passwordHash: 'rajamuri2014' };
  if (currentPassword !== auth.passwordHash) {
    return res.status(400).json({ error: 'Current password does not match' });
  }

  if (!newPassword || newPassword.length < 6) {
    return res.status(400).json({ error: 'New password must be at least 6 characters long' });
  }

  db.auth.passwordHash = newPassword;
  writeDb(db);
  res.json({ success: true, message: 'Password updated successfully' });
});

// If dist directory exists, serve it for production
const distDir = path.join(rootDir, 'dist');
if (fs.existsSync(distDir)) {
  app.use(express.static(distDir));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distDir, 'index.html'));
  });
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Rajamuri's Infra Developers API Server running on port ${PORT}`);
});
