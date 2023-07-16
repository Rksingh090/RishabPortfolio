import React from 'react'
import { useHome } from '../../context/HomeContext'

const IntroSection = () => {

    const { onHoverEnd, onHoverStart } = useHome();

    return (
        <div className='introSection' id="intro" >
            {/* introduction  */}
            <div className='myIntroduction mainContentContainer'>
                <p className='introSubtitle ffAnuphan'>Hi, my name is</p>
                <h2 className='introTitle ffAnuphan'>Rishab Singh.</h2>
                <h2 className='introDynamicText'>
                    <span>I'm a</span>
                    <div className='dynamictext'>
                        <span className=''>UI/UX Designer</span>
                        <span className=''>Web Developer</span>
                        <span className=''>Android Developer</span>
                        <span className=''>IOS Developer</span>
                    </div>
                </h2>
                <p className='introTextSummary ffAnuphan'>
                    As a developer with experience in Android and iOS app development, as well as web and UI/UX design, I possess a well-rounded set of skills that enables me to create comprehensive solutions for various platforms.
                </p>
                <div className='introBtns'>
                    <a href="/#skills" className='greetAction'
                        onMouseEnter={onHoverStart}
                        onMouseLeave={onHoverEnd}
                    >
                        Explore Now.....
                    </a>
                    <a href="https://download1581.mediafire.com/tb6ck72lhabgPnktB6Y0ARtah84o8EAh-QQ-Q57-EaB-QsHaeVo4VcnuFZ10E0I5omxh6I8FPHEohPPSsHGF596uZrDKM3CvPv-kJwL_ouZzkLm4AZR8qz0Vhyzx0CEJcJyVWNuSZielBz3I_V6XaIeXdQaCHo7S7S_xddYKMkAm8MY/uvg0yjy475e6q2b/Rishab_Singh_CV.pdf"
                        className='downloadAction'
                        download={"Rishab Singh"}
                        onMouseEnter={onHoverStart}
                        onMouseLeave={onHoverEnd}
                        target="_blank"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default IntroSection