import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { getProjectRepos } from '../data/ProfileData';

export default function Projects() {
  const [projectRepos, setProjectRepos] = useState([]);

  useEffect(() => {
    getProjectRepos().then(setProjectRepos);
  }, []);

  return (
    <div className="projects-container">
      {projectRepos.map((repo) => <ProjectCard key={repo.name} repo={repo} />)}
    </div>
  );
}
