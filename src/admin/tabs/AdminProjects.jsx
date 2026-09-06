import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit3, 
  Trash2, 
  Eye, 
  Upload, 
  CheckCircle, 
  Clock, 
  X, 
  Building, 
  MapPin, 
  Calendar,
  Layers,
  ArrowUpRight,
  Route
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import BeforeAfterSlider from '../../components/BeforeAfterSlider';

const CATEGORIES = [
  'SCHOOLS',
  'ANGANWADI',
  'ROADS & BUILDINGS (R&B)',
  'GOVERNMENT BUILDINGS',
  'COMMUNITY INFRASTRUCTURE',
  'CIVIL WORKS',
  'OTHER'
];

export default function AdminProjects({ initialOpenAdd = false }) {
  const { projects, addProject, updateProject, deleteProject, uploadMedia } = useData();

  const [activeFilter, setActiveFilter] = useState('ALL'); // ALL, PUBLISHED, DRAFT
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(initialOpenAdd);
  const [editingId, setEditingId] = useState(null);
  const [previewProject, setPreviewProject] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Form state
  const initialForm = {
    name: '',
    category: 'ROADS & BUILDINGS (R&B)',
    year: '2024',
    location: 'Kodangal, Telangana',
    status: 'Completed',
    startDate: '',
    completionDate: '',
    department: '',
    client: '',
    value: '',
    description: '',
    images: [],
    beforeImages: [],
    afterImages: [],
    video: '',
    featured: false,
    publishState: 'draft' // 'draft' or 'published'
  };

  const [formData, setFormData] = useState(initialForm);

  const openNewModal = () => {
    setEditingId(null);
    setFormData(initialForm);
    setIsModalOpen(true);
  };

  const openEditModal = (project) => {
    setEditingId(project.id);
    setFormData({
      name: project.name || '',
      category: project.category || 'ROADS & BUILDINGS (R&B)',
      year: project.year || '2024',
      location: project.location || 'Kodangal, Telangana',
      status: project.status || 'Completed',
      startDate: project.startDate || '',
      completionDate: project.completionDate || '',
      department: project.department || '',
      client: project.client || '',
      value: project.value || '',
      description: project.description || '',
      images: project.images || [],
      beforeImages: project.beforeImages || [],
      afterImages: project.afterImages || [],
      video: project.video || '',
      featured: Boolean(project.featured),
      publishState: project.status === 'published' || project.publishState === 'published' ? 'published' : 'draft'
    });
    setIsModalOpen(true);
  };

  // Image upload handler
  const handleFileUpload = async (e, fieldName) => {
    const files = Array.from(e.target.files);
    if (!files || files.length === 0) return;

    setUploading(true);
    try {
      const uploadedUrls = [];
      for (const file of files) {
        const base64 = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (ev) => resolve(ev.target.result);
          reader.readAsDataURL(file);
        });
        
        try {
          const urls = await uploadMedia(file);
          if (urls && urls[0]) {
            uploadedUrls.push(urls[0]);
          } else {
            uploadedUrls.push(base64);
          }
        } catch {
          uploadedUrls.push(base64);
        }
      }

      setFormData(prev => ({
        ...prev,
        [fieldName]: [...(prev[fieldName] || []), ...uploadedUrls]
      }));
    } catch (err) {
      alert('Upload failed: ' + err.message);
    } finally {
      setUploading(false);
    }
  };

  const removeImage = (fieldName, index) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: prev[fieldName].filter((_, i) => i !== index)
    }));
  };

  // Save project
  const handleSave = async (forcePublishState) => {
    if (!formData.name.trim()) {
      alert('Project Name is required.');
      return;
    }

    const stateToSave = forcePublishState || formData.publishState;
    const payload = {
      ...formData,
      publishState: stateToSave,
      status: stateToSave === 'published' ? (formData.status || 'Completed') : 'draft'
    };

    if (editingId) {
      const res = await updateProject(editingId, payload);
      if (!res.success) {
        alert('Failed to update: ' + res.error);
        return;
      }
    } else {
      const res = await addProject(payload);
      if (!res.success) {
        alert('Failed to create: ' + res.error);
        return;
      }
    }

    setIsModalOpen(false);
  };

  // Filtering
  const filteredProjects = projects.filter(p => {
    const pState = p.status === 'published' || p.publishState === 'published' ? 'published' : 'draft';
    if (activeFilter === 'PUBLISHED' && pState !== 'published') return false;
    if (activeFilter === 'DRAFT' && pState !== 'draft') return false;
    if (categoryFilter !== 'ALL' && p.category !== categoryFilter) return false;
    if (searchTerm && !p.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      
      {/* Top Header & New Project Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-display font-extrabold text-2xl text-white uppercase">
            PROJECT PORTFOLIO MANAGEMENT
          </h2>
          <p className="text-xs font-mono text-slate-400 mt-1">
            Create, draft, preview, and publish verified civil infrastructure and R&B works.
          </p>
        </div>

        <button
          onClick={openNewModal}
          className="px-5 py-3 rounded-xl font-bold text-xs font-mono tracking-wider uppercase text-black bg-gradient-to-r from-[#F0CD6D] via-[#D4AF37] to-[#B8860B] hover:opacity-95 shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all flex items-center justify-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>+ ADD NEW PROJECT</span>
        </button>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-xl glass-panel border border-white/10">
        
        {/* Status Tabs */}
        <div className="flex items-center gap-2">
          {['ALL', 'PUBLISHED', 'DRAFT'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wider uppercase transition-colors ${
                activeFilter === tab
                  ? 'bg-[#D4AF37] text-black font-bold'
                  : 'text-slate-400 hover:text-white bg-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search & Category Filter */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative flex-1 sm:w-60">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-1.5 pl-8 rounded-lg bg-[#070A11] border border-white/10 text-white text-xs focus:border-[#D4AF37] focus:outline-none"
            />
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" />
          </div>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-1.5 rounded-lg bg-[#070A11] border border-white/10 text-slate-300 text-xs focus:border-[#D4AF37] focus:outline-none"
          >
            <option value="ALL">All Categories</option>
            {CATEGORIES.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

      </div>

      {/* Projects List */}
      <div className="rounded-2xl glass-panel border border-white/10 overflow-hidden">
        {filteredProjects.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-[#090D17] text-slate-400 border-b border-white/10">
                <tr>
                  <th className="p-4">PROJECT NAME</th>
                  <th className="p-4">CATEGORY</th>
                  <th className="p-4">YEAR</th>
                  <th className="p-4">LOCATION</th>
                  <th className="p-4">STATUS</th>
                  <th className="p-4">PUBLICATION</th>
                  <th className="p-4 text-right">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredProjects.map((proj) => {
                  const isPublished = proj.status === 'published' || proj.publishState === 'published';
                  return (
                    <tr key={proj.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-bold text-white font-sans text-sm">
                        <div className="flex items-center gap-3">
                          {proj.images && proj.images[0] ? (
                            <img src={proj.images[0]} alt="" className="w-9 h-9 rounded object-cover border border-white/10" />
                          ) : (
                            <div className="w-9 h-9 rounded bg-[#121828] border border-white/10 flex items-center justify-center text-[#D4AF37]">
                              <Building className="w-4 h-4" />
                            </div>
                          )}
                          <div>
                            <div>{proj.name}</div>
                            {proj.client && <div className="text-[10px] font-mono text-slate-500">{proj.client}</div>}
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-gold-400 font-semibold">{proj.category}</td>
                      <td className="p-4 text-slate-300">{proj.year}</td>
                      <td className="p-4 text-slate-400">{proj.location}</td>
                      <td className="p-4">
                        <span className={`px-2 py-0.5 rounded text-[10px] uppercase ${
                          proj.status === 'Completed'
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30'
                            : 'bg-amber-950 text-amber-400 border border-amber-500/30'
                        }`}>
                          {proj.status || 'Completed'}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded text-[10px] uppercase font-bold ${
                          isPublished
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                            : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/40'
                        }`}>
                          {isPublished ? 'PUBLISHED' : 'DRAFT'}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => setPreviewProject(proj)}
                            className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white"
                            title="Live Preview"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => openEditModal(proj)}
                            className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-gold-400 hover:text-gold-300"
                            title="Edit"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={async () => {
                              if (confirm(`Delete project "${proj.name}"?`)) {
                                await deleteProject(proj.id);
                              }
                            }}
                            className="p-1.5 rounded bg-red-950/40 hover:bg-red-900/60 text-red-400"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-12 text-center">
            <Building className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="font-display font-bold text-lg text-white uppercase">NO PROJECTS RECORDED YET</h3>
            <p className="text-xs font-mono text-slate-400 mt-1 max-w-sm mx-auto">
              Click "+ ADD NEW PROJECT" above to add verified educational, Anganwadi, or R&B construction records.
            </p>
          </div>
        )}
      </div>

      {/* CREATE / EDIT PROJECT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in">
          <div 
            className="relative w-full max-w-4xl bg-[#090D17] border border-[#D4AF37]/40 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#0C1220]">
              <div>
                <span className="text-xs font-mono text-gold-400 uppercase tracking-widest font-semibold">
                  {editingId ? 'EDIT PROJECT RECORD' : 'CREATE NEW PROJECT RECORD'}
                </span>
                <h3 className="font-display font-bold text-xl text-white uppercase mt-0.5">
                  {formData.name || 'New Civil Project'}
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              
              {/* Essential Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                    PROJECT NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Model Anganwadi Center / R&B Road Package"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#070911] border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                    CATEGORY *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#070911] border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
                  >
                    {CATEGORIES.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                    YEAR *
                  </label>
                  <input
                    type="text"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    placeholder="2024"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#070911] border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                    LOCATION *
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Kodangal, Telangana"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#070911] border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                    EXECUTION STATUS
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#070911] border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
                  >
                    <option value="Completed">Completed</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Planned">Planned</option>
                  </select>
                </div>
              </div>

              {/* Optional Fields Accordion / Grid */}
              <div className="p-4 rounded-xl bg-[#070911] border border-white/10 space-y-4">
                <div className="text-xs font-mono text-gold-400 uppercase font-bold">
                  OPTIONAL GOVERNMENT & CONTRACT DETAILS
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">
                      GOVERNMENT DEPARTMENT / CLIENT (OPTIONAL)
                    </label>
                    <input
                      type="text"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      placeholder="e.g. Roads & Buildings (R&B) / Women & Child Welfare"
                      className="w-full px-3 py-2 rounded-lg bg-[#0A0E1A] border border-white/10 text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">
                      PROJECT VALUE (OPTIONAL)
                    </label>
                    <input
                      type="text"
                      value={formData.value}
                      onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                      placeholder="Leave empty if confidential"
                      className="w-full px-3 py-2 rounded-lg bg-[#0A0E1A] border border-white/10 text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">
                      START DATE (OPTIONAL)
                    </label>
                    <input
                      type="text"
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      placeholder="e.g. March 2023"
                      className="w-full px-3 py-2 rounded-lg bg-[#0A0E1A] border border-white/10 text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">
                      COMPLETION DATE (OPTIONAL)
                    </label>
                    <input
                      type="text"
                      value={formData.completionDate}
                      onChange={(e) => setFormData({ ...formData, completionDate: e.target.value })}
                      placeholder="e.g. January 2024"
                      className="w-full px-3 py-2 rounded-lg bg-[#0A0E1A] border border-white/10 text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">
                    VIDEO LINK / EMBED (OPTIONAL)
                  </label>
                  <input
                    type="url"
                    value={formData.video}
                    onChange={(e) => setFormData({ ...formData, video: e.target.value })}
                    placeholder="https://www.youtube.com/embed/..."
                    className="w-full px-3 py-2 rounded-lg bg-[#0A0E1A] border border-white/10 text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                  PROJECT DESCRIPTION & SPECIFICATIONS
                </label>
                <textarea
                  rows="3"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Details on civil structure, built-up area, classrooms, foundations, RCC framing..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#070911] border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none resize-none"
                ></textarea>
              </div>

              {/* Project Photographs Upload Zone */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-mono text-slate-400 uppercase">
                    PROJECT PHOTOGRAPHS (GALLERY)
                  </label>
                  <label className="cursor-pointer px-3 py-1 rounded bg-[#D4AF37]/20 text-gold-400 text-xs font-mono hover:bg-[#D4AF37]/30 border border-[#D4AF37]/40 flex items-center gap-1.5">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload Photos</span>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, 'images')}
                      className="hidden"
                    />
                  </label>
                </div>

                {formData.images && formData.images.length > 0 ? (
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                    {formData.images.map((img, idx) => (
                      <div key={idx} className="relative aspect-video rounded-lg overflow-hidden border border-white/10 group">
                        <img src={img} alt="" className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={() => removeImage('images', idx)}
                          className="absolute top-1 right-1 p-1 rounded bg-red-900/80 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 rounded-xl border border-dashed border-white/15 text-center text-xs font-mono text-slate-500">
                    No gallery images uploaded. Click "Upload Photos" above.
                  </div>
                )}
              </div>

              {/* Before & After Photos Upload Zone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/10">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] font-mono text-slate-400 uppercase">
                      BEFORE PHOTO (OPTIONAL)
                    </label>
                    <label className="cursor-pointer px-2.5 py-0.5 rounded bg-white/5 text-slate-300 text-[11px] font-mono hover:bg-white/10 border border-white/10 flex items-center gap-1">
                      <Upload className="w-3 h-3" />
                      <span>Upload</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, 'beforeImages')}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {formData.beforeImages && formData.beforeImages[0] ? (
                    <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 group">
                      <img src={formData.beforeImages[0]} alt="" className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => removeImage('beforeImages', 0)}
                        className="absolute top-1 right-1 p-1 rounded bg-red-900/80 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ) : (
                    <div className="p-3 rounded-lg border border-dashed border-white/10 text-center text-[11px] font-mono text-slate-500">
                      Site before commencement
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] font-mono text-slate-400 uppercase">
                      AFTER / COMPLETED PHOTO (OPTIONAL)
                    </label>
                    <label className="cursor-pointer px-2.5 py-0.5 rounded bg-white/5 text-slate-300 text-[11px] font-mono hover:bg-white/10 border border-white/10 flex items-center gap-1">
                      <Upload className="w-3 h-3" />
                      <span>Upload</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, 'afterImages')}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {formData.afterImages && formData.afterImages[0] ? (
                    <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 group">
                      <img src={formData.afterImages[0]} alt="" className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => removeImage('afterImages', 0)}
                        className="absolute top-1 right-1 p-1 rounded bg-red-900/80 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ) : (
                    <div className="p-3 rounded-lg border border-dashed border-white/10 text-center text-[11px] font-mono text-slate-500">
                      Completed building photograph
                    </div>
                  )}
                </div>
              </div>

              {/* Draft / Publish Mode Selection */}
              <div className="p-4 rounded-xl bg-[#0F1424] border border-[#D4AF37]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono font-bold text-white uppercase">
                    PUBLICATION STATUS
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Draft records are kept private. Only published records appear on the live website.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, publishState: 'draft' })}
                    className={`px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase transition-colors ${
                      formData.publishState === 'draft'
                        ? 'bg-yellow-500 text-black shadow-md'
                        : 'bg-white/5 text-slate-400 border border-white/10'
                    }`}
                  >
                    DRAFT
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, publishState: 'published' })}
                    className={`px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase transition-colors ${
                      formData.publishState === 'published'
                        ? 'bg-emerald-500 text-black shadow-md'
                        : 'bg-white/5 text-slate-400 border border-white/10'
                    }`}
                  >
                    PUBLISHED
                  </button>
                </div>
              </div>

            </div>

            {/* Modal Footer with PREVIEW and PUBLISH / SAVE */}
            <div className="p-4 sm:p-6 border-t border-white/10 bg-[#0C1220] flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setPreviewProject({ ...formData, id: 'temp-preview' })}
                className="px-4 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-slate-200 bg-white/5 border border-white/10 hover:border-[#D4AF37]/40 flex items-center gap-2"
              >
                <Eye className="w-4 h-4 text-[#D4AF37]" />
                <span>PREVIEW</span>
              </button>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-mono uppercase text-slate-400 hover:text-white"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={() => handleSave(formData.publishState)}
                  className="px-6 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#c59b27] shadow-lg transition-all"
                >
                  {formData.publishState === 'published' ? 'PUBLISH RECORD' : 'SAVE DRAFT'}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* LIVE PREVIEW MODAL */}
      {previewProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl overflow-y-auto animate-fade-in">
          <div 
            className="relative w-full max-w-4xl bg-[#090E18] border-2 border-[#D4AF37] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-[#D4AF37] text-black font-mono text-xs font-bold flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>LIVE PREVIEW: HOW VISITORS WILL SEE THIS PROJECT ON THE PUBLIC SITE</span>
              </span>
              <button
                onClick={() => setPreviewProject(null)}
                className="p-1 rounded hover:bg-black/10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <span className="text-xs font-mono text-gold-400 uppercase tracking-widest font-semibold">
                  {previewProject.category || 'CIVIL WORKS'} • {previewProject.year || '2024'}
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase mt-1">
                  {previewProject.name || 'Sample Project'}
                </h2>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mt-2">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{previewProject.location || 'Kodangal, Telangana'}</span>
                </div>
              </div>

              {previewProject.beforeImages?.[0] && previewProject.afterImages?.[0] && (
                <BeforeAfterSlider
                  beforeImage={previewProject.beforeImages[0]}
                  afterImage={previewProject.afterImages[0]}
                  title={previewProject.name}
                />
              )}

              {previewProject.images && previewProject.images.length > 0 && (
                <div className="aspect-video rounded-xl overflow-hidden bg-black border border-white/10">
                  <img src={previewProject.images[0]} alt="" className="w-full h-full object-cover" />
                </div>
              )}

              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed whitespace-pre-line">
                {previewProject.description || 'No description provided.'}
              </p>
            </div>

            <div className="p-4 border-t border-white/10 bg-[#0B111E] flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                Status: <strong className="text-white">{previewProject.publishState?.toUpperCase() || 'DRAFT'}</strong>
              </span>
              <button
                onClick={() => setPreviewProject(null)}
                className="px-5 py-2 rounded-lg text-xs font-mono font-bold bg-[#D4AF37] text-black"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
