import React from 'react';
import { headerIll } from '../images';

const Header = () => {
    return (
        <header className='flex flex-col max-w-[1108px] lg:min-h-[500px] mx-auto lg:flex-row-reverse p-4 md:px-24 lg:p-4'>
            <div className=''>
                <img className='scale-150 translate-x-[85px] md:translate-x-0 md:translate-y-0 md:scale-[1] lg:scale-150 lg:translate-x-[140px] translate-y-[15px] lg:translate-y-[90px]' src={headerIll} alt="Working illustration" />
            </div>
            <div className='mt-32 text-center lg:text-left'>
                <h1 className='font-bold text-center lg:text-left text-[2.5rem] lg:text-7xl text-neutral-vDarkBlue leading-[1] lg:leading-[1.15] mb-3'>
                    More than just shorter links
                </h1>

                <p className='text-center lg:text-left lg:w-[75%] text-lg text-neutral-grayViolet mb-5'>
                    Build your brand’s recognition and get detailed insights
                    on how your links are performing.
                </p>

                <a href='#shorten_here'>
                    <button className='primary-btn'>
                        Get Started
                    </button>
                </a>
            </div>
        </header>
    );
}

export default Header;
