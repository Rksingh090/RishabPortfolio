import React from 'react'

import profileImg from '../../assets/images/profile.jpg';

import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai';
import { useHome } from '../../context/HomeContext';

const AboutSection = () => {

    const { onHoverStart, onHoverEnd } = useHome();

    return (
        <div className="aboutSection flexCol " id="about">
            <div className="aboutContainer">
                <h2 className='sectionHeading'>About Me</h2>
                <div className="innerAboutSec">
                    <div className='myProfile'>
                        <img src={profileImg} className='profileImg' />
                        <div className="profileImgBorder"></div>
                    </div>
                    <div className='aboutMeTexts'>
                        <p className='aboutParas'>
                            Hello and welcome to my portfolio! My name is <span className='bgText bigText2'>Rishab Singh</span>, and I'm a passionate software developer with 6 months of experience in the IT industry. During this time, I had the opportunity to work for a startup where I developed my skills in <span className='bgText'>ReactJS, Node JS, Mongo DB, Docker, Go, HTML, CSS, JS/JSX, ExpressJS, WebSockets,</span> and more.
                        </p>
                        <p className='aboutParas'>
                            As a software developer, I believe in the power of technology to transform the world, and I'm excited to be part of this revolution. I'm a quick learner and enjoy keeping up with the latest trends and technologies in the industry.
                        </p>
                        <p className='aboutParas'>
                            I'm passionate about building user-friendly, responsive, and scalable applications. I take pride in my attention to detail and my ability to write clean, efficient, and well-documented code. I'm a team player and enjoy collaborating with others to create the best possible solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection