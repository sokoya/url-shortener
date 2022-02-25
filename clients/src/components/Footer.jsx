import  React from 'react';

// social media icon
import facebook from '../images/icon-facebook.svg';
import instagram from '../images/icon-instagram.svg';
import pinterest from '../images/icon-pinterest.svg';
import twitter from '../images/icon-twitter.svg';
import shortlyLogo from '../images/logo.svg';

const commonFooterStyle = 'md:text-sm text-base py-1 text-url-gray hover:text-url-cyan font-medium md:font-light hover:font-medium cursor-pointer md:leading-loose';
const socialStyle = 'cursor-pointer hover:bg-url-cyan md:w-8 md:h-8 w-10 p-2 rounded-md';
const Footer = () => {
    return(
        <>
            <div className='w-full bg-url-primary-violet '>
                <div className="flex flex-col items-center justify-center bg-[url('../../src/images/bg-boost-mobile.svg')] md:bg-[url('../../src/images/bg-boost-desktop.svg')] p-14 md:p-0">
                    <div className='text-center mt-4'>
                        <h2 className='font-extrabold text-white text-[28px] md:text-[30px] py-6'>Boost your links today</h2>
                        <button className='btn btn-cyan rounded-full hover:bg-cyan-300 px-10 py-4 text-lg md:text-base mb-10 font-semibold'>Get Started</button>
                    </div>
                </div>
            </div>
            <div className='w-full bg-url-dark-violet h-full py-[50px]'>
                <div className='container mx-auto md:w-9/12'>
                    <div className='flex flex-col md:flex-row justify-center'>
                        <div className='text-white flex-1 md:w-3/12 mb-10 mx-auto'>
                            <a className='text-white cursor-pointer'>
                                <img src={shortlyLogo} className='' alt='Shortly Logo'/>
                            </a>
                        </div>
                        <div className='text-white flex flex-col flex-1 leading-5 mx-auto md:mx-0 text-center md:text-left'>
                            <h3 className='font-semibold pb-4 '>Features</h3>
                            <span className={`${commonFooterStyle}`}>Link Shortening</span>
                            <span className={`${commonFooterStyle}`}>Branded Links</span>
                            <span className={`${commonFooterStyle}`}>Analytics</span>
                        </div>
                        <div className='text-white flex flex-col flex-1 leading-5 mx-auto md:mx-0 text-center md:text-left py-8 md:py-0'>
                            <h3 className='font-semibold pb-5 '>Resources</h3>
                            <span className={`${commonFooterStyle}`}>Blog</span>
                            <span className={`${commonFooterStyle}`}>Developers</span>
                            <span className={`${commonFooterStyle}`}>Support</span>
                        </div>
                        <div className='text-white flex flex-col flex-1 leading-5 mx-auto md:mx-0 text-center md:text-left'>
                            <h3 className='font-semibold pb-5'>Company</h3>
                            <span className={`${commonFooterStyle}`}>About</span>
                            <span className={`${commonFooterStyle}`}>Our Team</span>
                            <span className={`${commonFooterStyle}`}>Careers</span>
                            <span className={`${commonFooterStyle}`}>Contacts</span>
                        </div>
                        <div className='flex justify-center gap-2 mt-8 md:mt-0'>
                            <img src={facebook} className={`${socialStyle}`} alt='Facebook Icon' />
                            <img src={twitter}  className={`${socialStyle}`} alt='Twitter Icon' />
                            <img src={pinterest} className={`${socialStyle}`} alt='Pinterest Icon' />
                            <img src={instagram}  className={`${socialStyle}`} alt='Instagram Icon' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Footer;