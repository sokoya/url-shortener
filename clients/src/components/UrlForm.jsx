import { useState } from 'react';
import brandRecognition from '../images/icon-brand-recognition.svg';
import detailedRecords from '../images/icon-detailed-records.svg';
import customizable from '../images/icon-fully-customizable.svg';


const shorltLinkStyles = 'flex flex-col md:flex-row md:mx-auto md:w-[80%] mx-7 py-3 bg-white rounded-lg my-4 md:justify-between md:items-center';


import { createShortUrls } from '../actions/urls';

const UrlForm = () => {

    const [urlText, setUrlText] = useState('');
    const [error, setError] = useState(false);
    const [shortCode, setShortCode] = useState(null);
    const [copiedUrl, setCopiedUrl] = useState('');

    const handleSubmit = ( e ) => {
        e.preventDefault();
        if( urlText.length === undefined || urlText.length < 1 ){
            setError(true);
            return false;
        };
        const response = createShortUrls( urlText );
        response.then( fulfilled => {
            const { ok, result } = fulfilled;
            if( ok ){
                setShortCode( result.code );
            }
        })
        // clearForm();
    }

    const urlTextChanged = ( e ) => {
        if( e.target.value === undefined || e.target.value.length < 1 ) setError(false); 
        setUrlText(e.target.value);
    }

    const copyUrl = (url) =>{
        setCopiedUrl(url);
    }

    return(
        <>
        {/* absolute, relative */}
            <div className='bg-gray-100 h-auto w-full'>
                <div className="container md:ml-10">
                    <form className="relative -top-14" onSubmit={handleSubmit}>
                        <div className="
                        bg-url-primary-violet 
                        flex flex-col 
                        md:flex-row gap-3 
                        md:mx-auto 
                        md:w-[80%] 
                        mx-7 
                        md:p-10 p-6 
                        rounded-lg py-4
                        md:bg-[url('../../src/images/bg-shorten-desktop.svg')]
                        bg-[url('../../src/images/bg-shorten-mobile.svg')]
                        ">
                            <div className='flex-[2]'>
                                <input 
                                    value={urlText} 
                                    onChange={urlTextChanged} 
                                    type='text' 
                                    className={`flex-1 
                                    focus:outline-none px-4 py-3 rounded-lg text-url-dark-violet w-full border-2 border-url-primary-violet ${error && 'border-2 border-url-red placeholder:text-url-red'}`} 
                                    placeholder='Shorten a link here' />
                                    {error && (
                                        <>
                                            <br />
                                            <span className='text-url-red text-[14px] font-extralight italic'>
                                                Please add a link
                                            </span>
                                        </>
                                    )}
                                    
                            </div>
                            <div className='md:flex-[0.5] flex-1'>
                                <button type='submit'
                                className='btn btn-cyan rounded-md w-full md:h-[54px] h-14 hover:bg-cyan-300'>
                                    Shorten It!
                                </button>
                            </div>
                        </div>
                    </form>
                    {/* Short Links */}
                    { shortCode !== null && (
                        <div className='md:-mt-8 -mt-10'>
                            {['shrco.de/', '9qr.de/', 'shiny.link/'].map(( item ) => (
                               <div className={`${shorltLinkStyles} mt-0`} key={item}>
                                    <div className='border-b-[1px] md:border-b-0 py-2 flex-1 px-4'>
                                        <span className=' text-url-primary-violet text-center'>{urlText}</span>
                                    </div>
                                    <div className='m-2 px-2'>
                                        <h3 className='text-url-cyan'>{`${item}${shortCode}`}</h3>
                                    </div>
                                    <div className='mx-4 md:ml-2'>
                                        {/* ${copiedCurl} === ${item}${shortCode} ? url-primary-violet : btn-cyan */}
                                        <button 
                                            className={`btn w-full rounded-md px-8 py-2 ${item === copiedUrl ? 'bg-url-primary-violet' : 'btn-cyan hover:bg-cyan-300'}`}
                                            onClick={() => setCopiedUrl(item)}
                                        >
                                            {copiedUrl === item ? 'Copied !' : 'Copy'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>    
                    )}
                </div>
                <div className='w-full'>
                    <h1 className='md:text-4xl text-3xl text-center mx-auto px-2 sm:w-3/4 lg:w-5/12 font-bold subpixel-antialiased mt-24'>
                        Advanced Statistics
                    </h1>
                    <div className='md:w-4/6 w-[90%] mx-auto mt-4 justify-center'>
                        <p className='text-url-gray-violet text-center md:text-base text-md md:w-[52%] md:mx-auto'>Trace how your links are performing across the web with our advanced statistics dashboard.</p>
                    </div>

                    <div className='container mx-auto py-10 md:w-9/12 mt-auto relative'>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 max-w-screen-lg my-20 md:my-10 '>
                            <div className='flex flex-col md:flex-row bg-white rounded-md lg:mb-36 w-[90%] mx-auto md:w-[100%] z-10'>
                                <div className='p-6 flex-col relative'>
                                    <div className='rounded-full md:p-4 md:w-16 p-6 bg-url-primary-violet 
                                    absolute md:-top-8 -top-10 md:left-7 left-[35%] lg:mb-16'>
                                        <img src={brandRecognition} alt='Brand recognition' />
                                    </div>
                                    <div className='md:mt-6 mt-14 py-4'>
                                        <h3 className='font-bold text-2xl subpixel-antialiased md:text-left text-center'>
                                            Brand Recognition
                                        </h3>
                                        <p className='text-url-gray-violet text-base mt-4 font-normal leading-7 text-center md:text-left px-1'>
                                            Boost your brand recognition with each click. Generic links don't mean a thing. Branded links helps instil confidence in your content.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row bg-white rounded-md lg:mt-16 lg:mb-24 mt-4 w-[90%] mx-auto md:w-[100%] mb-6 z-10'>
                                <div className='p-6 flex-col relative'>
                                <div className='rounded-full md:p-4 md:w-16 p-6 bg-url-primary-violet 
                                    absolute md:-top-8 -top-10 md:left-7 left-[35%] lg:mb-16'>
                                        <img src={detailedRecords} alt='Detailed Records' />
                                    </div>
                                    <div className='md:mt-6 mt-14 py-4'>
                                        <h3 className='font-bold text-2xl subpixel-antialiased md:text-left text-center'>
                                            Detailed Records
                                        </h3>
                                        <p className='text-url-gray-violet text-base mt-4 font-normal leading-7 text-center md:text-left'>
                                            Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row bg-white rounded-md  lg:mt-28 w-[90%] mx-auto md:w-[100%] mb-6 z-10'>
                                <div className='p-6 flex-col relative'>
                                <div className='rounded-full md:p-4 md:w-16 p-6 bg-url-primary-violet 
                                    absolute md:-top-8 -top-10 md:left-7 left-[35%] lg:mb-16'>
                                        <img src={customizable} alt='Fully customizable' />
                                    </div>
                                    <div className='md:mt-6 mt-14 py-4'>
                                        <h3 className='font-bold text-2xl subpixel-antialiased md:text-left text-center'>
                                            Fully Customizable
                                        </h3>
                                        <p className='text-url-gray-violet text-base mt-4 font-normal leading-7 text-center md:text-left'>
                                            Improve brand awareness and content awareness and content discoverability through customizable links, supercharging audience engagement.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='
                        flex 
                        flex-col
                        md:-top-80
                        top-20
                        md:relative
                        absolute
                        left-[47%]
                        md:left-0
                        '>
                            <div className='md:h-2 h-[800px] md:w-[100%] w-2 bg-url-cyan'></div>
                        </div>

                        {/* 
                        
                        <div className='
                        flex 
                        flex-col
                        relative 
                        -top-80'>
                            <div className='md:h-2 w-[100%] bg-url-cyan'></div>
                        </div>

                        */}
                        {/* <div className='
                        flex 
                        flex-col
                        justify-center
                        md:justify-start
                        items-center
                        md:items-start
                        relative 
                        md:-top-72
                        -top-[1000px]'>
                            <div className='md:h-[6px] min-h-screen w-2 bg-url-cyan'></div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}


export default UrlForm;