import illustrationWorking from '../images/illustration-working.svg';

const HomeIntro = () => {
    return(
        <div className='container mx-auto md:py-24 md:w-9/12 mb-20 md:mb-0'>
            <div className='md:flex-row flex flex-col-reverse gap-6'>
                <div className='flex-1'>
                    <div className='flex flex-col'>
                        <h2 className='text-url-dark-violet text-center font-black text-[42px] leading-none font-Poppins mb-4
                            md:text-left md:text-6xl
                        '>
                            More than just <br /> shorter links
                        </h2>

                        <p className='text-url-gray-violet text-center text-base md:text-left'>
                            Build your brand recognition and get detailed insigts on how your links are performing.
                        </p>
                        
                        <div className='py-6 flex mx-auto flex-1 md:flex-none md:mx-0'>
                            <button className='btn btn-cyan rounded-full hover:bg-cyan-300 px-10 py-4 text-lg md:text-base'>Get Started</button>
                        </div>
                    </div>
                </div>
                <div className='flex-1 -right-80 '>
                    <img src={illustrationWorking} className='' alt='Illustration Working' />
                </div>
            </div>
        </div>
    );
}

export default HomeIntro;