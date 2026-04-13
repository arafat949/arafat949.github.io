/* eslint-disable */
// src/admin/pages/AdminProjects.jsx
import { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import { projects as initProjects } from '../../data/portfolioData';
import '../../styles/Admin.css';

const EMPTY = { title: '', description: '', tags: '', github: '', live: '', featured: false, stats: { stars: 0, forks: 0 } };

export default function AdminProjects() {
  const [list, setList]       = useState(initProjects);
  const [editing, setEditing] = useState(null); // null | index | 'new'
  const [form, setForm]       = useState(EMPTY);
  const [saved, setSaved]     = useState(false);

  const openEdit = (i) => {
    const p = list[i];
    setForm({ ...p, tags: p.tags.join(', ') });
    setEditing(i);
  };

  const openNew = () => {
    setForm(EMPTY);
    setEditing('new');
  };

  const change = e => {
    const { name, value, type, checked } = e.target;
    if (name === 'stars' || name === 'forks') {
      setForm({ ...form, stats: { ...form.stats, [name]: Number(value) } });
    } else {
      setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
    }
  };

  const saveForm = () => {
    const parsed = { ...form, id: editing === 'new' ? Date.now() : form.id, tags: form.tags.split(',').map(t => t.trim()).filter(Boolean) };
    if (editing === 'new') {
      setList([...list, parsed]);
    } else {
      setList(list.map((p, i) => (i === editing ? parsed : p)));
    }
    setEditing(null);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const remove = i => {
    if (window.confirm('Delete this project?')) setList(list.filter((_, idx) => idx !== i));
  };

  return (
    <div className="admin">
      <AdminSidebar />
      <main className="admin-main">
        <div className="admin-header">
          <div><h1 className="admin-header__title">Projects</h1><p className="admin-header__sub">// manage portfolio projects</p></div>
          <button className="admin-btn admin-btn-primary" onClick={openNew}>+ Add Project</button>
        </div>

        {/* Edit / New form */}
        {editing !== null && (
          <div className="admin-card" style={{ borderColor: 'var(--border-accent)' }}>
            <div className="admin-card__title">
              {editing === 'new' ? 'New Project' : 'Edit Project'}
            </div>
            <div className="admin-row2">
              <div className="admin-field"><label className="admin-label">Title</label><input className="admin-input" name="title" value={form.title} onChange={change} /></div>
              <div className="admin-field">
                <label className="admin-label">Featured</label>
                <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8, cursor: 'pointer' }}>
                  <input type="checkbox" name="featured" checked={form.featured} onChange={change} style={{ accentColor: 'var(--accent)', width: 16, height: 16 }} />
                  <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Show as featured</span>
                </label>
              </div>
            </div>
            <div className="admin-field"><label className="admin-label">Description</label><textarea className="admin-textarea" name="description" value={form.description} onChange={change} style={{ minHeight: 72 }} /></div>
            <div className="admin-field"><label className="admin-label">Tags (comma separated)</label><input className="admin-input" name="tags" value={form.tags} onChange={change} placeholder="React, Node.js, MongoDB" /></div>
            <div className="admin-row2">
              <div className="admin-field"><label className="admin-label">GitHub URL</label><input className="admin-input" name="github" value={form.github} onChange={change} /></div>
              <div className="admin-field"><label className="admin-label">Live URL</label><input className="admin-input" name="live" value={form.live} onChange={change} /></div>
            </div>
            <div className="admin-row2">
              <div className="admin-field"><label className="admin-label">GitHub Stars</label><input className="admin-input" type="number" name="stars" value={form.stats.stars} onChange={change} /></div>
              <div className="admin-field"><label className="admin-label">GitHub Forks</label><input className="admin-input" type="number" name="forks" value={form.stats.forks} onChange={change} /></div>
            </div>
            <div className="admin-save">
              <button className="admin-btn admin-btn-ghost" onClick={() => setEditing(null)}>Cancel</button>
              <button className="admin-btn admin-btn-primary" onClick={saveForm}>Save Project</button>
            </div>
          </div>
        )}

        {saved && <p style={{ color: 'var(--accent-2)', fontFamily: 'var(--font-mono)', fontSize: 12, marginBottom: 12 }}>✓ Saved successfully!</p>}

        {/* Table */}
        <div className="admin-card">
          <div className="admin-card__title">All Projects <span style={{ fontSize: 12, color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>{list.length} items</span></div>
          <div style={{ overflowX: 'auto' }}>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Tags</th>
                  <th>Featured</th>
                  <th>Stars</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {list.map((p, i) => (
                  <tr key={p.id}>
                    <td style={{ fontWeight: 500 }}>{p.title}</td>
                    <td>
                      <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                        {p.tags.map(t => <span key={t} className="tag" style={{ fontSize: 10 }}>{t}</span>)}
                      </div>
                    </td>
                    <td>
                      {p.featured
                        ? <span style={{ color: 'var(--accent-2)', fontFamily: 'var(--font-mono)', fontSize: 12 }}>✓ Yes</span>
                        : <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: 12 }}>No</span>}
                    </td>
                    <td style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>⭐ {p.stats.stars}</td>
                    <td>
                      <div className="actions">
                        <button className="admin-btn admin-btn-ghost" style={{ padding: '5px 12px', fontSize: 12 }} onClick={() => openEdit(i)}>Edit</button>
                        <button className="admin-btn admin-btn-danger" style={{ padding: '5px 12px', fontSize: 12 }} onClick={() => remove(i)}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
