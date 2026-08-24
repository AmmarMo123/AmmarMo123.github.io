import type { Profile } from '../../types';
import styles from './Sidebar.module.css';
import { EducationSection } from './EducationSection';
// import { RotatingClock } from './RotatingClock'; // disabled for now, keeping component for later
import { ContactLinks } from './ContactLinks';

interface SidebarProps {
  profile: Profile;
}

export function Sidebar({ profile }: SidebarProps) {
  return (
    <div className={styles.root}>
      <div>
        <h1 className={styles.name}>{profile.name}</h1>
        <p className={styles.bio}>{profile.bio}</p>
        <EducationSection education={profile.education} />
      </div>
      <div className={styles.contact}>
        <ContactLinks contact={profile.contact} />
        {/* <RotatingClock /> */}
      </div>
    </div>
  );
}
