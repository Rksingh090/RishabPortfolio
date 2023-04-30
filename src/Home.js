import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import "./styles/home.css";
import "./util/utils.css";

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProjectLine from './components/Projectline';

import htmlSvg from './assets/svg/html.svg';
import cssSvg from './assets/svg/css.svg';
import jsSvg from './assets/svg/javaScript.svg';
import reactSvg from './assets/svg/react.svg';
import nodeSvg from './assets/svg/nodejs.svg';
import flutterSvg from './assets/svg/flutter.svg';
import mongoSvg from './assets/svg/mongo.svg';
import goSvg from './assets/svg/go.svg';
import mysqlSvg from './assets/svg/mysql.svg';
import dockerSvg from './assets/svg/docker.svg';
import djangoSvg from './assets/svg/django.svg';
import expressSvg from './assets/svg/express.svg';
import gitSvg from './assets/svg/git.svg';

import profileImg from './assets/images/profile.jpg';

import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai';
import { useHome } from './context/HomeContext';

const Home = () => {
    const skillsRef = useRef();
    const mouseFollow = useRef();

    const { hovered, onHoverStart, onHoverEnd } = useHome()
    const [isVisible, setIsVisible] = useState(false);

    const [cursorPoint, setCursorPoint] = useState({
        x: 0,
        y: 0
    });


    const skills = useMemo(() => [
        {
            skill: "HTML",
            logo: htmlSvg
        },
        {
            skill: "CSS",
            logo: cssSvg
        },
        {
            skill: "JavaScript",
            logo: jsSvg
        },
        {
            skill: "React JS",
            logo: reactSvg
        },
        {
            skill: "Node JS",
            logo: nodeSvg
        },
        {
            skill: "Django",
            logo: djangoSvg
        },
        {
            skill: "Flutter",
            logo: flutterSvg
        },
        {
            skill: "Github",
            logo: gitSvg
        },
        {
            skill: "MongoDB",
            logo: mongoSvg
        },
        {
            skill: "MySql",
            logo: mysqlSvg
        },
        {
            skill: "Go Lang",
            logo: goSvg
        },
        {
            skill: "Docker",
            logo: dockerSvg
        },
    ], [])

    const options = useMemo(() => {
        return {
            root: null,
            rootMargin: "0px",
            thresold: 1.0
        }
    }, []);

    const handleObserver = useCallback((entries) => {
        const [entry] = entries;
        if (!isVisible) {
            setIsVisible(entry.isIntersecting);
        }
    }, [isVisible])

    useEffect(() => {
        let skillCurrent = skillsRef.current;

        const observer = new IntersectionObserver(handleObserver, options);
        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }
        return () => observer.unobserve(skillCurrent)
    }, [skillsRef, options, handleObserver])

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

            <Navbar />
            <div className={`cursorBorder ${hovered && "hovered"} `}
                style={{ left: cursorPoint.x - 18, top: cursorPoint.y - 18 }} ref={mouseFollow}></div>

            {/* <audio src={bgAudio} autoPlay loop></audio> */}
            <div className='homeContainer'>

                {/* introduction  */}
                <div className='introSection' id="intro">
                    <div className='introWithLine'>
                        <div className='timeline'>
                            <div className='startpointer'></div>
                            <div className='endpointer'></div>
                        </div>
                        <div className='myIntroduction'>
                            <p className='subPoint startPoint'>Start /&gt;</p>
                            <div>
                                <h2 className='introLine1'><span>Hi, My name is </span><span className='myName'>Rishab Singh.</span></h2>
                                <h2 className='introLine2'>
                                    <span>I'm a</span>
                                    <div className='dynamictext'>
                                        <span className=''>UI/UX Designer</span>
                                        <span className=''>Web Developer</span>
                                        <span className=''>Android Developer</span>
                                        <span className=''>IOS Developer</span>
                                    </div>
                                </h2>
                            </div>
                            <a href="/#skills" className='greetAction'
                                onMouseEnter={onHoverStart}
                                onMouseLeave={onHoverEnd}
                            >Let me show You.....</a>
                        </div>
                    </div>
                </div>

                {/* skill section  */}
                <div className="skillSections flexCenter" id="skills">
                    <h2 className='sectionHeading'>Skills</h2>
                    <div className="skillSets" ref={skillsRef}>
                        {skills.map((skill, idx) => {
                            let delay = (Number(idx) * 0.5) + 0.2;
                            let img = Number(idx) * 0.5;
                            return (
                                <div key={idx} className={`skillItem ${isVisible && "active"}`} style={{ "--delay": delay + "s" }}>
                                    <div className='skillImg'>
                                        <img className={`${isVisible && "active"}`} style={{ "--img": img + "s" }} src={skill.logo} alt="" />
                                    </div>
                                    <p>{skill.skill}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>


                {/* projects section  */}
                <div className='projects' id="projects">
                    <ProjectLine />
                </div>

                {/* about section  */}
                <div className="gallerySection" id="gallery">
                    <h2 className='sectionHeading'>Gallery</h2>
                </div>

                {/* about section  */}
                <div className="aboutSection flexCol " id="about">
                    <h2 className='sectionHeading'>About Me</h2>
                    <div className="innerAboutSec">
                        <div className='myProfile'>
                            <div className='profileImgDiv'>
                                <img src={profileImg} alt="" />
                                <div className='profileImgBG'></div>
                            </div>
                            <div className='profileMainData'>
                                <h2 className='profileName'>Rishab Singh</h2>

                                <div className='flexCol'>
                                    <a href='mailto:w3b.dev.rishu@gmail.com' className='profileEmail'
                                        onMouseEnter={onHoverStart}
                                        onMouseLeave={onHoverEnd}
                                    >w3b.dev.rishu@gmail.com</a>
                                    <a href='tel:9022489938' className='profilePhone'
                                        onMouseEnter={onHoverStart}
                                        onMouseLeave={onHoverEnd}
                                    >9022489938</a>
                                </div>

                                <div className='flexRowICenter socialLinks'>
                                    <a href="https://www.linkedin.com/in/rishab-singh-b97554198/" target='_blank' rel="noreferrer" className='flexCenter halfRounded'
                                        onMouseEnter={onHoverStart}
                                        onMouseLeave={onHoverEnd}
                                    >
                                        <FaLinkedinIn />
                                    </a>
                                    <a href="https://github.com/Rksingh090" target='_blank' rel="noreferrer" className='flexCenter halfRounded'
                                        onMouseEnter={onHoverStart}
                                        onMouseLeave={onHoverEnd}
                                    >
                                        <AiFillGithub />
                                    </a>
                                    <a href="https://wa.me/9022489938" target='_blank' rel="noreferrer" className='flexCenter halfRounded'
                                        onMouseEnter={onHoverStart}
                                        onMouseLeave={onHoverEnd}
                                    >
                                        <AiOutlineWhatsApp />
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className='aboutMeTexts'>
                            <p className='aboutParas'>
                                Hello and welcome to my portfolio! My name is <span className='bgText bigText2'>Rishab Singh</span>, and I'm a passionate software developer with 6 months of experience in the IT industry. During this time, I had the opportunity to work for a startup where I developed my skills in <span className='bgText'>ReactJS, Node JS, Mongo DB, Docker, Go, HTML, CSS, JS/JSX, ExpressJS, WebSockets,</span> and more.
                            </p>
                            <p className='aboutParas'>
                                As a software developer, I enjoy creating innovative solutions that solve complex problems. I believe in the power of technology to transform the world, and I'm excited to be part of this revolution. I'm a quick learner and enjoy keeping up with the latest trends and technologies in the industry.
                            </p>
                            <p className='aboutParas'>
                                I'm passionate about building user-friendly, responsive, and scalable applications. I take pride in my attention to detail and my ability to write clean, efficient, and well-documented code. I'm a team player and enjoy collaborating with others to create the best possible solutions.
                            </p>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Home