/* eslint-disable */
// src/admin/pages/AdminContact.jsx
import { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import { contact as initContact } from '../../data/portfolioData';
import '../../styles/Admin.css';

export default function AdminContact() {
  const [form, setForm] = useState({ ...initContact });
  const [saved, setSaved] = useState(false);

  const change = e => setForm({ ...form, [e.target.name]: e.target.value });

  const save = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="admin">
      <AdminSidebar />
      <main className="admin-main">
        <div className="admin-header">
          <div><h1 className="admin-header__title">Contact Info</h1><p className="admin-header__sub">// public contact details</p></div>
        </div>

        <div className="admin-card">
          <div className="admin-card__title">Contact Details</div>
          <div className="admin-row2">
            <div className="admin-field"><label className="admin-label">Email Address</label><input className="admin-input" name="email" type="email" value={form.email} onChange={change} /></div>
            <div className="admin-field"><label className="admin-label">Phone Number</label><input className="admin-input" name="phone" value={form.phone} onChange={change} /></div>
          </div>
          <div className="admin-row2">
            <div className="admin-field"><label className="admin-label">WhatsApp Number</label><input className="admin-input" name="whatsapp" value={form.whatsapp} onChange={change} /></div>
            <div className="admin-field"><label className="admin-label">Location / Address</label><input className="admin-input" name="address" value={form.address} onChange={change} /></div>
          </div>

          {saved && <p style={{ color: 'var(--accent-2)', fontFamily: 'var(--font-mono)', fontSize: 12, marginBottom: 8 }}>✓ Saved!</p>}
          <div className="admin-save">
            <button className="admin-btn admin-btn-ghost">Cancel</button>
            <button className="admin-btn admin-btn-primary" onClick={save}>Save Changes</button>
          </div>
        </div>
      </main>
    </div>
  );
}
