import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AnimatedSection from '../components/ui/AnimatedSection';
import Future2 from "../assets/event_2.jfif";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <div className="md:pt-10 text-center bg-estg-gray-light dark:bg-black">
        <div className="py-8 text-center px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-black dark:text-white">About Our School</h1>
            <p className="text-black max-w-2xl mx-auto mb-12 dark:text-white text-sm sm:text-base">
              Learn about our history, mission, values, and the dedicated team that makes ESTG a leading educational institution.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* About Content */}
      <div className="bg-white dark:bg-black pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-in" className="text-center">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <img
                  src={Future2}
                  alt="leaders"
                  className="w-full h-auto lg:h-[500px] object-cover rounded-lg"
                />
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-1/2 text-left">
                <h2 className="text-black dark:text-white text-2xl font-bold mt-10">Shaping Tomorrow’s Engineers</h2>
                <p className="mt-4 text-sm sm:text-base dark:text-white">
                  At ESTG, we are committed to creating a vibrant and welcoming environment where every student can thrive. Our mission is to deliver a top-notch education that fosters academic excellence while encouraging creativity, critical thinking, and personal development.
                </p>

                <h2 className="text-black dark:text-white text-2xl font-bold mt-6">Mission and Motto</h2>
                <p className="mt-2 text-sm sm:text-base dark:text-white">
                  To provide a comprehensive and inclusive education that fosters academic excellence, critical thinking, and personal growth.
                </p>

                <h2 className="text-black dark:text-white text-2xl font-bold mt-6">Vision of Core Values</h2>
                <p className="mt-2 text-sm sm:text-base dark:text-white">
                  Conscience, Science and Work to enrich the capability of our success.
                </p>

                <p className="mt-2 text-sm sm:text-base dark:text-white">
                  We strive to instill a deep sense of responsibility, integrity, and innovation in all our activities.
                </p>

                <p className="mt-2 text-sm sm:text-base dark:text-white">
                  Our vision is to empower individuals with knowledge and practical skills to create meaningful impact in their communities.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
