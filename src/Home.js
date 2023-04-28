import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import "./styles/home.css";

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
import profileImg from './assets/images/profile.jpg';

import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';

const Home = () => {
    const skillsRef = useRef();
    const [isVisible, setIsVisible] = useState(false);

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
            skill: "Express JS",
            logo: expressSvg
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


    return (
        <div>

            <Navbar />

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
                            <a href="/#skills" className='greetAction'>Let me show You.....</a>
                        </div>
                    </div>
                </div>

                {/* skill section  */}
                <div className="skillSections" id="skills">
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
                <div className="aboutSection" id="about">
                    <div className="innerAboutSec">
                        <div className='myProfile'>
                            <div className='profileImgDiv'>
                                <img src={profileImg} alt="" />
                            </div>
                            <div className='profileMainData'>
                                <h2 className='profileName'>Rishab Singh</h2>

                                <div>
                                    <a href='mailto:w3b.dev.rishu@gmail.com' className='profileEmail'>w3b.dev.rishu@gmail.com</a>
                                    <a href='phone:9022489938' className='profilePhone'>9022489938</a>
                                </div>

                                <div>
                                    <a href="https://linkedin.com" className='socialLinks'>
                                        <FaLinkedinIn />
                                        <span>LinkedIn</span>
                                    </a>
                                    <a href="https://linkedin.com" className='socialLinks'>
                                        <AiFillGithub />
                                        <span>Github</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className='aboutMeTexts'>
                            <p className='aboutParas'>
                                Hello and welcome to my portfolio! My name is <span className='bgText bigText2 space1'>Rishab Singh</span>, and I'm a passionate software developer with 6 months of experience in the IT industry. During this time, I had the opportunity to work for a startup where I developed my skills in <span className='bgText space1'>ReactJS, Node JS, Mongo DB, Docker, Go, HTML, CSS, JS/JSX, ExpressJS, WebSockets,</span> and more.
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

            </div>
            <Footer />
        </div>
    )
}

export default Home