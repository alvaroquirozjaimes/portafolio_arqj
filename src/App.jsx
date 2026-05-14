import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './About/About';
import Technologies from './Technologies/Technologies';
import Projects from './Projects/Projects';
import GitHubContributions from './GitHubContributions/GitHubContributions';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import EducationExperience from './EducationExperience/EducationExperience';
import './styles/global.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Technologies />
        <EducationExperience />
        <Projects />
        <GitHubContributions />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;