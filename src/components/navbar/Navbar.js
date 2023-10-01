import React, { useEffect, useRef, useState } from 'react';
import "./navbar.css";

import { IoMdClose } from 'react-icons/io';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { AnimatePresence, motion } from 'framer-motion';

import { useHome } from '../../context/HomeContext';
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Navbar = () => {
    const { onHoverStart, onHoverEnd } = useHome()

    const sheetRef = useRef();
    const outsideclickref = useRef()


    const [isOpen, setIsOpen] = useState(false);
    const [bottomY, setBottomY] = useState(0);


    useEffect(() => {

        const outsideClickHandler = (e) => {
            if (outsideclickref.current && !outsideclickref.current.contains(e.target)) {
                if (isOpen === true) {
                    setIsOpen(false)
                }
            }
        }

        window.addEventListener("mousedown", outsideClickHandler)
        return () => window.removeEventListener("mousedown", outsideClickHandler);

    }, [outsideclickref, isOpen])

    const sheetCurr = sheetRef?.current;

    useEffect(() => {
        const handleTouchStart = (e) => {
            // e.preventDefault()
        }

        sheetCurr?.addEventListener("touchstart", handleTouchStart, { passive: false })

        return () => sheetCurr?.removeEventListener("touchstart", handleTouchStart, { passive: false })
    }, [sheetCurr])

    useEffect(() => {
        const handleTouchMove = (e) => {
            if (isOpen) {
                const maxDeltaY = sheetCurr.clientHeight;
                const deltaY = e.touches[0].clientY;

                const newBottomPosition = maxDeltaY - deltaY;
                if (e.cancelable) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                if (newBottomPosition > 0) return;

                setBottomY(-newBottomPosition)

            }
        }

        sheetCurr?.addEventListener("touchmove", handleTouchMove, { passive: false })

        return () => sheetCurr?.removeEventListener("touchmove", handleTouchMove, { passive: false })
    }, [sheetCurr])

    useEffect(() => {
        const handleTouchEnd = (e) => {
            if (isOpen) {
                const sheetHeight = sheetCurr?.clientHeight;
                if (bottomY > (0.4 * sheetHeight)) {
                    setIsOpen(false)
                    setBottomY(0)
                } else {
                    setBottomY(0)
                }
            }
        }

        sheetCurr?.addEventListener("touchend", handleTouchEnd, { passive: false })

        return () => sheetCurr?.removeEventListener("touchend", handleTouchEnd, { passive: false })
    }, [sheetCurr, bottomY])

    return (
        <div className='navbar' ref={outsideclickref}>
            <div className='navcontainer'>
                <a href="/#intro" className='heading'>
                    <h2>
                        <span className='angleOpen'>&lt;</span>
                        <span>R.S </span>
                        <span className='angleClose'>/&gt;</span>
                    </h2>
                </a>
                <div
                    className='menuHamburger'
                    onClick={() => setIsOpen(prev => prev === true ? false : true)}
                >
                    <HiOutlineMenuAlt3 color='#fff' size={24} />
                </div>
                <div className='navlinkarea'>
                    <ul className='navLinks'>
                        <li><a href="#intro"><span>Intro</span><span className='closeLink'>/&gt;</span></a></li>
                        <li><a href="#skills"><span>Skills</span><span className='closeLink'>/&gt;</span></a></li>
                        <li><a href="#projects"><span>Projects</span><span className='closeLink'>/&gt;</span></a></li>
                        <li><a href="#experiance"><span>Experiance</span><span className='closeLink'>/&gt;</span></a></li>
                        <li><a href="#about"><span>About</span><span className='closeLink'>/&gt;</span></a></li>
                    </ul>
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: "40vh" }}
                        animate={{ y: 0 }}
                        transition={{
                            ease: "easeInOut"
                        }}
                        exit={{ y: "40vh" }}
                        style={{
                            translateY: bottomY
                        }}
                        className='mobNavlinkArea'
                        ref={sheetRef}

                    >

                        <div className="barView"><span className='bar'></span></div>
                        <div className="padWithFullXY">

                            <ul className='mobNavLinks'>
                                <li><a href="#intro"><span>Intro</span><span className='closeLink'>/&gt;</span></a></li>
                                <li><a href="#skills"><span>Skills</span><span className='closeLink'>/&gt;</span></a></li>
                                <li><a href="#projects"><span>Projects</span><span className='closeLink'>/&gt;</span></a></li>
                                <li><a href="#experiance"><span>Experiance</span><span className='closeLink'>/&gt;</span></a></li>
                                <li><a href="#about"><span>About</span><span className='closeLink'>/&gt;</span></a></li>
                            </ul>

                            <div className="navSocialIcons">
                                <a className='icon' target='_blank' rel='noreferrer' href="https://github.com/Rksingh090" >
                                    <FiGithub size={18} />
                                </a>
                                <a className='icon' target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/rishab-singh-b97554198" >
                                    <FiLinkedin size={18} />
                                </a>
                                <a className='icon' target='_blank' rel='noreferrer' href="https://twitter.com/rishabs58256087?lang=en" >
                                    <FiTwitter size={18} />
                                </a>
                                <a className='icon' target='_blank' rel='noreferrer' href="https://www.instagram.com/08__rishab/" >
                                    <FiInstagram size={18} />
                                </a>
                            </div>

                            <div className='navContactAddress'>
                                <a className="" href="mailto:w3b.dev.rishu@gmail.com">w3b.dev.rishu@gmail.com</a>
                                <a className="" href="tel:9022489938">+91 9022489938</a>
                            </div>

                            {/* download resume btn  */}
                            <div className='mobileNavBtns'>
                                <a href="https://drive.google.com/file/d/15nC0U7QtgdlALO1aSqr63JKKpKG5vbpJ/view"
                                    className='downloadAction'
                                    download={"Rishab Singh"}
                                    onMouseEnter={onHoverStart}
                                    onMouseLeave={onHoverEnd}
                                    target="_blank"
                                    rel='noreferrer'
                                >
                                    Download Resume
                                </a>
                            </div>

                            {/* <div className="classLink flexCenter"
                            onMouseEnter={onHoverStart}
                            onMouseLeave={onHoverEnd}
                            onClick={() => setIsOpen(false)}
                        >
                            <IoMdClose size={20} color='#fff' />
                        </div> */}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    )
}

export default Navbar