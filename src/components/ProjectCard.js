import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getProjectData } from '../data/ProfileData';
import LanguageList from './LanguageList';

export default function ProjectCard({ repo }) {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    getProjectData(repo.name).then(setProjectData);
  }, []);

  return (
    <div className="project-card">
      <a href={projectData.gitHubURL} className="project-link"><span className="project-github-icon">{repo.title}<i className="fab fa-github" /></span></a>
      <img src={repo.imageURL} alt={repo.name} />
      <p>{repo.description}</p>
      <ul className="project-lang-list">
        <li>Last commit on: {projectData.lastCommit}</li>
        <li>Languages: {projectData.languages ? (projectData.languages).map((lang) => <LanguageList key={lang[0]} lang={lang} />) : ''}</li>
      </ul>
    </div>
  );
}

ProjectCard.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    imageURL: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
