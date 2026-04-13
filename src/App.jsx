// src/App.jsx
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import './styles/global.css';

// Public pages
import Navbar    from './components/Navbar';
import Hero      from './components/Hero';
import Skills    from './components/Skills';
import Projects  from './components/Projects';
import Contact   from './components/Contact';
import Footer    from './components/Footer';

// Admin pages
import AdminLogin     from './admin/pages/AdminLogin';
import AdminDashboard from './admin/pages/AdminDashboard';
import AdminProfile   from './admin/pages/AdminProfile';
import AdminSkills    from './admin/pages/AdminSkills';
import AdminProjects  from './admin/pages/AdminProjects';
import AdminContact   from './admin/pages/AdminContact';
import AdminSocial    from './admin/pages/AdminSocial';

// Route guard
function PrivateRoute({ children }) {
  const auth = localStorage.getItem('admin_auth');
  return auth ? children : <Navigate to="/admin" replace />;
}

// Public portfolio (single page)
function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Portfolio />} />

        {/* Admin – login */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* Admin – protected */}
        <Route path="/admin/dashboard" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
        <Route path="/admin/profile"   element={<PrivateRoute><AdminProfile /></PrivateRoute>} />
        <Route path="/admin/skills"    element={<PrivateRoute><AdminSkills /></PrivateRoute>} />
        <Route path="/admin/projects"  element={<PrivateRoute><AdminProjects /></PrivateRoute>} />
        <Route path="/admin/contact"   element={<PrivateRoute><AdminContact /></PrivateRoute>} />
        <Route path="/admin/social"    element={<PrivateRoute><AdminSocial /></PrivateRoute>} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
