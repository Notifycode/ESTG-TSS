import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AnimatedSection from '../components/ui/AnimatedSection';
import Elysee from "../assets/elysee.jpg";
import Etianee from "../assets/etianne.jpg";
import Marthe from "../assets/marthe.jpg";

const Administrative = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Page Header */}
      <div className="pt-20 bg-estg-gray-light dark:bg-black">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-black dark:text-white">
              Administrative
            </h1>
            <p className="text-black max-w-xl mx-auto mb-8 md:mb-12 dark:text-white px-4">
              Experience our vibrant college community and world-class facilities designed to support your academic journey.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Administrative Content */}
      <div className="py-4 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in">
            <div className="max-w-6xl mx-auto space-y-6">
              {/* First Card */}
              <div className="flex flex-col md:flex-row gap-4 shadow-lg rounded-md p-4 border-b-2 border-gray">
                <img src={Elysee} alt="activity" className="w-[70%] ml-24 md:w-[300px] h-[350px] md:h-[300px] object-cover rounded-md"/>
                <div className="flex-1 p-2">
                  <div className="flex justify-between items-start">
                    <h2 className="text-xl md:text-2xl font-semibold p-2 md:p-4">Mukunzi ELYSEE</h2>
                  </div>
                  <p className="text-start pl-3 md:mr-20">At the helm of ESTG is our esteemed principal, Mukunzi ELYSEE, a visionary leader with a deep passion for education and student development.</p> 
                  <div className="pl-3 md:mr-20">
                    <input type="checkbox" id="toggle" className="peer hidden" />
                    <div className="hidden peer-checked:block">
                      <p className="text-start">
                        With over 20 years of experience in the field, Mukunzi ELYSEE has dedicated his career to fostering environments where students can excel academically, socially, and emotionally.
                      </p>
                      <label htmlFor="toggle" className="cursor-pointer text-blue-500 hover:text-blue-600 mt-2">
                        See Less
                      </label>
                    </div>
                    <label htmlFor="toggle" className="cursor-pointer text-blue-500 hover:text-blue-600 peer-checked:hidden mt-2 inline-block">
                      See More
                    </label>
                  </div>
                </div>
              </div>

              {/* Second Card */}
              <div className="flex flex-col md:flex-row-reverse gap-4 shadow-lg rounded-md p-4 border-b-2 border-gray">
                <img src={Etianee} alt="activity" className="w-[70%] md:mr-28 md:w-[300px] h-[350px] md:h-[300px] object-cover rounded-md"/>
                <div className="flex-1 p-2 ml-24">
                  <div className="flex justify-between items-start">
                    <h2 className="text-xl md:text-2xl font-semibold md:pb-4">Nzaramyimana Etianee</h2>
                  </div>
                  <p className="text-start">At the helm of ESTG is our esteemed principal, Nzaramyimana Etianee, a visionary leader with a deep passion for education and student development.</p> 
                  <div className="p-1">
                    <input type="checkbox" id="toggle2" className="peer hidden" />
                    <div className="hidden peer-checked:block">
                      <p className="text-start">
                        With over 20 years of experience in the field,Nzaramyimana Etianee has dedicated his career to fostering environments where students can excel academically, socially, and emotionally.
                      </p>
                      <label htmlFor="toggle2" className="cursor-pointer text-blue-500 hover:text-blue-600 mt-2">
                        See Less
                      </label>
                    </div>
                    <label htmlFor="toggle2" className="cursor-pointer text-blue-500 hover:text-blue-600 peer-checked:hidden mt-2 inline-block">
                      See More
                    </label>
                  </div>
                </div>
              </div>

              {/* Third Card */}
              <div className="flex flex-col md:flex-row gap-4 shadow-lg rounded-md p-4 border-b-2 border-gray">
                <img src={Marthe} alt="activity" className="w-[70%] ml-24 md:w-[300px] h-[350px] md:h-[300px] object-cover rounded-md"/>
                <div className="flex-1 p-2">
                  <div className="flex justify-between items-start">
                    <h2 className="text-xl md:text-2xl font-semibold p-2 md:p-4">Uwamahoro Marthe</h2>
                  </div>
                  <p className="text-start pl-3 md:mr-20">At the helm of ESTG is our esteemed principal, Uwamahoro Marthe, a visionary leader with a deep passion for education and student development.</p> 
                  <div className="p-1">
                    <input type="checkbox" id="toggle3" className="peer hidden" />
                    <div className="hidden peer-checked:block">
                      <p className="text-start">
                        With over 20 years of experience in the field, Uwamahoro Marthe has dedicated his career to fostering environments where students can excel academically, socially, and emotionally.
                      </p>
                      <label htmlFor="toggle3" className="cursor-pointer text-blue-500 hover:text-blue-600 mt-2">
                        See Less
                      </label>
                    </div>
                    <label htmlFor="toggle3" className="cursor-pointer text-blue-500 hover:text-blue-600 peer-checked:hidden mt-2 inline-block">
                      See More
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Administrative;
