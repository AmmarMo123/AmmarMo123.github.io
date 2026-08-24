import { useId, useState } from 'react';
import type { Project } from '../../types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentId = useId();

  return (
    <div className={styles.card}>
      <div
        className={styles.imagePlaceholder}
        style={{ aspectRatio: project.image.aspectRatio }}
      >
        {project.image.videoSrc ? (
          <video
            src={project.image.videoSrc}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: project.image.objectPosition ?? 'center',
            }}
          />
        ) : project.image.src ? (
          <img
            src={project.image.src}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <span>{project.image.placeholderLabel}</span>
        )}
      </div>
      <div className={styles.body}>
        <button
          className={styles.header}
          onClick={() => setIsExpanded((open) => !open)}
          aria-expanded={isExpanded}
          aria-controls={contentId}
        >
          <span className={styles.headerText}>
            <span className={styles.title}>{project.title}</span>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </span>
          <svg
            className={`${styles.chevron} ${isExpanded ? styles.chevronOpen : ''}`}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        <div className={styles.techList}>
          {project.technologies.map((tech) => (
            <span key={tech} className={styles.tech}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          <a
            className={styles.link}
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub →
          </a>
          {project.demo && (
            <a
              className={styles.link}
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              Demo →
            </a>
          )}
        </div>

        <div
          id={contentId}
          className={`${styles.expandContent} ${
            isExpanded ? styles.expandContentOpen : ''
          }`}
        >
          <div className={styles.expandInner}>
            <div className={styles.details}>
              <p>{project.reflection}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
