/* eslint-disable */
// src/admin/pages/AdminDashboard.jsx
import { useNavigate } from 'react-router-dom';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid, LineChart, Line
} from 'recharts';
import AdminSidebar from '../components/AdminSidebar';
import { profile, skills, projects, activityData } from '../../data/portfolioData';
import '../../styles/Admin.css';

const ChartTip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    return (
      <div style={{
        background: 'var(--bg-card)', border: '1px solid var(--border-accent)',
        borderRadius: 8, padding: '8px 14px', fontFamily: 'var(--font-mono)', fontSize: 12,
      }}>
        <strong style={{ color: 'var(--text-primary)' }}>{label}</strong>
        {payload.map(p => (
          <div key={p.name} style={{ color: p.color }}>
            {p.name}: {p.value}
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function AdminDashboard() {
  const navigate = useNavigate();

  const stats = [
    { val: projects.length, lbl: 'Projects',    change: '+2 this month' },
    { val: skills.length,   lbl: 'Skills',      change: '+1 this month' },
    { val: profile.clients, lbl: 'Clients',     change: 'Total clients' },
    { val: profile.experience, lbl: 'Years Exp.', change: 'Growing' },
  ];

  return (
    <div className="admin">
      <AdminSidebar />
      <main className="admin-main">
        <div className="admin-header">
          <div>
            <h1 className="admin-header__title">Dashboard</h1>
            <p className="admin-header__sub">// portfolio overview</p>
          </div>
          <button className="admin-btn admin-btn-primary" onClick={() => window.open('/', '_blank')}>
            View Site →
          </button>
        </div>

        {/* Stats */}
        <div className="admin-stats">
          {stats.map(s => (
            <div key={s.lbl} className="admin-stat">
              <div className="admin-stat__val">{s.val}</div>
              <div className="admin-stat__lbl">{s.lbl}</div>
              <div className="admin-stat__change">{s.change}</div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
          {/* Bar – commits */}
          <div className="admin-card">
            <div className="admin-card__title">Monthly Commits</div>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={activityData} barSize={28}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="month" tick={{ fill: 'var(--text-secondary)', fontSize: 11, fontFamily: 'var(--font-mono)' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: 'var(--text-secondary)', fontSize: 11, fontFamily: 'var(--font-mono)' }} axisLine={false} tickLine={false} />
                <Tooltip content={<ChartTip />} />
                <Bar dataKey="commits" fill="var(--accent)" radius={[4,4,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Line – projects */}
          <div className="admin-card">
            <div className="admin-card__title">Projects Timeline</div>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="month" tick={{ fill: 'var(--text-secondary)', fontSize: 11, fontFamily: 'var(--font-mono)' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: 'var(--text-secondary)', fontSize: 11, fontFamily: 'var(--font-mono)' }} axisLine={false} tickLine={false} />
                <Tooltip content={<ChartTip />} />
                <Line type="monotone" dataKey="projects" stroke="var(--accent-2)" strokeWidth={2} dot={{ fill: 'var(--accent-2)', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick links */}
        <div className="admin-card">
          <div className="admin-card__title">Quick Actions</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[
              { label: 'Edit Profile',   path: '/admin/profile'  },
              { label: 'Add Project',    path: '/admin/projects' },
              { label: 'Update Skills',  path: '/admin/skills'   },
              { label: 'Update Contact', path: '/admin/contact'  },
            ].map(a => (
              <button key={a.path} className="admin-btn admin-btn-ghost" onClick={() => navigate(a.path)}>
                {a.label}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
