import { useState } from 'react';

import brandRecognition from '../images/icon-brand-recognition.svg';
import detailedRecords from '../images/icon-detailed-records.svg';
import customizable from '../images/icon-fully-customizable.svg';

const Statistics = () => {

    const commonStyles = 'flex flex-col md:flex-row bg-white rounded-md';
    const cardStyles = 'rounded-full md:p-4 md:w-16 p-6 bg-url-primary-violet absolute md:-top-8 -top-10 md:left-7 left-[35%] lg:mb-16';

    return(
        <div className='w-full '>
            <h1 className='md:text-4xl text-3xl text-center mx-auto px-2 sm:w-3/4 lg:w-5/12 pt-[300px] font-bold subpixel-antialiased'>
                Advanced Statistics
            </h1>
            <div className='md:w-4/6 w-[90%] mx-auto mt-4 justify-center'>
                <p className='text-url-gray-violet text-center md:text-base text-md md:w-[52%] md:mx-auto'>Trace how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>

            <div className='container mx-auto md:py-0 md:w-9/12 mt-24'>
                
                <div className='flex justify-center items-center h-2 bg-url-cyan absolute -bottom-52' />

                <div className='grid grid-cols-1 md:grid-cols-3 gap-16 max-w-screen-lg my-20 md:my-10 relative'>
                    
                    <div className={`${commonStyles} lg:mb-16 w-[90%] mx-auto md:w-[100%]`}>
                        <div className='p-6 flex-col relative'>
                            <div className={`${cardStyles}`}>
                                <img src={brandRecognition} alt='Brand recognition' />
                            </div>
                            <div className='md:mt-6 mt-14 py-4'>
                                <h3 className='font-bold text-2xl subpixel-antialiased md:text-left text-center'>
                                    Brand Recognition
                                </h3>
                                <p className='text-url-gray-violet text-base mt-4 font-normal leading-7 text-center md:text-left'>
                                    Boost your brand recognition with each click. Generic links don't mean a thing. Branded links helps instil confidence in your content.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={`${commonStyles} lg:mt-8 lg:mb-8 w-[90%] mx-auto md:w-[100%] z-20`}>
                        <div className='p-6 flex-col relative'>
                        <div className={`${cardStyles}`}>
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
                    <div className={`${commonStyles} lg:mt-16 w-[90%] mx-auto md:w-[100%] z-20`}>
                        <div className='p-6 flex-col relative'>
                        <div className={`${cardStyles}`}>
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
            </div>
        </div>
    );
}


export default Statistics;