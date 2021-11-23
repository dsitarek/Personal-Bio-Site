import React, { useState, useEffect } from 'react';
import AdminProject from '../components/AdminProject';
import AdminTech from '../components/AdminTech';
import {
  updatePortfolio, getPortfolioData, updatePortfolioCards, deletePortfolioCards,
} from '../data/AdminData';
import { getProjectRepos, getTechData } from '../data/ProfileData';

const initialState = {
  about: { bio: '' },
  contact: {
    email: '',
    phone: '',
  },
  projects: {
    name: '',
    title: '',
    description: '',
    imageURL: '',
  },
  tech: {
    name: '',
    imageURL: '',
  },
};

export default function AdminTools() {
  const [formInput, setFormInput] = useState(initialState);
  const [projectData, setProjectData] = useState([]);
  const [techData, setTechData] = useState([]);

  useEffect(() => {
    getPortfolioData().then(setFormInput);
    getProjectRepos().then(setProjectData);
    getTechData().then(setTechData);
  }, []);

  const handleChange = (e, nestLevel) => {
    setFormInput((prevState) => ({ ...prevState, [nestLevel]: { ...prevState[nestLevel], [e.target.name]: e.target.value } }));
  };

  const handleDelete = (method, fbKey) => {
    deletePortfolioCards(method, fbKey).then((newData) => {
      if (method === 'projects') setProjectData(newData);
      if (method === 'tech') setTechData(newData);
    });
  };

  const handleSubmit = (e, formType, fbKey = '', updateObj = {}) => {
    e.preventDefault();
    switch (formType) {
      case 'about':
        updatePortfolio('about', formInput.about).then(setFormInput);
        break;
      case 'contact':
        updatePortfolio('contact', formInput.contact).then(setFormInput);
        break;
      case 'projects':
        updatePortfolio('projects', formInput.projects).then(setProjectData);
        break;
      case 'tech':
        updatePortfolio('tech', formInput.tech).then(setTechData);
        break;
      case 'updateTech':
        updatePortfolioCards('tech', fbKey, updateObj).then(setTechData);
        break;
      case 'updateProject':
        updatePortfolioCards('projects', fbKey, updateObj).then(setProjectData);
        break;
      default:
        break;
    }
  };

  return (
    <div className="admin-page-container">
      <div className="admin-forms-container">
        <div className="admin-form-container">
          <form onSubmit={(e) => handleSubmit(e, 'about')} className="about-form">
            Update About:
            <textarea id="bio" name="bio" placeholder="Enter Bio" rows="4" cols="50" value={formInput.about?.bio} onChange={(e) => handleChange(e, 'about')} />
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="admin-form-container">
          <form onSubmit={(e) => handleSubmit(e, 'contact')} className="contact-form">
            Update Contact:
            <input type="text" id="email" name="email" placeholder="Enter email" value={formInput.contact?.email} onChange={(e) => handleChange(e, 'contact')} />
            <input type="text" id="phone" name="phone" placeholder="Enter phone" value={formInput.contact?.phone} onChange={(e) => handleChange(e, 'contact')} />
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="admin-form-container">
          <form onSubmit={(e) => handleSubmit(e, 'projects')} className="projects-form">
            Add Project:
            <input type="text" id="name" name="name" placeholder="Enter project GitHub name" value={formInput.projects?.name} onChange={(e) => handleChange(e, 'projects')} />
            <input type="text" id="title" name="title" placeholder="Enter project title" value={formInput.projects?.title} onChange={(e) => handleChange(e, 'projects')} />
            <input type="text" id="description" name="description" placeholder="Enter project description" value={formInput.projects?.description} onChange={(e) => handleChange(e, 'projects')} />
            <input type="text" id="imageURL" name="imageURL" placeholder="Enter project image URL" value={formInput.projects?.imageURL} onChange={(e) => handleChange(e, 'projects')} />
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="admin-form-container">
          <form onSubmit={(e) => handleSubmit(e, 'tech')} className="tech-form">
            Add Tech:
            <input type="text" id="name" name="name" placeholder="Enter tech name" value={formInput.tech?.name} onChange={(e) => handleChange(e, 'tech')} />
            <input type="url" id="imageURL" name="imageURL" placeholder="Enter tech image URL" value={formInput.tech?.imageURL} onChange={(e) => handleChange(e, 'tech')} />
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
      <div className="admin-cards-container">
        Projects:
        <div className="admin-project-container">
          {projectData.map((data) => <AdminProject key={data.firebaseKey} project={data} handleSubmit={handleSubmit} handleDelete={handleDelete} />)}
        </div>
        Tech:
        <div className="admin-tech-container">
          {techData.map((data) => <AdminTech key={data.firebaseKey} tech={data} handleSubmit={handleSubmit} handleDelete={handleDelete} />)}
        </div>
      </div>
    </div>
  );
}
