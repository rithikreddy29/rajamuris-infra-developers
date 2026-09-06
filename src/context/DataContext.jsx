import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext(null);

// Default initial verified company data (matches data/db.json)
const DEFAULT_COMPANY = {
  name: "RAJAMURI'S INFRA DEVELOPERS",
  legalName: "Rajamuri's Infra Developers",
  teluguName: "రాజమురి ఇన్ఫ్రా డెవలపర్స్",
  tagline: "Government Infrastructure & Civil Construction Since 2014",
  headline: "BUILDING THE FOUNDATION OF A BETTER TOMORROW.",
  teluguHeadline: "రేపటి ప్రగతికి దృఢమైన పునాది",
  storyHeading: "BUILT ON EXPERIENCE. DRIVEN BY RESPONSIBILITY.",
  story: `Rajamuri's Infra Developers is a Telangana-based civil construction and infrastructure company with experience in government construction works since 2014.

Over the years, the company has undertaken construction and infrastructure works including educational buildings, Anganwadi buildings and other public infrastructure projects in and around the Kodangal constituency.

Our work is guided by practical engineering, responsible execution, construction quality and a commitment to delivering infrastructure that serves communities.`,
  phone: "+91 96666 60634",
  phoneClean: "+919666660634",
  email: "rajmuri18575@gmail.com",
  address: "Kodangal, Vikarabad District, Telangana 509338",
  state: "Telangana",
  primaryRegion: "Kodangal Constituency & Telangana",
  whatsapp: "919666660634"
};

const DEFAULT_OWNER = {
  name: "RAJAMURI RAJASHEKAR REDDY",
  designation: "Owner",
  phone: "+91 96666 60634",
  email: "rajmuri18575@gmail.com",
  photoUrl: "",
  bio: "Rajamuri Rajashekar Reddy leads Rajamuri's Infra Developers with a focus on dependable execution, quality construction and responsible infrastructure development. With experience in the government construction sector since 2014, the company has grown through consistent project execution and a commitment to serving public infrastructure requirements."
};

const DEFAULT_STATISTICS = [
  { id: "stat-1", value: "2014", suffix: "", label: "Established", sublabel: "Continuous Operations" },
  { id: "stat-2", value: "10", suffix: "+", label: "Years of Experience", sublabel: "Civil Construction Track Record" },
  { id: "stat-3", value: "Government", suffix: " Infra", label: "Core Experience", sublabel: "Public Infrastructure Focus" },
  { id: "stat-4", value: "Kodangal", suffix: " & TG", label: "Project Region", sublabel: "Telangana State Coverage" }
];

const DEFAULT_CAPABILITIES = [
  {
    id: "cap-1",
    number: "01",
    title: "EDUCATIONAL INFRASTRUCTURE",
    teluguTitle: "విద్యా మౌలిక సదుపాయాలు",
    description: "Construction of school and educational facilities designed to provide robust, safe learning environments for future generations.",
    category: "SCHOOLS"
  },
  {
    id: "cap-2",
    number: "02",
    title: "ANGANWADI INFRASTRUCTURE",
    teluguTitle: "అంగన్‌వాడీ కేంద్ర భవనాలు",
    description: "Community-focused buildings serving children and families with dedicated maternal and child welfare spaces.",
    category: "ANGANWADI"
  },
  {
    id: "cap-3",
    number: "03",
    title: "GOVERNMENT BUILDINGS",
    teluguTitle: "ప్రభుత్వ కార్యాలయ భవనాలు",
    description: "Civil construction and public infrastructure works adhering strictly to institutional engineering codes and government department standards.",
    category: "GOVERNMENT BUILDINGS"
  },
  {
    id: "cap-4",
    number: "04",
    title: "COMMUNITY INFRASTRUCTURE",
    teluguTitle: "సామాజిక మౌలిక వసతులు",
    description: "Infrastructure designed around public needs, civic amenities, rural connectivity, and local public utility spaces.",
    category: "COMMUNITY INFRASTRUCTURE"
  },
  {
    id: "cap-5",
    number: "05",
    title: "CIVIL CONSTRUCTION",
    teluguTitle: "సివిల్ నిర్మాణ పనులు",
    description: "General civil construction and infrastructure execution, reinforced concrete structures, earthworks, and masonry.",
    category: "CIVIL WORKS"
  }
];

