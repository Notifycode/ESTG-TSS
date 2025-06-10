
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Contact from '../components/home/Contact';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Page Header */}
      {/* <div className="pt-32 pb-16 md:pt-40 md:pb-20 bg-estg-gray-light dark:bg-black">
        <div className="container px-4">
          <AnimatedSection animation="slide-up" className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 dark:text-white">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground dark:text-gray-300">
              Get in touch with our team. We're here to answer your questions and provide the information you need.
            </p>
          </AnimatedSection>
        </div>
      </div>
       */}
      {/* Contact Form Component */}
      <Contact />
      
      <Footer />
    </div>
  );
};

export default ContactPage;
