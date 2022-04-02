import React from 'react';
import { brand_1, brand_2, brand_3 } from '../images';

const Branding = () => {
    return (
        <section className='max-w-[1108px] mx-auto  p-4'>
            <div className='text-center'>
                <h1 className='font-bold text-3xl lg:text-4xl text-neutral-vDarkViolet mb-5'>
                    Advanced Statistics
                </h1>
                <p className='para-text  lg:w-[45%] mx-auto'>
                    Track how your links are performing across the web with our
                    advanced statistics dashboard.
                </p>
            </div>

            <div className='my-24 relative flex flex-wrap justify-between'>
                <div className='absolute h-full w-[10px] lg:rotate-90 lg:h-[140%] top-0 lg:top-[-90px] left-[50%] translate-x-[-50%] bg-primary-cyan'>

                </div>
                <div className='bg-white lg:w-[335px] lg:h-[300px] relative z-10 py-8 px-8 text-center lg:text-left rounded-md shadow-sm mb-24 lg:mb-0 last:mb-0 last:mr-0'>
                    <div className='p-6 rounded-full bg-neutral-vDarkBlue inline-block mt-[-4.5rem] mb-8'>
                        <img src={brand_1} alt="Brand Recognition" />
                    </div>
                    <h1 className='font-bold text-2xl text-neutral-vDarkBlue mb-4'>
                        Brand Recognition
                    </h1>
                    <p className='para-text'>
                        Boost your brand recognition with each click. Generic links don’t
                        mean a thing. Branded links help instil confidence in your content.
                    </p>
                </div>
                <div className='bg-white lg:w-[335px] lg:h-[300px] relative z-10 py-8 px-8 text-center lg:text-left rounded-md shadow-sm mb-24 lg:mb-0 lg:mt-10 last:mb-0 last:mr-0'>
                    <div className='p-6 rounded-full bg-neutral-vDarkBlue inline-block mt-[-4.5rem] mb-8'>
                        <img src={brand_2} alt="Brand Recognition" />
                    </div>
                    <h1 className='font-bold text-2xl text-neutral-vDarkBlue mb-4'>
                        Detailed Records
                    </h1>
                    <p className='para-text'>
                        Gain insights into who is clicking your links. Knowing when and where
                        people engage with your content helps inform better decisions.
                    </p>
                </div>
                <div className='bg-white lg:w-[335px] lg:h-[300px] relative z-10 py-8 px-8 text-center lg:text-left rounded-md shadow-sm mb-24 lg:mb-0 lg:mt-20 last:mb-0 last:mr-0'>
                    <div className='p-6 rounded-full bg-neutral-vDarkBlue inline-block mt-[-4.5rem] mb-8'>
                        <img src={brand_3} alt="Brand Recognition" />
                    </div>
                    <h1 className='font-bold text-2xl text-neutral-vDarkBlue mb-4'>
                        Fully Customizable
                    </h1>
                    <p className='para-text'>
                        Improve brand awareness and content discoverability through customizable
                        links, supercharging audience engagement.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Branding;
