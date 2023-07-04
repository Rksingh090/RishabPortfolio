import React, { useState } from 'react';
import "./navbar.css";

import { IoMdClose } from 'react-icons/io';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { AnimatePresence, motion } from 'framer-motion';

import { useHome } from '../../context/HomeContext';

const Navbar = () => {
    const { onHoverStart, onHoverEnd } = useHome()

    const [showMobileBar, setShowMobileBar] = useState(false);

    return (
        <div className='navbar'>
            <div className='navcontainer'>
                <a href="/#intro" className='heading'>
                    <h2>
                        <span className='angleOpen'>&lt;</span>
                        <span>R.S </span>
                        <span className='angleClose'>/&gt;</span>
                    </h2>
                </a>
                <div className='menuHamburger'
                    onClick={() => setShowMobileBar(prev => prev === true ? false : true)}
                ><HiOutlineMenuAlt3 color='#fff' size={24} /></div>
                <div className='navlinkarea'>
                    <ul className='navLinks'>
                        <li><a href="#intro"><span>Intro</span><span className='closeLink'>/&gt;</span></a></li>
                        <li><a href="#skills"><span>Skills</span><span className='closeLink'>/&gt;</span></a></li>
                        <li><a href="#projects"><span>Projects</span><span className='closeLink'>/&gt;</span></a></li>
                        <li><a href="#about"><span>About</span><span className='closeLink'>/&gt;</span></a></li>
                    </ul>
                </div>
            </div>
            <AnimatePresence>
                {showMobileBar && (
                    <motion.div
                        initial={{ x: 400 }}
                        animate={{ x: 0 }}
                        exit={{ x: 400 }}
                        className='mobNavlinkArea'>
                        <ul className='mobNavLinks'>
                            <li><a href="#intro"><span>Intro</span><span className='closeLink'>/&gt;</span></a></li>
                            <li><a href="#skills"><span>Skills</span><span className='closeLink'>/&gt;</span></a></li>
                            <li><a href="#projects"><span>Projects</span><span className='closeLink'>/&gt;</span></a></li>
                            <li><a href="#gallery"><span>Gallery</span><span className='closeLink'>/&gt;</span></a></li>
                            <li><a href="#about"><span>About</span><span className='closeLink'>/&gt;</span></a></li>
                        </ul>
                        <div className="classLink flexCenter"
                            onMouseEnter={onHoverStart}
                            onMouseLeave={onHoverEnd}
                            onClick={() => setShowMobileBar(false)}
                        ><IoMdClose size={20} color='#fff' /></div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Navbar