import type { ReactNode } from 'react';
import { ScrollHint } from '../common/ScrollHint';
import styles from './TwoColumnLayout.module.css';

interface TwoColumnLayoutProps {
  left: ReactNode;
  right: ReactNode;
}

export function TwoColumnLayout({ left, right }: TwoColumnLayoutProps) {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        {left}
        <ScrollHint />
      </aside>
      <main className={styles.content}>{right}</main>
    </div>
  );
}
