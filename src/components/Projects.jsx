// src/components/Projects.jsx
import { useState } from 'react';
import { FaGithub, FaArrowUpRightFromSquare, FaStar, FaCodeFork } from 'react-icons/fa6';
import { projects } from '../data/portfolioData';
import '../styles/Projects.css';

const PROJECT_ICONS = ['🛒', '📋', '🤖', '🌤', '📝'];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? projects : projects.filter(p => p.featured);

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="projects__header">
          <div>
            <p className="section-label">What I've built</p>
            <h2 className="section-title">Projects</h2>
          </div>
          <p className="section-sub" style={{ marginBottom: 0 }}>
            A selection of things I've built — from side projects to client work.
          </p>
        </div>

        <div className="projects__grid">
          {visible.map((project, i) => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              {project.featured && (
                <div className="project-card__featured-badge">Featured</div>
              )}

              <div className="project-card__top">
                <div className="project-card__icon">{PROJECT_ICONS[i] || '📦'}</div>
                <div className="project-card__links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link"
                      title="GitHub"
                    >
                      <FaGithub size={15} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link"
                      title="Live Demo"
                    >
                      <FaArrowUpRightFromSquare size={13} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>

              <div className="project-card__tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              <div className="project-card__stats">
                <span className="project-card__stat">
                  <FaStar size={11} /> {project.stats.stars}
                </span>
                <span className="project-card__stat">
                  <FaCodeFork size={11} /> {project.stats.forks}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <button
            className="btn btn-ghost"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : `View All ${projects.length} Projects`}
          </button>
        </div>
      </div>
    </section>
  );
}
