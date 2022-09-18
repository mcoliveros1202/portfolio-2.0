import React from 'react';

function About () {
    return(
        <section className='bio' id='about-me'>
            <div>
            <h3>About Me</h3>
            <p>Hi! I'm Madelyn. I have a master's degree in Library Science at the University of North Texas in August 2021. I believe this will help me on my career path because much of that degree's focus centered around information organization, the psychology behind human interaction with information, and end-user satisfaction. Take a look at some samples of my work and if you would like to work with me, please reach out!</p>
            </div>
            <img className='bio-content' src={require(`../../assets/images/about-me-photo.jpg`)} alt=''></img>
        </section>
    );
}

export default About;