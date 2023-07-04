import React, { useEffect, useRef, useState } from 'react'
import "./styles/home.css";
import "./util/utils.css";

import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import IntroSection from './components/home/IntroSection';
import SkillSection from './components/home/SkillSection';
import AboutSection from './components/home/AboutSection';
import ProjectLine from './components/home/Projectline';

import { useHome } from './context/HomeContext';

import { FiGithub, FiInstagram, FiLinkedin, FiTwitter, } from 'react-icons/fi';


const Home = () => {

    const mouseFollow = useRef();

    const { hovered } = useHome()

    const [cursorPoint, setCursorPoint] = useState({
        x: 0,
        y: 0
    });

    // cursor movement 
    const handleCursorMove = (mouseE) => {
        const { pageY, pageX } = mouseE;
        setCursorPoint({
            x: pageX,
            y: pageY
        })
    }

    useEffect(() => {
        document.addEventListener("mousemove", handleCursorMove)
        return () => document.removeEventListener("mousemove", handleCursorMove);
    }, [])


    return (
        <div className='myHomePage'>


            {/* mouse cursor  */}
            <div
                className={`cursorBorder ${hovered && "hovered"} `}
                style={{ left: cursorPoint.x - 18, top: cursorPoint.y - 18 }} ref={mouseFollow}>
            </div>

            <div className='fixedSocialIconsLeft'>
                <a className='hoverTranslateUp hoverColorChange' href="https://github.com/Rksingh090" ><FiGithub size={22} /></a>
                <a className='hoverTranslateUp hoverColorChange' href="https://www.linkedin.com/in/rishab-singh-b97554198" ><FiLinkedin size={22} /></a>
                <a className='hoverTranslateUp hoverColorChange' href="https://twitter.com/rishabs58256087?lang=en" ><FiTwitter size={22} /></a>
                <a className='hoverTranslateUp hoverColorChange' href="https://www.instagram.com/08__rishab/" ><FiInstagram size={22} /></a>
                <div className='verticalBottomLine'></div>
            </div>

            <div className='fixedContactRight'>
                <div>
                    <a href="mailto:w3b.dev.rishu@gmail.com">w3b.dev.rishu@gmail.com</a>
                    <div className='verticalBottomLine'></div>
                </div>
                <div>
                    <a href="tel:9022489938">+91 9022489938</a>
                    <div className='verticalBottomLine'></div>
                </div>
            </div>

            <div className='homeContainer'>
                {/* navbar  */}
                <Navbar />

                {/* intro section  */}
                <IntroSection />

                {/* about section  */}
                <AboutSection />

                {/* skill section  */}
                <SkillSection />

                {/* projects section  */}
                <ProjectLine />

                {/* projects section  */}
                {/* <HireMe /> */}

                <Footer />
            </div>
        </div>
    )
}

export default Home