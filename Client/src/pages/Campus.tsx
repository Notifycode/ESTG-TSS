
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AnimatedSection from '../components/ui/AnimatedSection';
import Refe from "../assets/eating.jpg"
import Running from "../assets/PR.jpg"
import Tv from "../assets/gettyimages-1786348765-612x612.jpg"
const Campus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-32 pb-16 md:pt-40 md:pb-20 bg-estg-gray-light dark:bg-black">
        <div className="container px-80 justify-center">
          <AnimatedSection animation="slide-up" className="max-w-3xl">
            <h1 className="text-4xl text-center md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Administrative
            </h1>
            <p className="text-lg text-center md:text-xl text-muted-foreground">
              Experience our vibrant college community and world-class facilities designed to support your academic journey.
            </p>
          </AnimatedSection>
        </div>
      </div>
      
      {/* Campus Content - Placeholder, will be replaced with actual content */}
      <div className="py-16 md:py-24 bg-white dark:bg-black">
        <div className="container px-4">
          <AnimatedSection animation="fade-in" className="text-center">
            <div className='lg:ml-20 w-[1100px]'>
            <div className='w-full flex gap-5 shadow-lg rounded-md p-2 border-b-2 border-gray'>

              <img src={Running} alt="activity" className='w-[50%] p-2 h-[300px] rounded-md'/>
              <div className='p-2'>
                <h1 className='p-4'>Dr. John Smith 1</h1>
                <p className='text-start justify-start'>At the helm of ESTG is our esteemed principal, Dr. John Smith, a visionary leader with a deep passion for education and student development.</p> 
                 <div className="p-1">
                   

                    {/* Hidden checkbox with peer class */}
                    <input type="checkbox" id="toggle" className="peer hidden" />

                    {/* Content that appears when checkbox is checked */}
                    <div className="hidden peer-checked:block flex">
                      <p className='text-start'> With over 20 years of experience in the field, Dr. Smith has dedicated his career to fostering environments where students can excel academically, socially, and emotionally. 
                        <label htmlFor="toggle" className="cursor-pointer w-28 pl-2 text-blue-500 rounded">
                          See Less
                        </label>
                      </p>
                    </div>

                     {/* Label acts as a clickable button */}
                    <label htmlFor="toggle" className="cursor-pointer w-28 peer-checked:hidden text-blue-500 p-2 rounded">
                      <p className='absolute mt-[-28px] ml-[473px] cursor-default'>.....</p>
                      See More
                    </label>
                  </div>
              </div>
            </div>

            <div className='w-full flex gap-5 shadow-lg mt-4 border-opacity-5 rounded-md p-2 border-b-2 border-gray'>

              
              <div className='p-2'>
              <h1 className='p-4'>Dr. John Smith 2</h1>
                <p className='text-start justify-start'>At the helm of ESTG is our esteemed principal, Dr. John Smith, a visionary leader with a deep passion for education and student development.</p> 
                 <div className="p-1">

                    {/* Hidden checkbox with peer class */}
                    <input type="checkbox" id="toggle2" className="peer hidden" />

                    {/* Content that appears when checkbox is checked */}
                    <div className="hidden peer-checked:block">
                      <p className='text-start'> With over 20 years of experience in the field, Dr. Smith has dedicated his career to fostering environments where students can excel academically, socially, and emotionally.
                        <label htmlFor="toggle2" className="cursor-pointer w-28 pl-2 text-blue-500 rounded">
                          See Less
                        </label>
                      </p>
                    </div>

                     {/* Label acts as a clickable button */}
                    <label htmlFor="toggle2" className="cursor-pointer w-28 peer-checked:hidden text-blue-500 p-2 rounded">
                      <p className='absolute mt-[-28px] ml-[473px] cursor-default'>.....</p>
                      See More
                    </label>
                  </div>
              </div>
              <img src={Running} alt="activity" className='w-[50%] p-2 h-[300px] rounded-md'/>
            </div>
            <div className='w-full flex gap-5 shadow-lg mt-4 border-opacity-5 rounded-md p-2 border-gray'>

              <img src={Running} alt="activity" className='w-[50%] p-2 h-[300px] rounded-md'/>
              <div className='p-2'>
                <h2 className='p-4'>Dr. John Smith 3</h2>
                <p className='text-start justify-start'>At the helm of ESTG is our esteemed principal, Dr. John Smith, a visionary leader with a deep passion for education and student development.</p> 
                 <div className="p-1">
                   

                    {/* Hidden checkbox with peer class */}
                    <input type="checkbox" id="toggle3" className="peer hidden" />

                    {/* Content that appears when checkbox is checked */}
                    <div className="hidden peer-checked:block">
                      <p className='text-start'> With over 20 years of experience in the field, Dr. Smith has dedicated his career to fostering environments where students can excel academically, socially, and emotionally.
                      <label htmlFor="toggle3" className="cursor-pointer w-28 pl-2 text-blue-500 rounded">
                        See Less
                      </label>
                      </p>
                    </div>

                     {/* Label acts as a clickable button */}
        
                    <label htmlFor="toggle3" className="cursor-pointer w-28 peer-checked:hidden text-blue-500 p-2 rounded">
                      <p className='absolute mt-[-28px] ml-[473px] cursor-default'>.....</p>
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

export default Campus;
