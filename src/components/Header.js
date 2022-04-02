import React from 'react';
import { headerIll } from '../images';

const Header = () => {
    return (
        <header className='flex flex-col max-w-[1108px] lg:min-h-[500px] mx-auto lg:flex-row-reverse p-4'>
            <div className=''>
                <img className='scale-150 translate-x-[85px] lg:translate-x-[140px] translate-y-[15px] lg:translate-y-[90px]' src={headerIll} alt="Working illustration" />
            </div>
            <div className='mt-32 text-center lg:text-left'>
                <h1 className='font-bold text-center lg:text-left text-[2.5rem] lg:text-7xl text-neutral-vDarkBlue leading-[1] lg:leading-[1.15] mb-3'>
                    More than just shorter links
                </h1>

                <p className='text-center lg:text-left lg:w-[75%] text-lg text-neutral-grayViolet mb-5'>
                    Build your brand’s recognition and get detailed insights
                    on how your links are performing.
                </p>

                <button className='primary-btn'>
                    Get Started
                </button>
            </div>
        </header>
    );
}

export default Header;
