import type { ReactNode } from 'react';
import styles from './TwoColumnLayout.module.css';

interface TwoColumnLayoutProps {
  left: ReactNode;
  right: ReactNode;
}

export function TwoColumnLayout({ left, right }: TwoColumnLayoutProps) {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>{left}</aside>
      <main className={styles.content}>{right}</main>
    </div>
  );
}
