import React from 'react';

function Nav() {
    return (
        <header>
            <h1>MADELYN OLIVEROS</h1>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a href='#about'>About Me</a>
                    </li>
                    <li>
                        <a href='#my-work'>My Work</a>
                    </li>
                    <li>
                        <a href='$contact-me'>Contact Me</a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;