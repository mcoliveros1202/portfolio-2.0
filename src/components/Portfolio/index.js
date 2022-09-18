import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Portfolio(props) {
    const {
        projects = [],
        setCurrentProject,
        currentProject
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentProject.name);
    }, [currentProject]);

    return (
        <header className='my-work'>
            <h2 className='section-title'>
                My Work
            </h2>
            <div>
                <ul className='examples'>
                    {projects.map((project) => (
                        <li
                            className={`sample-rb ${currentProject.name === projects.name && 'portfolioActive'
                                }`}
                            key={projects.name}
                        >
                            <span
                                onClick={() => {
                                    setCurrentProject(project)
                                }}
                            >
                                {capitalizeFirstLetter(project.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

export default Portfolio;