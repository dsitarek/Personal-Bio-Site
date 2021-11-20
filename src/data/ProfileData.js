import axios from 'axios';
import firebaseConfig from '../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;
const gitUrl = 'https://api.github.com';
const gitUser = 'dsitarek';

const getAboutData = async () => {
  const gitCall = await axios.get(`${gitUrl}/users/${gitUser}`).then((response) => response.data);
  const fbCall = await axios.get(`${dbUrl}/about.json`).then((response) => response.data);
  const aboutData = {
    name: gitCall.name,
    location: gitCall.location,
    bio: fbCall.bio,
    imageURL: gitCall.avatar_url,
  };
  return aboutData;
};
const getContactData = async () => {
  const fbCall = await axios.get(`${dbUrl}/contact.json`).then((response) => response.data);
  const contactData = {
    email: fbCall.email,
    phone: fbCall.phone,
    github: fbCall.github,
    linkedIn: fbCall.linkedIn,
  };
  return contactData;
};

const getTechData = async () => {
  const techCall = await axios.get(`${dbUrl}/tech.json`).then((response) => Object.values(response.data));
  return techCall;
};

const getProjectRepos = async () => {
  const fbCall = await axios.get(`${dbUrl}/projects.json`).then((response) => Object.values(response.data));
  return fbCall;
};

const getProjectData = async (repoName) => {
  const gitRepoCall = await axios.get(`${gitUrl}/repos/${gitUser}/${repoName}`).then((response) => response.data);
  const repoLangCall = await axios.get(`${gitUrl}/repos/${gitUser}/${repoName}/languages`).then((response) => response.data);
  const lastCommit = await axios.get(`${gitUrl}/repos/${gitUser}/${repoName}/commits`).then((response) => new Date(response.data[0].commit.author.date).toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' }));
  let repoLines = 0;
  (Object.values(repoLangCall)).forEach((langLines) => { repoLines += langLines; });
  const repoLangArr = Object.entries(repoLangCall);
  repoLangArr.forEach((lang) => lang.push(Math.round((lang[1] / repoLines) * 1000) / 10));
  // repoLangArr is an array formatted as such: [language(str), total lines of language(num), percentage of language out of total lines(num)]
  const repoDataObj = {
    gitHubURL: gitRepoCall.html_url,
    lastCommit,
    languages: repoLangArr,
  };
  return repoDataObj;
};

export {
  getAboutData, getContactData, getTechData, getProjectRepos, getProjectData,
};
