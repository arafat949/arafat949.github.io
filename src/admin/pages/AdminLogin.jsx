/* eslint-disable */
// src/admin/pages/AdminLogin.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Admin.css';

// Default credentials (change in production!)
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'admin123';

export default function AdminLogin() {
  const [form, setForm]   = useState({ user: '', pass: '' });
  const [error, setError] = useState('');
  const navigate          = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (form.user === ADMIN_USER && form.pass === ADMIN_PASS) {
      localStorage.setItem('admin_auth', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Username বা password ভুল!');
    }
  };

  return (
    <div className="admin-login">
      <div className="admin-login__box">
        <div className="admin-login__logo">Arafat</div>
        <p className="admin-login__sub">Portfolio Admin Panel — sign in to continue</p>

        <form onSubmit={handleSubmit}>
          <div className="admin-login__field">
            <label className="admin-login__label">Username</label>
            <input
              className="admin-login__input"
              type="text"
              value={form.user}
              onChange={e => setForm({ ...form, user: e.target.value })}
              placeholder="admin"
              required
            />
          </div>
          <div className="admin-login__field">
            <label className="admin-login__label">Password</label>
            <input
              className="admin-login__input"
              type="password"
              value={form.pass}
              onChange={e => setForm({ ...form, pass: e.target.value })}
              placeholder="••••••••"
              required
            />
          </div>
          {error && <p className="admin-login__err">{error}</p>}
          <button type="submit" className="admin-login__btn">Sign In →</button>
        </form>

        <p style={{ marginTop: 20, fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textAlign: 'center' }}>
          Default: admin / admin123 — production-এ password change করুন
        </p>
      </div>
    </div>
  );
}
