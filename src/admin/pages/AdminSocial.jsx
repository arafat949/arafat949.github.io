/* eslint-disable */
// src/admin/pages/AdminSocial.jsx
import { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import { social as initSocial } from '../../data/portfolioData';
import '../../styles/Admin.css';

const ICONS = ['FaGithub', 'FaLinkedin', 'FaFacebook', 'FaXTwitter', 'FaYoutube', 'FaInstagram'];

export default function AdminSocial() {
  const [list, setList]   = useState(initSocial);
  const [saved, setSaved] = useState(false);

  const update = (i, key, val) => {
    const next = [...list];
    next[i] = { ...next[i], [key]: val };
    setList(next);
  };

  const remove = i => setList(list.filter((_, idx) => idx !== i));
  const add    = () => setList([...list, { name: '', url: '', icon: 'FaGithub' }]);

  const save = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="admin">
      <AdminSidebar />
      <main className="admin-main">
        <div className="admin-header">
          <div><h1 className="admin-header__title">Social Links</h1><p className="admin-header__sub">// social media profiles</p></div>
          <button className="admin-btn admin-btn-primary" onClick={add}>+ Add Link</button>
        </div>

        <div className="admin-card">
          <div className="admin-card__title">
            Social Profiles
            <span style={{ fontSize: 12, color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>{list.length} links</span>
          </div>

          {list.map((s, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 1fr 140px 36px', gap: 10, marginBottom: 12, alignItems: 'center' }}>
              <input
                className="admin-input"
                value={s.name}
                onChange={e => update(i, 'name', e.target.value)}
                placeholder="Platform"
                style={{ padding: '8px 10px' }}
              />
              <input
                className="admin-input"
                value={s.url}
                onChange={e => update(i, 'url', e.target.value)}
                placeholder="https://..."
                style={{ padding: '8px 10px' }}
              />
              <select
                className="admin-input"
                value={s.icon}
                onChange={e => update(i, 'icon', e.target.value)}
                style={{ padding: '8px 10px' }}
              >
                {ICONS.map(ic => <option key={ic} value={ic}>{ic.replace('Fa', '')}</option>)}
              </select>
              <button className="admin-btn admin-btn-danger" style={{ padding: '8px 10px', fontSize: 13 }} onClick={() => remove(i)}>✕</button>
            </div>
          ))}

          {saved && <p style={{ color: 'var(--accent-2)', fontFamily: 'var(--font-mono)', fontSize: 12, marginTop: 8 }}>✓ Saved!</p>}
          <div className="admin-save" style={{ marginTop: 16 }}>
            <button className="admin-btn admin-btn-ghost">Cancel</button>
            <button className="admin-btn admin-btn-primary" onClick={save}>Save Changes</button>
          </div>
        </div>
      </main>
    </div>
  );
}
