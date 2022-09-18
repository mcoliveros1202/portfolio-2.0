import React from 'react';

function Portfolio() {
    return (
        <section className='my-work'>
            <h2 className='section-title'>My Work</h2>
            <div className='examples'>
                <article className='sample-rb'>
                    <div className='sample-text'>
                        <h3 className='rb-name'>
                            Run Buddy
                        </h3>
                    </div>
                    <a href='https://mcoliveros1202.github.io/Run-Buddy/'><img src={require(`../../assets/images/hero-bg.jpeg`)} alt='' /></a>
                </article>

                <article className='sample-rb'>
                    <div className='sample-text'>
                        <h3 className='rb-name'>
                            PetPortal
                        </h3>
                    </div>
                    <a href='https://mcoliveros1202.github.io/Run-Buddy/'><img src={require(`../../assets/images/pet-portal.png`)} alt='' /></a>
                </article>
            
                <article className='sample-rb'>
                    <div className='sample-text'>
                        <h3 className='rb-name'>
                            Just Tech News
                        </h3>
                    </div>
                    <a href='https://desolate-fortress-39931.herokuapp.com/'><img src={require(`../../assets/images/just-tech-news.jpeg`)} alt='' /></a>
                </article>
            </div>
        </section>
    );
}

export default Portfolio;