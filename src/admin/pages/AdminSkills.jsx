/* eslint-disable */
// src/admin/pages/AdminSkills.jsx
import { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import { skills as initSkills } from '../../data/portfolioData';
import '../../styles/Admin.css';

export default function AdminSkills() {
  const [list, setList]   = useState(initSkills);
  const [saved, setSaved] = useState(false);

  const update = (i, key, val) => {
    const next = [...list];
    next[i] = { ...next[i], [key]: key === 'level' ? Math.min(100, Math.max(0, Number(val))) : val };
    setList(next);
  };

  const remove = i => setList(list.filter((_, idx) => idx !== i));

  const add = () => setList([...list, { name: '', level: 50, category: 'Frontend' }]);

  const save = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="admin">
      <AdminSidebar />
      <main className="admin-main">
        <div className="admin-header">
          <div><h1 className="admin-header__title">Skills</h1><p className="admin-header__sub">// manage skill levels</p></div>
          <button className="admin-btn admin-btn-primary" onClick={add}>+ Add Skill</button>
        </div>

        <div className="admin-card">
          <div className="admin-card__title">
            All Skills
            <span style={{ fontSize: 12, color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
              {list.length} items
            </span>
          </div>

          {/* Header row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 100px 2fr 70px 36px', gap: 10, marginBottom: 8, paddingBottom: 8, borderBottom: '1px solid var(--border)' }}>
            {['Skill Name', 'Category', 'Level', 'Pct', ''].map(h => (
              <span key={h} style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{h}</span>
            ))}
          </div>

          {list.map((skill, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 100px 2fr 70px 36px', gap: 10, alignItems: 'center', marginBottom: 10 }}>
              <input className="admin-input" value={skill.name} onChange={e => update(i, 'name', e.target.value)} placeholder="Skill name" style={{ padding: '7px 10px' }} />
              <input className="admin-input" value={skill.category} onChange={e => update(i, 'category', e.target.value)} placeholder="Category" style={{ padding: '7px 10px' }} />
              <div>
                <div className="admin-skill-bar-bg">
                  <div className="admin-skill-bar-fill" style={{ width: `${skill.level}%` }} />
                </div>
                <input type="range" min="0" max="100" value={skill.level}
                  onChange={e => update(i, 'level', e.target.value)}
                  style={{ width: '100%', marginTop: 4, accentColor: 'var(--accent)' }} />
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--accent)', textAlign: 'center' }}>{skill.level}%</span>
              <button className="admin-btn admin-btn-danger" style={{ padding: '7px 10px', fontSize: 13 }} onClick={() => remove(i)}>✕</button>
            </div>
          ))}

          {saved && <p style={{ color: 'var(--accent-2)', fontFamily: 'var(--font-mono)', fontSize: 12, marginTop: 8 }}>✓ Saved!</p>}
          <div className="admin-save" style={{ marginTop: 16 }}>
            <button className="admin-btn admin-btn-primary" onClick={save}>Save Changes</button>
          </div>
        </div>
      </main>
    </div>
  );
}
