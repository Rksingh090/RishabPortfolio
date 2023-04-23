import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import "./styles/home.css";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import profileImg from './assets/profile.jpg';

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

import ProjectLine from './components/Projectline';

const Home = () => {
    const skillsRef = useRef();
    const [isVisible, setIsVisible] = useState(false);

    const [skills, setSkills] = useState([
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
    ])

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
            <div className='homeContainer'>

                {/* introduction  */}
                <div className='introSection' id="intro">
                    <div className='timeline'>
                        <div className='startpointer'></div>
                        <div className='endpointer'></div>
                    </div>
                    <div className='myIntroduction'>
                        <p className='subPoint startPoint'>Start /&gt;</p>

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

                        <a href="/#skills" className='greetAction'>Let me show You.....</a>
                    </div>
                </div>

                {/* skill section  */}
                <div className="skillSections" id="skills">
                    <div className='topBottomSkils'>
                        <div className="skillSets" ref={skillsRef}>
                            {skills.map((skill, idx) => {
                                let delay = Number(idx) * 0.8;
                                let img = Number(idx) * 0.8;
                                return (
                                    <div key={idx} className={`skillItem ${isVisible && "active"}`} style={{ "--delay": delay + "s" }}>
                                        <img className={`${isVisible && "active"}`} style={{ "--img": img + "s" }} src={skill.logo} alt="" />
                                        <p>{skill.skill}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>


                {/* projects section  */}
                <div className='projects' id="projects">
                    <ProjectLine />
                </div>

            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Home