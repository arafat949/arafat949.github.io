/* eslint-disable */
// src/components/Hero.jsx
import { } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaDownload, FaCode, FaServer, FaPalette } from 'react-icons/fa6';
import { profile } from '../data/portfolioData';
import '../styles/Hero.css';

export default function Hero() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const initials = 'Arafat';

  const typeSequence = profile.taglines.flatMap(t => [t, 2000]);

  return (
    <section className="hero" id="hero" ref={ref}>
      <div className="hero__grid" />
      <div className="hero__blob-1" />
      <div className="hero__blob-2" />

      <div className="hero__inner">
        {/* Left */}
        <div className="hero__content">
          <div className="hero__status">
            <span className="hero__status-dot" />
            Available for work
          </div>

          <h1 className="hero__name">
            Hi, I'm<br />
            <span className="hero__name-accent">{profile.name}</span>
          </h1>

          <div className="hero__typewriter">
            <TypeAnimation
              sequence={typeSequence}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="hero__bio">{profile.bio}</p>

          <div className="hero__actions">
            <a
              href={profile.resumeUrl}
              className="btn btn-primary"
              download
            >
              <FaDownload size={14} />
              Resume Download
            </a>
            <a
              href="#projects"
              className="btn btn-ghost"
              onClick={e => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <FaGithub size={14} />
              See My Work
            </a>
          </div>

          <div className="hero__stats">
            {[
              { val: parseInt(profile.experience), suffix: '+', label: 'Years Exp.' },
              { val: parseInt(profile.projects),   suffix: '+', label: 'Projects'   },
              { val: parseInt(profile.clients),    suffix: '+', label: 'Clients'    },
            ].map(s => (
              <div key={s.label}>
                <div className="hero__stat-val">
                  {inView
                    ? <CountUp end={s.val} duration={2} suffix={s.suffix} />
                    : `0${s.suffix}`}
                </div>
                <div className="hero__stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right – avatar */}
        <div className="hero__avatar-wrap">
          <div className="hero__avatar-ring">
            <div className="hero__avatar">
              {profile.avatar
                ? <img src={profile.avatar} alt={profile.name} />
                : initials}
            </div>
          </div>

          <div className="hero__floating-cards">
            <div className="hero__float-card">
              <FaCode className="hero__float-icon" size={14} />
              React · Next.js · Node
            </div>
            <div className="hero__float-card">
              <FaServer className="hero__float-icon" size={14} />
              MongoDB · PostgreSQL
            </div>
            <div className="hero__float-card">
              <FaPalette className="hero__float-icon" size={14} />
              Figma · TailwindCSS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
