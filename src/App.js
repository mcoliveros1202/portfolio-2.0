import React, { useState } from 'react';
import Nav from './components/Nav'
import About from './components/About';
import Portfolio from './components/Portfolio';
import Samples from './components/Samples';

function App() {
  const [projects] = useState([
    {
      name: 'runbudy',
      description: 'tbd'
    },
    {
      name: 'pet portal',
      description: 'tbd'
    },
    {
      name: 'just tech news',
      description: 'tbd'
    }
  ]);
  const [currentProject, setCurrentProject] = useState(projects[0]);
  return (
    <div>
      <Nav
        projects={projects}
        setCurrentProject={setCurrentProject}
        currentProject={currentProject}
      />
      <main>
        <div>
          <About />
          <Portfolio />
        </div>
      </main>
    </div>
  );
}

export default App;