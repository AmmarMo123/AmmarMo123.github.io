import type { ContactInfo } from '../../types';
import styles from './ContactLinks.module.css';

interface ContactLinksProps {
  contact: ContactInfo;
}

export function ContactLinks({ contact }: ContactLinksProps) {
  return (
    <div className={styles.list}>
      <a className={styles.link} href={`mailto:${contact.email}`}>
        {contact.email}
      </a>
      <a className={styles.link} href={`tel:${contact.phone}`}>
        {contact.phone}
      </a>
      <a
        className={styles.link}
        href={contact.linkedin}
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
      <a
        className={styles.link}
        href={contact.github}
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
    </div>
  );
}
