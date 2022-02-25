import React, { useState } from 'react';


import logo from '../images/logo.svg';

const NavbarItem = ({ title, classProps, path }) => {
    return (
        <li className='mx-4 cursor-pointer'>
            <a href={path} title={title} 
            className={`${classProps}`}>
                {title}
            </a>
        </li>
    );
}

const Navbar = () => {
    const [ toggleMenu, setToggleMenu ] = useState(false);

    return (
        <div className='w-full my-4 flex md:justify-center justify-between items-center p-4'>
            <div className='md:flex-[0.2] mr-3'>
                <img src={logo} alt='URL Shortener' className='w-32 cursor-pointer' />
            </div>

            <ul className='md:flex md:w-1/2 hidden list-none flex-row'>
                {['Features', 'Pricing', 'Resources'].map( ( item, index) => (
                    <NavbarItem key={item + index} 
                    title={item} 
                    path="/"
                    classProps="text-url-gray-violet hover:text-url-dark-violet"  />
                ))}
            </ul>

            <ul className='md:flex hidden list-none flex-row justify-end items-center flex-inital'>
                {['Login'].map( ( item, index) => (
                    <NavbarItem 
                    path="/"
                    key={item + index} title={item}
                    classProps="text-url-gray-violet hover:text-url-dark-violet"  />
                ))}
                <li className='btn btn-cyan py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-cyan-300'>
                    Sign Up
                </li>
            </ul>

            {/* Mobile View */}
            <div className='flex relative'>
                {toggleMenu ? (
                    <span className='text-url-gray-violet md:hidden cursor-pointer text-[32px]'>
                        <i className="fas fa-bars" onClick={() => setToggleMenu(false)}></i> 
                    </span>
                ) : (
                    <span className='text-url-gray-violet md:hidden cursor-pointer text-[32px]'>
                         <i className="fas fa-bars" onClick={() => setToggleMenu(true)}></i> 
                    </span>
                )}
                {!toggleMenu && (
                    <div className="
                    container 
                    mx-4 
                    w-11/12
                     bg-url-primary-violet 
                    h-72 rounded-md 
                    fixed 
                    top-20 
                    md:hidden 
                    shadow-2xl
                    left-0">
                        <ul className='flex flex-col list-none justify-between items-center my-4 leading-10'>
                            {['Features', 'Pricing', 'Resources'].map( ( item, index) => (
                                <NavbarItem key={item + index} 
                                title={item} path='/' 
                                classProps='text-[16px] text-white font-bold' />
                            ))}
                        </ul>
                        <hr className='w-[80%] mx-auto text-slate-400 bg-slate-400'/>
                        <ul className='flex flex-col list-none justify-between items-center my-4 leading-10'>
                            <li className='text-white font-bold'>
                                <a href='/'>Login</a>
                            </li>
                            <li className='my-4'>
                                <button className='btn btn-cyan hover:bg-cyan-300 rounded-full w-full px-28 font-bold'>Sign Up</button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}


export default Navbar;