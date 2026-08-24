import { useId, useState } from 'react';
import type { ExperienceEntry } from '../../types';
import styles from './AccordionItem.module.css';

interface AccordionItemProps {
  entry: ExperienceEntry;
}

export function AccordionItem({ entry }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <div className={styles.item}>
      <button
        className={styles.header}
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className={styles.headerMain}>
          <span className={styles.org}>{entry.organization}</span>
          <span className={styles.role}>{entry.role}</span>
        </span>
        <span className={styles.headerMeta}>
          <span>{entry.dateRange}</span>
          <span>{entry.location}</span>
        </span>
        <svg
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
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
      <div
        id={contentId}
        className={`${styles.content} ${isOpen ? styles.contentOpen : ''}`}
      >
        <div className={styles.contentInner}>
          <div className={styles.reflection}>
            <p>{entry.reflection}</p>
            {entry.publication && (
              <p className={styles.publication}>
                <span className={styles.publicationTitle}>
                  "{entry.publication.title}"
                </span>
                <br />
                {entry.publication.authors} — {entry.publication.venue}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
