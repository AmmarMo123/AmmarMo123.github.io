import { useState } from 'react';
import { projects } from '../../data/projects';
import type { ProjectTag } from '../../types';
import styles from './ProjectsSection.module.css';
import { ProjectFilterBar } from './ProjectFilterBar';
import { ProjectCard } from './ProjectCard';

export function ProjectsSection() {
  const [selectedTags, setSelectedTags] = useState<ProjectTag[]>([]);

  const toggleTag = (tag: ProjectTag) => {
    setSelectedTags((tags) =>
      tags.includes(tag) ? tags.filter((t) => t !== tag) : [...tags, tag],
    );
  };

  const visibleProjects =
    selectedTags.length === 0
      ? projects
      : projects.filter((project) =>
          project.tags.some((tag) => selectedTags.includes(tag)),
        );

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Projects</h2>
      <ProjectFilterBar
        selectedTags={selectedTags}
        onToggle={toggleTag}
        onClear={() => setSelectedTags([])}
      />
      {visibleProjects.length === 0 ? (
        <p className={styles.empty}>No projects match the selected filters.</p>
      ) : (
        <div className={styles.grid}>
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}
