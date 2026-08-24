import type { Education } from '../../types';
import styles from './Sidebar.module.css';
import educationStyles from './EducationSection.module.css';

interface EducationSectionProps {
  education: Education;
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Education</h2>
      <p className={educationStyles.institution}>{education.institution}</p>
      <p className={educationStyles.degree}>{education.degree}</p>

      <h3 className={educationStyles.subTitle}>Awards</h3>
      <ul className={educationStyles.awardsList}>
        {education.awards.map((award) => (
          <li key={award} className={educationStyles.awardItem}>
            {award}
          </li>
        ))}
      </ul>
    </section>
  );
}
