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
                    <a href="https://doc-0k-ag-docs.googleusercontent.com/docs/securesc/cdtdn5bou4uvddbrm50ojvefc857491d/eh4cq9csb8dshb84dl8no3hjg5iheikf/1696155375000/05865055790528856887/05865055790528856887/15nC0U7QtgdlALO1aSqr63JKKpKG5vbpJ?e=download&ax=AA75yW46I2k2cBZG5E5m4SGxlAEuDslCjzc-TKh__kQkOOhZ_kHXNCAPQQJsKJHQgiGXahgIlw8m1N0kCR5X-7bJlBWWBM13JqqSv_IYsDJ9bvhcVbC2bxP4N9lgI0cHGyW5xpZFCjK-I5cBI_dqoSq3emdEFk8rfbqfwzgrt6pSOA-f8GK4U3DSdaSmmcddhsVRv3e50G5YzyJQShSmaHqv_x2ETbPrPziG1vjDQ0-YU1SQrKwVb1TzjRV0FvIogesNMImvq55mGOxR1GrJjTTkymC6cAH4VGi7RzOdj9SCLkS3D2_0Y7aanipiUz0KfSl5IAnu9W4kOq3YBP9tfhWklPcqK9KaZNyfuu8ggWFqwM8YoKB7HDHAkCdbP5jwA4T1I5x86CpVLMfs9nnffRC_UHNJ99-oed0e2o-heV-2G9pqpnPjKKRXHRXOsGuWcpUcgrEiery-CgtkZCxFqs8-8f3NE4Zi9z6QfmxrRTDGrfeNTCZYUvJ-IaVD6YUjv42g0sTO4oberYtIxqPa6gZeDXpAwm9qViczyyagH_u7Fqnhx8pX0ITV_qZk1PrZRRAQ64FTDPbFlI2sH8WbqlvNnEL6ifLavGUsQ1_FigKTRNgAXge0CufxHc85xiHTuD44FlWjue5vcHC78llUfoQeLsQCc-GU7vGAbX18QZ9ZKZv5Ul9VIBQIuRs181TCmFeuelB81KcTEFs_B56i0dueMzhjF2eZghchlw_W8eJ874sbAI_2Ph4RhS7l2HNfHU_pjuD8blDYmt3VoNli3W9IS-w1mzRyhngNfTlS9QZOb6Rf2mAgsT_CRG9RKhZ6vfFNdJ3JjsCSMK6077WmlAAP3SvIexGVQ84bcomlrEYxw80yYsq3UCe2LZZxy6TYo6RsYw&uuid=7ccde5fc-b55a-4e86-b2c4-c0fabbd2ff57&authuser=0&nonce=knfvekbf4t25o&user=05865055790528856887&hash=lpoggks3dt1aogbf8li4ishlgceoq82a"
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