import { experience } from '../../data/experience';
import styles from './ExperienceSection.module.css';
import { AccordionItem } from './AccordionItem';

export function ExperienceSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Experience</h2>
      <div>
        {experience.map((entry) => (
          <AccordionItem key={entry.id} entry={entry} />
        ))}
      </div>
    </section>
  );
}
