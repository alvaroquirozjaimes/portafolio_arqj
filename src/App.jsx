import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './About/About';
import Technologies from './Technologies/Technologies';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

// Importar los estilos globales
import './styles/global.css'; 

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;