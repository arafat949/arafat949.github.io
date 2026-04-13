// src/admin/components/AdminSidebar.jsx
import { useNavigate, useLocation } from 'react-router-dom';
import {
  FaGauge, FaUser, FaBolt, FaDiagramProject,
  FaEnvelope, FaShareNodes, FaRightFromBracket
} from 'react-icons/fa6';
import '../../styles/Admin.css';

const LINKS = [
  { label: 'Dashboard', path: '/admin/dashboard', icon: <FaGauge /> },
  { label: 'Profile',   path: '/admin/profile',   icon: <FaUser /> },
  { label: 'Skills',    path: '/admin/skills',     icon: <FaBolt /> },
  { label: 'Projects',  path: '/admin/projects',   icon: <FaDiagramProject /> },
  { label: 'Contact',   path: '/admin/contact',    icon: <FaEnvelope /> },
  { label: 'Social',    path: '/admin/social',     icon: <FaShareNodes /> },
];

export default function AdminSidebar() {
  const navigate  = useNavigate();
  const location  = useLocation();

  const logout = () => {
    localStorage.removeItem('admin_auth');
    navigate('/admin');
  };

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar__logo">Arafat Admin</div>

      <nav className="admin-sidebar__nav">
        {LINKS.map(link => (
          <button
            key={link.path}
            className={`admin-sidebar__link ${location.pathname === link.path ? 'active' : ''}`}
            onClick={() => navigate(link.path)}
          >
            {link.icon}
            {link.label}
          </button>
        ))}
      </nav>

      <div className="admin-sidebar__logout">
        <button className="admin-sidebar__logout-btn" onClick={logout}>
          <FaRightFromBracket />
          Logout
        </button>
      </div>
    </aside>
  );
}
