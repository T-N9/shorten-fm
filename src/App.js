import React from 'react';
import { NavBar, Header, ShortenForm , Branding, Boost, Footer } from './components';
import { useDispatch } from 'react-redux';
import { copyResolved } from './redux/actions/actions';

const App = () => {
    const dispatch = useDispatch();
    dispatch(copyResolved())

    return (
        <main className='font-poppins overflow-x-hidden'>
            <NavBar />
            <Header />
            <div className='bg-neutral-light-gray'>
                <div className='relative top-[-5rem] mt-32'>
                    <ShortenForm />
                </div>
                <Branding/>
            </div>
            <Boost/>
            <Footer/>
        </main>
    );
}

export default App;
