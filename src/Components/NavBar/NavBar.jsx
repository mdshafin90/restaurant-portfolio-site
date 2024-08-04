import React, { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import { FiChevronDown, FiMenu } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import logo from '../../../public/restaurant-icon.png';

const NavBar = () => {
    const Links = [
        { name: "Home", link: "/" },
        { name: "Menu", link: "/menu" },
        { name: "Reservations", link: "#" },  // Link placeholder
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
        { name: "Sign In", link: "/signIn" }
    ];

    const [open, setOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [isNestedMenuOpen, setIsNestedMenuOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
        if (isSubMenuOpen) {
            setIsSubMenuOpen(false);
        }
        if (isNestedMenuOpen) {
            setIsNestedMenuOpen(false);
        }
    };

    const toggleSubMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    return (
        <header className="bg-cover bg-center bg-no-repeat bg-[url('https://static.vecteezy.com/system/resources/thumbnails/030/200/615/small_2x/cup-of-coffee-espresso-beans-web-banner-with-copy-space-generative-ai-photo.jpg')] shadow-md fixed w-full top-0 left-0 z-50">
            <div className="container mx-auto flex items-center justify-between py-4 md:px-10 px-7">
                {/* Logo */}
                <div className="flex items-center gap-1 font-bold text-2xl cursor-pointer">
                    <NavLink exact to="/">
                        <img src={logo} alt="logo" className="h-12 w-auto" />
                    </NavLink>
                    <NavLink exact to="/">
                        <span className="text-black">Tasteful Table</span>
                    </NavLink>
                </div>
                {/* Menu icon */}
                <div onClick={toggleMenu} className="text-2xl md:hidden cursor-pointer">
                    {open ? <FaXmark /> : <FiMenu />}
                </div>
                {/* Menu */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:bg-transparent md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-14 opacity-100' : 'top-[-490px] opacity-0 md:opacity-100'}`}>
                    {Links.map((link) => (
                        link.name === "Reservations" ? (
                            <li key={link.name} className='relative md:ml-8 md:my-0 my-7 font-semibold group'>
                                <button onClick={toggleSubMenu} className='flex items-center text-gray-800 hover:text-blue-700 duration-500'>
                                    {link.name} <FiChevronDown className='ml-1' />
                                </button>
                                {/* Submenu */}
                                <ul className={`absolute left-0 mt-2 bg-white border rounded-md shadow-lg z-10 w-48 transition-opacity duration-300 ease-in-out ${isSubMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                    <li>
                                        <NavLink to="/bookATable" className='block px-4 py-2 hover:bg-gray-100' onClick={() => setOpen(false)}>
                                            Book a Table
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/bookForToday" className='block px-4 py-2 hover:bg-gray-100' onClick={() => setOpen(false)}>
                                            Book for Today
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/bookForFuture" className='block px-4 py-2 hover:bg-gray-100' onClick={() => setOpen(false)}>
                                            Book for Future Date
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/privateDining" className='block px-4 py-2 hover:bg-gray-100' onClick={() => setOpen(false)}>
                                            Private Dining
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                        ) : (
                            <li key={link.name} className='md:ml-8 md:my-0 my-7 font-semibold'>
                                <NavLink exact to={link.link} className='text-gray-800 hover:text-blue-700 duration-500' onClick={() => setOpen(false)}>
                                    {link.name}
                                </NavLink>
                            </li>
                        )
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default NavBar;