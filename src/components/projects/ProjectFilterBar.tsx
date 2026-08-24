import type { ProjectTag } from '../../types';
import styles from './ProjectFilterBar.module.css';

const TAGS: ProjectTag[] = ['HW', 'SW', 'ML'];

interface ProjectFilterBarProps {
  selectedTags: ProjectTag[];
  onToggle: (tag: ProjectTag) => void;
  onClear: () => void;
}

export function ProjectFilterBar({
  selectedTags,
  onToggle,
  onClear,
}: ProjectFilterBarProps) {
  return (
    <div className={styles.bar}>
      <button
        className={`${styles.button} ${
          selectedTags.length === 0 ? styles.buttonActive : ''
        }`}
        onClick={onClear}
      >
        All
      </button>
      {TAGS.map((tag) => (
        <button
          key={tag}
          className={`${styles.button} ${
            selectedTags.includes(tag) ? styles.buttonActive : ''
          }`}
          onClick={() => onToggle(tag)}
          aria-pressed={selectedTags.includes(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
