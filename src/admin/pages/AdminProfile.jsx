/* eslint-disable */
// src/admin/pages/AdminProfile.jsx
import { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import { profile } from '../../data/portfolioData';
import '../../styles/Admin.css';

export default function AdminProfile() {
  const [form, setForm] = useState({ ...profile });
  const [saved, setSaved] = useState(false);

  const change = e => setForm({ ...form, [e.target.name]: e.target.value });

  const save = () => {
    // In a real app – POST to backend / update localStorage / firebase
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="admin">
      <AdminSidebar />
      <main className="admin-main">
        <div className="admin-header">
          <div><h1 className="admin-header__title">Profile</h1><p className="admin-header__sub">// personal information</p></div>
        </div>

        <div className="admin-card">
          <div className="admin-card__title">Basic Info</div>

          <div className="admin-row2">
            <div className="admin-field"><label className="admin-label">Full Name</label><input className="admin-input" name="name" value={form.name} onChange={change} /></div>
            <div className="admin-field"><label className="admin-label">Job Title</label><input className="admin-input" name="title" value={form.title} onChange={change} /></div>
          </div>
          <div className="admin-field"><label className="admin-label">Bio</label><textarea className="admin-textarea" name="bio" value={form.bio} onChange={change} /></div>
          <div className="admin-row2">
            <div className="admin-field"><label className="admin-label">Location</label><input className="admin-input" name="location" value={form.location} onChange={change} /></div>
            <div className="admin-field"><label className="admin-label">Years of Experience</label><input className="admin-input" name="experience" value={form.experience} onChange={change} /></div>
          </div>
          <div className="admin-row2">
            <div className="admin-field"><label className="admin-label">Total Projects</label><input className="admin-input" name="projects" value={form.projects} onChange={change} /></div>
            <div className="admin-field"><label className="admin-label">Total Clients</label><input className="admin-input" name="clients" value={form.clients} onChange={change} /></div>
          </div>
          <div className="admin-field"><label className="admin-label">Profile Photo URL</label><input className="admin-input" name="avatar" value={form.avatar} onChange={change} placeholder="https://..." /></div>
          <div className="admin-field"><label className="admin-label">Resume URL</label><input className="admin-input" name="resumeUrl" value={form.resumeUrl} onChange={change} placeholder="#" /></div>

          {saved && <p style={{ color: 'var(--accent-2)', fontFamily: 'var(--font-mono)', fontSize: 12, marginBottom: 8 }}>✓ Saved successfully!</p>}
          <div className="admin-save">
            <button className="admin-btn admin-btn-ghost">Cancel</button>
            <button className="admin-btn admin-btn-primary" onClick={save}>Save Changes</button>
          </div>
        </div>
      </main>
    </div>
  );
}
