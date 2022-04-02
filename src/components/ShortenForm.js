import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { linkAdded, linkCopied, linkDeleted } from '../redux/actions/actions';
import CopyToClipboard from 'react-copy-to-clipboard';

const ShortenForm = () => {

    const [input, setInput] = useState('');
    const [inputStatus, setInputStatus] = useState(true);
    const [shortenLink, setShortenLink] = useState('');
    const [validation, setValidation] = useState(true);

    const dispatch = useDispatch();
    const getShortenData = useSelector((state) => state)

    useEffect(() => {

        if (shortenLink === undefined) {
            setValidation(false)
        } else {
            if (shortenLink !== '' && getShortenData !== []) {
                dispatch(linkAdded(input, shortenLink));
            }
        }
    }, [dispatch, shortenLink])

    console.log(shortenLink, getShortenData);

    useEffect(() => {
        if (input !== '') {
            setInputStatus(true);
        }
        localStorage.setItem('shortenLinks', JSON.stringify(getShortenData));
        // console.log('SetLocalStore');
    }, [input, getShortenData, inputStatus])

    const getShortenLink = async (link) => await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`).then(res => {
        if (!res.ok) {
            throw Error("Something went wrong.");
        }
        return res.json()
    }).then(data => {
        setValidation(true)
        setShortenLink(data.result);
    }).catch(err => {
        setValidation(false)
        console.log('error')
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input === '') {
            setInputStatus(false);
        } else {
            setInputStatus(true);
            getShortenLink(input);
        }
    }

    const deleteLink = (id) => {
        dispatch(linkDeleted(id));
    }

    const textField_success = 'placeholder-neutral-grayViolet text-neutral-vDarkBlue border-transparent border-2 focus:outline-primary-cyan focus:border-transparent'

    const textField_fail = 'placeholder-secondary-red text-neutral-vDarkBlue border-2 border-secondary-red focus:outline-primary-cyan focus:border-transparent'

    let textField_class = (inputStatus && validation) ? textField_success : textField_fail;

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    return (
        <>
            <section className='max-w-[1108px] mx-auto p-4 md:px-16 lg:p-4 mt-10'>
                <div className='bg-neutral-vDarkBlue p-5 lg:p-10 rounded-lg bg-form-background lg:bg-form-bg-lg bg-no-repeat bg-cover bg-right-7 lg:bg-right'>
                    <form action="" className='lg:flex lg:items-center lg:justify-between'>
                        <div className=' lg:flex-[8]'>
                            <input onChange={handleInput} value={input} type="text" className={`rounded-md w-full lg:h-[50px] ${textField_class}`} placeholder='Shorten a link here...' />
                            {
                                !inputStatus &&
                                <span className='block lg:absolute italic text-secondary-red my-1 text-sm'>Please add a link</span>
                            }

                            {
                                !validation &&
                                <span className='block lg:absolute italic text-secondary-red my-1 text-sm'>Please add a valid link</span>
                            }
                        </div>

                        <button onClick={handleSubmit} className='secondary-btn mt-4 lg:mt-0 lg:flex-[2] lg:ml-10 text-lg'>
                            Shorten It!
                        </button>
                    </form>
                </div>
            </section>

            <div className='max-w-[1108px] mx-auto p-4 md:px-16 lg:p-0 mt-4'>
                {
                    getShortenData.map(data => (
                        <div key={data.id} className="bg-white relative shadow rounded-md mb-6 lg:flex lg:justify-between lg:items-center">
                            <p className='text-neutral-vDarkViolet p-4 '>
                                {data.oriLink}
                            </p>

                            <div className='border-t-[0.2px] lg:hidden border-neutral-vDarkBlue'></div>

                            <div className='p-4 lg:flex lg:items-center'>
                                <p className='text-primary-cyan mb-4 lg:mb-0 lg:mr-5'>
                                    {data.shortenLink.full_short_link}
                                </p>
                                <CopyToClipboard
                                    text={data.shortenLink.full_short_link}
                                >
                                    <button onClick={() => dispatch(linkCopied(data.id))} className={data.copied ? 'secondary-btn bg-neutral-vDarkBlue hover:bg-neutral-vDarkBlue' : 'secondary-btn'}>
                                        {data.copied ? 'Copied' : 'Copy'}
                                    </button>
                                </CopyToClipboard>

                            </div>

                            <div onClick={()=> deleteLink(data.id)} className='absolute top-[10%] lg:top-[50%] lg:translate-y-[-50%] right-[-10px] lg:right-[-50px] w-9 h-9 bg-secondary-red flex justify-center items-center rounded-full shadow cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default ShortenForm;