const DEFAULT_WHY_US = [
  { number: "01", title: "EXPERIENCE", description: "Government construction experience since 2014." },
  { number: "02", title: "QUALITY", description: "A focus on construction quality and responsible execution." },
  { number: "03", title: "RELIABILITY", description: "Committed to dependable project execution." },
  { number: "04", title: "LOCAL EXPERIENCE", description: "Understanding of infrastructure requirements in Telangana and the Kodangal region." },
  { number: "05", title: "COMMUNITY IMPACT", description: "Infrastructure designed to serve schools, children, families and communities." }
];

const DEFAULT_TIMELINE = [
  {
    id: "tl-2014",
    year: "2014",
    title: "Founding & Incorporation",
    description: "Rajamuri's Infra Developers established in Telangana, initiating dedicated civil contracting and government infrastructure execution.",
    location: "Telangana",
    milestone: "Foundation Milestone",
    projects: "Civil Infrastructure",
    images: [],
    status: "published"
  },
  {
    id: "tl-2016",
    year: "2016",
    title: "Public & Educational Civil Works Expansion",
    description: "Expanded execution capabilities into Anganwadi building complexes and rural educational facilities across Kodangal constituency.",
    location: "Kodangal, Telangana",
    milestone: "Regional Operations",
    projects: "Educational & Anganwadi Infrastructure",
    images: [],
    status: "published"
  },
  {
    id: "tl-2020",
    year: "2020",
    title: "Institutional Infrastructure & Civil Works",
    description: "Continued delivery of community welfare buildings and government-sanctioned infrastructure with dependable engineering standards.",
    location: "Telangana",
    milestone: "Institutional Execution",
    projects: "Public Works",
    images: [],
    status: "published"
  },
  {
    id: "tl-2024",
    year: "2024",
    title: "A Decade of Public Infrastructure Delivery",
    description: "Marked 10 years of consistent government construction works, deepening community infrastructure across the Kodangal region.",
    location: "Kodangal & Telangana",
    milestone: "10-Year Landmark",
    projects: "Government Civil Infrastructure",
    images: [],
    status: "published"
  },
  {
    id: "tl-2026",
    year: "2026",
    title: "Next-Phase Civil Development",
    description: "Executing modern educational, civic, and community infrastructure works aligned with Telangana's growing public development needs.",
    location: "Kodangal & Surrounding Regions",
    milestone: "Present Operations",
    projects: "Ongoing Infrastructure",
    images: [],
    status: "published"
  }
];

