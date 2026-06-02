import { About } from './components/About';
import { ArchitectureSnapshots } from './components/ArchitectureSnapshots';
import { BackendTeams } from './components/BackendTeams';
import { Contact } from './components/Contact';
import { EngineeringFocus } from './components/EngineeringFocus';
import { EngineeringMindset } from './components/EngineeringMindset';
import { ExperienceHighlights } from './components/ExperienceHighlights';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OpenSource } from './components/OpenSource';
import { OperationalSignals } from './components/OperationalSignals';
import { ProductionConcerns } from './components/ProductionConcerns';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';

export default function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <EngineeringFocus />
        <ArchitectureSnapshots />
        <OperationalSignals />
        <TechStack />
        <Projects />
        <EngineeringMindset />
        <ProductionConcerns />
        <OpenSource />
        <ExperienceHighlights />
        <BackendTeams />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
