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
import Experiance from './components/home/Experiance';


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
                <a className='hoverTranslateUp hoverColorChange' target='_blank' href="https://github.com/Rksingh090" ><FiGithub size={22} /></a>
                <a className='hoverTranslateUp hoverColorChange' target='_blank' href="https://www.linkedin.com/in/rishab-singh-b97554198" ><FiLinkedin size={22} /></a>
                <a className='hoverTranslateUp hoverColorChange' target='_blank' href="https://twitter.com/rishabs58256087?lang=en" ><FiTwitter size={22} /></a>
                <a className='hoverTranslateUp hoverColorChange' target='_blank' href="https://www.instagram.com/08__rishab/" ><FiInstagram size={22} /></a>
                <div className='verticalBottomLine'></div>
            </div>

            <div className='fixedContactRight'>
                <div>
                    <a className="hoverTranslateUp hoverColorChange" href="mailto:w3b.dev.rishu@gmail.com">w3b.dev.rishu@gmail.com</a>
                    <div className='verticalBottomLine'></div>
                </div>
                <div>
                    <a className="hoverTranslateUp hoverColorChange" href="tel:9022489938">+91 9022489938</a>
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

                {/* word Experiance section  */}
                <Experiance />
                
                {/* projects section  */}
                <ProjectLine />


                {/* footer  */}
                <Footer />
            </div>
        </div>
    )
}

export default Home