export function DataProvider({ children }) {
  const [company, setCompany] = useState(DEFAULT_COMPANY);
  const [owner, setOwner] = useState(DEFAULT_OWNER);
  const [statistics, setStatistics] = useState(DEFAULT_STATISTICS);
  const [capabilities, setCapabilities] = useState(DEFAULT_CAPABILITIES);
  const [whyUs, setWhyUs] = useState(DEFAULT_WHY_US);
  const [projects, setProjects] = useState([]);
  const [timeline, setTimeline] = useState(DEFAULT_TIMELINE);
  const [updates, setUpdates] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [token, setToken] = useState(() => localStorage.getItem('raj_admin_token') || null);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = Boolean(token);

  // Fetch Public Data
  const fetchPublicData = async () => {
    try {
      const res = await fetch('/api/public-data');
      if (res.ok) {
        const data = await res.json();
        if (data.company) setCompany(data.company);
        if (data.owner) setOwner(data.owner);
        if (data.statistics) setStatistics(data.statistics);
        if (data.capabilities) setCapabilities(data.capabilities);
        if (data.whyUs) setWhyUs(data.whyUs);
        if (data.projects) setProjects(data.projects);
        if (data.timeline) setTimeline(data.timeline);
        if (data.updates) setUpdates(data.updates);
        if (data.gallery) setGallery(data.gallery);
      }
    } catch (err) {
      console.warn('Backend API connection pending, using local database defaults:', err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch Admin All Data (includes drafts and inquiries)
  const fetchAdminData = async (authToken) => {
    try {
      const activeToken = authToken || token;
      if (!activeToken) return;
      const res = await fetch('/api/admin/all-data', {
        headers: {
          'Authorization': `Bearer ${activeToken}`
        }
      });
      if (res.ok) {
        const data = await res.json();
        if (data.company) setCompany(data.company);
        if (data.owner) setOwner(data.owner);
        if (data.statistics) setStatistics(data.statistics);
        if (data.capabilities) setCapabilities(data.capabilities);
        if (data.whyUs) setWhyUs(data.whyUs);
        if (data.projects) setProjects(data.projects);
        if (data.timeline) setTimeline(data.timeline);
        if (data.updates) setUpdates(data.updates);
        if (data.gallery) setGallery(data.gallery);
        if (data.inquiries) setInquiries(data.inquiries);
      } else if (res.status === 401) {
        logout();
      }
    } catch (err) {
      console.error('Error fetching admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchAdminData(token);
    } else {
      fetchPublicData();
    }
  }, [token]);

  // Auth methods
  const login = async (username, password) => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Invalid credentials');
      }
      localStorage.setItem('raj_admin_token', data.token);
      setToken(data.token);
      await fetchAdminData(data.token);
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('raj_admin_token');
    setToken(null);
    fetchPublicData();
  };

  // Upload Media (support file or base64 data)
  const uploadMedia = async (fileOrFiles) => {
    try {
      const formData = new FormData();
      if (Array.isArray(fileOrFiles)) {
        fileOrFiles.forEach(f => formData.append('files', f));
      } else if (fileOrFiles instanceof File || fileOrFiles instanceof Blob) {
        formData.append('files', fileOrFiles);
      } else if (typeof fileOrFiles === 'string') {
        // base64 upload
        const res = await fetch('/api/media/upload', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ base64: fileOrFiles, filename: 'upload.jpg' })
        });
        const data = await res.json();
        return data.urls;
      }

      const res = await fetch('/api/media/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Upload failed');
      return data.urls;
    } catch (err) {
      console.error('Media upload error:', err);
      throw err;
    }
  };

  // Project CRUD
  const addProject = async (projectData) => {
    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(projectData)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to create project');
      setProjects(prev => [data, ...prev]);
      return { success: true, project: data };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const updateProject = async (id, projectData) => {
    try {
      const res = await fetch(`/api/projects/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(projectData)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to update project');
      setProjects(prev => prev.map(p => p.id === id ? data : p));
      return { success: true, project: data };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const deleteProject = async (id) => {
    try {
      const res = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (!res.ok) throw new Error('Failed to delete project');
      setProjects(prev => prev.filter(p => p.id !== id));
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  // Timeline CRUD
  const addTimeline = async (entryData) => {
    try {
      const res = await fetch('/api/timeline', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(entryData)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to create timeline entry');
      setTimeline(prev => [...prev, data].sort((a, b) => parseInt(a.year, 10) - parseInt(b.year, 10)));
      return { success: true, entry: data };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const updateTimeline = async (id, entryData) => {
    try {
      const res = await fetch(`/api/timeline/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(entryData)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to update timeline entry');
      setTimeline(prev => prev.map(t => t.id === id ? data : t).sort((a, b) => parseInt(a.year, 10) - parseInt(b.year, 10)));
      return { success: true, entry: data };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const deleteTimeline = async (id) => {
    try {
      const res = await fetch(`/api/timeline/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (!res.ok) throw new Error('Failed to delete timeline entry');
      setTimeline(prev => prev.filter(t => t.id !== id));
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  // Owner Update
  const updateOwner = async (ownerData) => {
    try {
      const res = await fetch('/api/owner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(ownerData)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to update owner profile');
      setOwner(data.owner);
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  // Company Update
  const updateCompany = async (companyData, statsData) => {
    try {
      const res = await fetch('/api/company', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ company: companyData, statistics: statsData })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to update company info');
      if (data.company) setCompany(data.company);
      if (data.statistics) setStatistics(data.statistics);
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  // Contact Inquiry Submission (Public)
  const submitInquiry = async (formData) => {
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit inquiry');
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const deleteInquiry = async (id) => {
    try {
      const res = await fetch(`/api/inquiries/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (!res.ok) throw new Error('Failed to delete inquiry');
      setInquiries(prev => prev.filter(i => i.id !== id));
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  // Password Update
  const changePassword = async (currentPassword, newPassword) => {
    try {
      const res = await fetch('/api/settings/password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ currentPassword, newPassword })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to update password');
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  return (
    <DataContext.Provider value={{
      company,
      owner,
      statistics,
      capabilities,
      whyUs,
      projects,
      timeline,
      updates,
      gallery,
      inquiries,
      token,
      isAuthenticated,
      loading,
      login,
      logout,
      uploadMedia,
      addProject,
      updateProject,
      deleteProject,
      addTimeline,
      updateTimeline,
      deleteTimeline,
      updateOwner,
      updateCompany,
      submitInquiry,
      deleteInquiry,
      changePassword,
      refreshData: () => (token ? fetchAdminData(token) : fetchPublicData())
    }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
