import React, { useMemo } from 'react';

import htmlSvg from '../../assets/svg/html.svg';
import cssSvg from '../../assets/svg/css.svg';
import jsSvg from '../../assets/svg/javaScript.svg';
import reactSvg from '../../assets/svg/react.svg';
import nodeSvg from '../../assets/svg/nodejs.svg';
import flutterSvg from '../../assets/svg/flutter.svg';
import mongoSvg from '../../assets/svg/mongo.svg';
import goSvg from '../../assets/svg/go.svg';
import mysqlSvg from '../../assets/svg/mysql.svg';
import dockerSvg from '../../assets/svg/docker.svg';
import djangoSvg from '../../assets/svg/django.svg';
import gitSvg from '../../assets/svg/git.svg';

import figma from "../../assets/images/home/figma.png"
import illustrator from "../../assets/images/home/illustrator.png"
import photoshop from "../../assets/images/home/photoshop.png"

import { BsCheck2All } from 'react-icons/bs';

const SkillSection = () => {

    const skills = useMemo(() => [
        {
            skill: "HTML",
            logo: htmlSvg,
            percent: 95
        },
        {
            skill: "CSS",
            logo: cssSvg,
            percent: 90
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
            skill: "MongoDB",
            logo: mongoSvg
        },
        {
            skill: "MySql",
            logo: mysqlSvg
        },
        // {
        //     skill: "Go Lang",
        //     logo: goSvg
        // },
        // {
        //     skill: "Github",
        //     logo: gitSvg
        // },
        // {
        //     skill: "Docker",
        //     logo: dockerSvg
        // },
    ], [])

    return (
        <div className="skillSections flexCenter" id="skills">
            <div className='skillContainer'>
                <h2 className='sectionHeading'>Skills</h2>

                <div className='skillsDivided'>

                    {/* development  */}
                    <div className='skillGrid1'>
                        <h2 className='skillHeadingWhite'>Development</h2>
                        <div className="skillSets">
                            {skills.map((skill, idx) => {
                                let delay = (Number(idx) * 0.5) + 0.2;
                                let img = Number(idx) * 0.5;
                                return (
                                    <div key={idx} className={`skillItem`} style={{ "--delay": delay + "s" }}>
                                        <div className='skillImg'>
                                            <img style={{ "--img": img + "s" }} src={skill.logo} alt="" />
                                        </div>
                                        <p>{skill.skill}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* designing and other tools  */}
                    <div className='skillGrid2'>
                        <div className='designTools'>
                            <h2 className='skillHeadingWhite'>Design Tools</h2>
                            <div className='designSoftwares'>
                                <img src={photoshop} alt="" />
                                <img src={illustrator} alt="" />
                                <img src={figma} alt="" />
                            </div>
                        </div>
                        <div className='toolsAndknowledge'>
                            <div>
                                <h2 className='skillHeadingWhite'>Tools</h2>
                                <div className='developmentTools flexCol'>
                                    <p>
                                        <BsCheck2All />
                                        <span>Git + Github</span>
                                    </p>
                                    <p>
                                        <BsCheck2All />
                                        <span>Docker</span>
                                    </p>
                                    <p>
                                        <BsCheck2All />
                                        <span>Command Line</span>
                                    </p>
                                    <p>
                                        <BsCheck2All />
                                        <span>Chrome DevTools</span>
                                    </p>
                                    <p>
                                        <BsCheck2All />
                                        <span>Postman</span>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h2 className='skillHeadingWhite'>Knowledge</h2>
                                <div className='otherKnowledges flexCol'>
                                    <p>
                                        <BsCheck2All />
                                        <span>CSS Detangling</span>
                                    </p>
                                    <p>
                                        <BsCheck2All />
                                        <span>ECMAScript 7/8/9</span>
                                    </p>
                                    <p>
                                        <BsCheck2All />
                                        <span>Usability</span>
                                    </p>
                                    <p>
                                        <BsCheck2All />
                                        <span>SEO</span>
                                    </p>
                                    <p>
                                        <BsCheck2All />
                                        <span>Go Lang</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SkillSection