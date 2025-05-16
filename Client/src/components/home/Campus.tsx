import React, { useState } from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import { Button } from '../ui/button';
import { ArrowRight, MapPin } from 'lucide-react';

const campusImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    alt: 'Library Building',
    caption: 'Modern Library',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
    alt: 'Science Labs',
    caption: 'Advanced Research Labs',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    alt: 'Student Center',
    caption: 'Student Center',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80',
    alt: 'Sports Complex',
    caption: 'Sports Complex',
  },
];

const facilities = [
  "Modern classrooms and lecture halls",
  "Cutting-edge research laboratories",
  "Comprehensive library with digital resources",
  "Student housing and dormitories",
  "Student center with dining options",
  "Sports complex and recreational areas",
  "Technology innovation hub",
  "Career development center",
];

const Campus = () => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-black overflow-hidden">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Side */}
          <div>
            <AnimatedSection animation="slide-up">
              <h5 className="text-estg-blue font-medium mb-3">CAMPUS LIFE</h5>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Experience Our World-Class Facilities
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={200}>
              <p className="text-lg text-muted-foreground mb-8">
                Our college provides a vibrant and supportive environment where students can learn, innovate, and grow. With state-of-the-art facilities and a beautiful setting, ESTG offers the perfect backdrop for your academic journey.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={400}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                {facilities.map((facility, index) => (
                  <div key={index} className="flex items-start">
                    <MapPin size={16} className="text-estg-blue shrink-0 mt-1 mr-2" />
                    <span className="text-sm text-muted-foreground">{facility}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Image Side */}
          <AnimatedSection animation="scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-soft">
              {campusImages.map((image, index) => (
                <div 
                  key={image.id}
                  className={`transition-opacity duration-500 absolute inset-0 ${
                    activeImage === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <img 
                    src={image.url} 
                    alt={image.alt}
                    className="w-full h-full object-cover aspect-video"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <span className="text-white font-medium">{image.caption}</span>
                  </div>
                </div>
              ))}

              <div className="absolute bottom-6 right-6 z-20 flex space-x-2">
                {campusImages.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      activeImage === index ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default Campus;
