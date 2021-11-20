import axios from 'axios';
import firebaseConfig from '../api/apiKeys';
import { getProjectRepos, getTechData } from './ProfileData';

const dbUrl = firebaseConfig.databaseURL;

const getPortfolioData = async () => {
  const data = await axios.get(`${dbUrl}/.json`).then((response) => (response.data));
  const dataObj = {
    ...data,
    projects: {
      name: '',
      title: '',
    },
    tech: {
      name: '',
      imageURL: '',
    },
  };
  return dataObj;
};

const updatePortfolio = async (fbNode, dataObj) => {
  let newData = null;
  if (fbNode === 'about') {
    await axios.patch(`${dbUrl}/${fbNode}.json`, dataObj);
    newData = await getPortfolioData();
  }
  if (fbNode === 'contact') {
    await axios.patch(`${dbUrl}/${fbNode}.json`, dataObj);
    newData = await getPortfolioData();
  }
  if (fbNode === 'projects') {
    await axios.post(`${dbUrl}/${fbNode}.json`, dataObj).then((obj) => {
      const firebaseKey = { firebaseKey: obj.data.name };
      axios.patch(`${dbUrl}/${fbNode}/${obj.data.name}.json`, firebaseKey);
    });
    newData = await getProjectRepos();
  }
  if (fbNode === 'tech') {
    await axios.post(`${dbUrl}/${fbNode}.json`, dataObj)
      .then((obj) => {
        const firebaseKey = { firebaseKey: obj.data.name };
        axios.patch(`${dbUrl}/${fbNode}/${obj.data.name}.json`, firebaseKey);
      });
    newData = await getTechData();
  }
  return newData;
};

const updatePortfolioCards = async (method, fbKey, updateObj) => {
  let newData = null;
  if (method === 'tech') {
    await axios.patch(`${dbUrl}/tech/${fbKey}.json`, updateObj);
    newData = await getTechData();
  }
  if (method === 'projects') {
    await axios.patch(`${dbUrl}/projects/${fbKey}.json`, updateObj);
    newData = await getProjectRepos();
  } return newData;
};

const deletePortfolioCards = async (method, fbKey) => {
  let newData = null;
  if (method === 'tech') {
    await axios.delete(`${dbUrl}/tech/${fbKey}.json`);
    newData = await getTechData();
  }
  if (method === 'projects') {
    await axios.delete(`${dbUrl}/projects/${fbKey}.json`);
    newData = await getProjectRepos();
  } return newData;
};

export {
  updatePortfolio, getPortfolioData, updatePortfolioCards, deletePortfolioCards,
};
