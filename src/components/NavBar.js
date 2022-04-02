import React, { useState } from 'react';
import { logo } from '../images';
import { FcMenu } from 'react-icons/fc';

const NavBar = () => {

    const [ navToggle, setNavToggle ] = useState(false);

    const  navActive = 'absolute transition-all z-50 top-24 left-[50%] translate-x-[-50%] w-[86%] mx-auto lg:hidden bg-neutral-vDarkBlue py-10 px-10 rounded-lg divide-y divide-white'

    const toggleNav = () => {
        setNavToggle(!navToggle);
    }

    return (
        <>
            <nav className='py-[40px] px-[25px] max-w-[1108px] mx-auto flex justify-between items-center'>
                <div className='flex space-x-10'>
                    <img className='w-[121px] h-auto' src={logo} alt="Logo" />
                    <ul className=' font-bold text-neutral-grayViolet space-x-8 hidden lg:flex'>
                        <li className='leading-8 hover:text-neutral-vDarkBlue cursor-pointer'>
                            <a className='block w-full h-full' href="">Features</a>
                        </li>
                        <li className='leading-8 hover:text-neutral-vDarkBlue cursor-pointer'>
                            <a className='block w-full h-full' href="">Pricing</a>
                        </li>
                        <li className='leading-8 hover:text-neutral-vDarkBlue cursor-pointer'>
                            <a className='block w-full h-full' href="">Resources</a>
                        </li>
                    </ul>
                </div>

                <div className='space-x-10 hidden lg:block'>
                    <button className='font-bold text-neutral-grayViolet cursor-pointer'>
                        Login
                    </button>

                    <button className='primary-btn'>Sign Up</button>
                </div>

                <div onClick={toggleNav} className='lg:hidden'>
                    <FcMenu size="25" />
                </div>
            </nav>

            <div className={ navToggle ? navActive : 'hidden'}>
                <ul className=' font-bold text-white space-y-6 flex flex-col items-center pb-5'>
                    <li className='leading-8'>
                        <a href="">Features</a>
                    </li>
                    <li className='leading-8'>
                        <a href="">Pricing</a>
                    </li>
                    <li className='leading-8'>
                        <a href="">Resources</a>
                    </li>
                </ul>



                <div className='space-y-5 flex flex-col'>
                    <button className='font-bold text-white cursor-pointer pt-5'>
                        Login
                    </button>

                    <button className='primary-btn'>Sign Up</button>
                </div>
            </div>
        </>
    );
}

export default NavBar;
