// src/components/Contact.jsx
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaLocationDot, FaWhatsapp } from 'react-icons/fa6';
import { FaGithub, FaLinkedin, FaFacebook, FaXTwitter } from 'react-icons/fa6';
import { contact, social } from '../data/portfolioData';
import '../styles/Admin.css';

const ICON_MAP = { FaGithub, FaLinkedin, FaFacebook, FaXTwitter };

const INFO_ITEMS = [
  { icon: <FaEnvelope />, label: 'Email',    val: contact.email    },
  { icon: <FaPhone />,    label: 'Phone',    val: contact.phone    },
  { icon: <FaWhatsapp />, label: 'WhatsApp', val: contact.whatsapp },
  { icon: <FaLocationDot />, label: 'Location', val: contact.address },
];

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    // Simulate send
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <p className="section-label">Get in touch</p>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            কোনো project নিয়ে কথা বলতে চান? আমি সবসময় নতুন সুযোগের জন্য প্রস্তুত।
          </p>
        </div>

        <div className="contact__inner">
          {/* Info */}
          <div className="contact__info">
            {INFO_ITEMS.map(item => (
              <div className="contact__info-item" key={item.label}>
                <div className="contact__info-icon">{item.icon}</div>
                <div>
                  <div className="contact__info-label">{item.label}</div>
                  <div className="contact__info-val">{item.val}</div>
                </div>
              </div>
            ))}

            <div>
              <p className="section-label" style={{ marginBottom: 12 }}>Follow me</p>
              <div className="contact__social">
                {social.map(s => {
                  const Icon = ICON_MAP[s.icon];
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact__social-link"
                      title={s.name}
                    >
                      {Icon && <Icon />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-row">
              <div className="contact__form-group">
                <label className="contact__label">Your Name</label>
                <input
                  className="contact__input"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="contact__form-group">
                <label className="contact__label">Email Address</label>
                <input
                  className="contact__input"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="contact__form-group">
              <label className="contact__label">Subject</label>
              <input
                className="contact__input"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Project collaboration"
                required
              />
            </div>

            <div className="contact__form-group">
              <label className="contact__label">Message</label>
              <textarea
                className="contact__textarea"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="আপনার message লিখুন..."
                required
              />
            </div>

            <div className={`contact__success ${sent ? 'show' : ''}`}>
              ✓ Message sent successfully! শীঘ্রই reply করব।
            </div>

            <button type="submit" className="btn btn-primary contact__submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
