import React from 'react';;

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navcontainer'>
                <a href="/#intro" className='heading'>
                    <h2>
                        <span className='angleOpen'>&lt;</span>
                        <span>R.S </span>
                        <span className='angleClose'>/&gt;</span>
                    </h2>
                </a>
                <div className='navlinkarea'>
                    <ul className='navLinks'>
                        <li><a href="#intro"><span>Intro</span><span className='closeLink'>/&gt;</span></a></li>
                        <li><a href="#skills"><span>Skills</span><span className='closeLink'>/&gt;</span></a></li>
                        <li><a href="#projects"><span>Projects</span><span className='closeLink'>/&gt;</span></a></li>
                        <li><a href="#about"><span>About</span><span className='closeLink'>/&gt;</span></a></li>
                        <li><a href="#contact"><span>Contact</span><span className='closeLink'>/&gt;</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar