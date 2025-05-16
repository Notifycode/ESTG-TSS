import React from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import { Button } from '../ui/button';
import { Send, Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: <MapPin size={20} className="text-estg-blue" />,
    title: 'Our Location',
    details: 'Kigali-Rwanda'
  },
  {
    icon: <Phone size={20} className="text-estg-blue" />,
    title: 'Phone Number',
    details: '+1 (234) 567-890'
  },
  {
    icon: <Mail size={20} className="text-estg-blue" />,
    title: 'Email Address',
    details: 'info@estg.edu'
  },
  {
    icon: <Clock size={20} className="text-estg-blue" />,
    title: 'Office Hours',
    details: 'Monday-Friday: 8:00 AM - 5:00 PM'
  }
];

const Contact = () => {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "2970fb62-6888-4a71-a921-0aa3234a856a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Message sent successfully!");
    } else {
      console.error("Error", res);
      alert("Failed to send the message. Please try again.");
    }
  };

  return (
    <section className="py-12 md:py-24 bg-white dark:bg-background">
      <div className="container text-center justify-center px-4">
        <AnimatedSection>
            <h2 className="text-4xl font-bold mb-2 text-black dark:text-white">Contact Us</h2>
            <p className="text-black max-w-xl mx-auto mb-12 dark:text-white">
              Have questions or need more information? We're here to help. Reach out to us and we'll get back to you as soon as possible.
            </p>
        </AnimatedSection>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <AnimatedSection animation="fade-in" className="lg:col-span-3">
              <div className="bg-white dark:bg-card rounded-2xl shadow-soft p-8">
                <h3 className="text-2xl font-display font-semibold mb-6 dark:text-white">Send us a message</h3>
                
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full rounded-md border border-input px-4 py-2.5 focus:border-estg-blue focus:ring-1 focus:ring-estg-blue outline-none transition-colors bg-white dark:bg-muted dark:text-white"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full rounded-md border border-input px-4 py-2.5 focus:border-estg-blue focus:ring-1 focus:ring-estg-blue outline-none transition-colors bg-white dark:bg-muted dark:text-white"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full rounded-md border border-input px-4 py-2.5 focus:border-estg-blue focus:ring-1 focus:ring-estg-blue outline-none transition-colors bg-white dark:bg-muted dark:text-white"
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full rounded-md border border-input px-4 py-2.5 focus:border-estg-blue focus:ring-1 focus:ring-estg-blue outline-none transition-colors resize-none bg-white dark:bg-muted dark:text-white"
                      placeholder="Your message..."
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full sm:w-auto"
                    >
                      Send Message
                      <Send size={18} />
                    </Button>
                  </div>
                </form>
              </div>
            </AnimatedSection>
            
            {/* Contact Information */}
            <AnimatedSection animation="slide-up" className="lg:col-span-2">
              <div className="bg-estg-gray-light dark:bg-secondary rounded-2xl p-8">
                <h3 className="text-2xl font-display font-semibold mb-6 dark:text-white">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mt-1 mr-4">{item.icon}</div>
                      <div>
                        <h4 className="font-medium mb-1 dark:text-white">{item.title}</h4>
                        <p className="text-sm text-muted-foreground dark:text-gray-300">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium mb-3 dark:text-white">Connect With Us</h4>
                  <div className="flex space-x-3">
                    <a href="#" className="p-2.5 bg-white dark:bg-muted rounded-full shadow-sm hover:bg-estg-blue hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.62v-7h-2.35v-2.69h2.35v-2a3.27 3.27 0 0 1 3.49-3.59 19.25 19.25 0 0 1 2.1.11v2.43h-1.44c-1.13 0-1.35.54-1.35 1.32v1.73h2.69L17.76 14h-2.34v7H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"/>
                      </svg>
                    </a>
                    <a href="#" className="p-2.5 bg-white dark:bg-muted rounded-full shadow-sm hover:bg-estg-blue hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                      </svg>
                    </a>
                    <a href="#" className="p-2.5 bg-white dark:bg-muted rounded-full shadow-sm hover:bg-estg-blue hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                      </svg>
                    </a>
                    <a href="#" className="p-2.5 bg-white dark:bg-muted rounded-full shadow-sm hover:bg-estg-blue hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
