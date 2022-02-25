import illustrationWorking from '../images/illustration-working.svg';

const HomeIntro = () => {
    return(

        <div className='container mx-auto py-24 flex w-full md:w-9/12'>
            <div className='flex flex-col items-start'>
                <h2 className='text-3xl font-bold md:text-6xl mb-3 text-url-dark-blue'>
                    More than just <br /> shorter links
                </h2>
                <p className='text-md mb-2 lg:text-left text-url-gray font-medium'>
                    Build your brand recognition and get detailed insigts on how your links are performing.
                </p>
                <div className='flex flex-1 justify-center items-center d'>
                    <button className='btn btn-cyan rounded-full'>Get Started</button>
                </div>
            </div>

            <div className='flex md:item-end'>
                <img src={illustrationWorking} className='' alt="Welcome" />
            </div>
        </div>
    );
}



export default HomeIntro;