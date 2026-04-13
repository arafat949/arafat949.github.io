/* eslint-disable */
// src/components/Skills.jsx
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis,
  ResponsiveContainer, Tooltip
} from 'recharts';
import '../styles/Skills.css';
import { skills } from '../data/portfolioData';

const CATEGORIES = ['All', ...new Set(skills.map(s => s.category))];

// Custom radar tooltip
const RadarTip = ({ active, payload }) => {
  if (active && payload?.length) {
    return (
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-accent)',
        borderRadius: 8,
        padding: '8px 14px',
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--text-primary)',
      }}>
        <strong>{payload[0].payload.skill}</strong>
        <br />
        Level: {payload[0].value}%
      </div>
    );
  }
  return null;
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const filtered = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  // Radar data – top 7 skills
  const radarData = skills.slice(0, 7).map(s => ({
    skill: s.name,
    level: s.level,
    fullMark: 100,
  }));

  return (
    <section className="skills section" id="skills" ref={ref}>
      <div className="container">
        <div className="skills__header">
          <p className="section-label">What I know</p>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-sub">
            Technologies and tools I use to build high-quality products.
          </p>
        </div>

        {/* Category filter */}
        <div className="skills__filter">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`skills__filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="skills__grid">
          {/* Skill bars */}
          <div className="skills__bars">
            {filtered.map((skill, i) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-item__header">
                  <span className="skill-item__name">
                    {skill.name}
                    <span className="skill-item__cat">{skill.category}</span>
                  </span>
                  <span className="skill-item__pct">{skill.level}%</span>
                </div>
                <div className="skill-item__bar-bg">
                  <div
                    className={`skill-item__bar-fill ${inView ? 'animate' : ''}`}
                    style={{
                      width: `${skill.level}%`,
                      transitionDelay: `${i * 0.08}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Radar chart */}
          <div className="skills__chart-wrap">
            <p className="skills__chart-title">Skill Radar</p>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="var(--border)" />
                <PolarAngleAxis
                  dataKey="skill"
                  tick={{ fill: 'var(--text-secondary)', fontSize: 11, fontFamily: 'var(--font-mono)' }}
                />
                <Radar
                  name="Skill"
                  dataKey="level"
                  stroke="var(--accent)"
                  fill="var(--accent)"
                  fillOpacity={0.15}
                  strokeWidth={2}
                />
                <Tooltip content={<RadarTip />} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
