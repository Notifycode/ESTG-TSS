
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
// import Programs from '../components/home/Programs';
import Administrative from '../components/home/Administrative';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/home/Contact';

const Index = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Administrative />
      <Testimonials />
      <Contact />
      <Footer />
      
    </div>
  );
};

export default Index;
