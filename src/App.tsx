import { TwoColumnLayout } from './components/layout/TwoColumnLayout';
import { Sidebar } from './components/sidebar/Sidebar';
import { ExperienceSection } from './components/experience/ExperienceSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { profile } from './data/profile';

function App() {
  return (
    <TwoColumnLayout
      left={<Sidebar profile={profile} />}
      right={
        <>
          <ExperienceSection />
          <ProjectsSection />
        </>
      }
    />
  );
}

export default App;
