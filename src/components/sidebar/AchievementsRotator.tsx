import { useCallback, useEffect, useRef, useState } from 'react';
import type { Achievement } from '../../types';
import styles from './AchievementsRotator.module.css';

const SWAP_INTERVAL_MS = 3500;

interface AchievementsRotatorProps {
  achievements: Achievement[];
}

export function AchievementsRotator({ achievements }: AchievementsRotatorProps) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<number | undefined>(undefined);

  const scheduleNext = useCallback(() => {
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setIndex((current) => (current + 1) % achievements.length);
    }, SWAP_INTERVAL_MS);
  }, [achievements.length]);

  useEffect(() => {
    scheduleNext();
    return () => window.clearTimeout(timeoutRef.current);
  }, [index, scheduleNext]);

  const goTo = (next: number) => {
    setIndex((next + achievements.length) % achievements.length);
  };

  const current = achievements[index];

  return (
    <div className={styles.wrapper}>
      <p key={index} className={styles.line}>
        <span className={styles.category}>{current.category}</span>
        {current.link ? (
          <a
            className={styles.value}
            href={current.link}
            target="_blank"
            rel="noreferrer"
          >
            {current.value}
          </a>
        ) : (
          <span className={styles.value}>{current.value}</span>
        )}
      </p>
      <div className={styles.nav}>
        <button
          className={styles.arrow}
          onClick={() => goTo(index - 1)}
          aria-label="Previous achievement"
        >
          ‹
        </button>
        <div className={styles.dots}>
          {achievements.map((_, i) =>
            i === index ? (
              <span key={i} className={styles.dotActive}>
                <span
                  className={styles.dotFill}
                  style={{ animationDuration: `${SWAP_INTERVAL_MS}ms` }}
                />
              </span>
            ) : (
              <span key={i} className={styles.dot} />
            ),
          )}
        </div>
        <button
          className={styles.arrow}
          onClick={() => goTo(index + 1)}
          aria-label="Next achievement"
        >
          ›
        </button>
      </div>
    </div>
  );
}
