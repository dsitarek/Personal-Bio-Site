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
  console.log(techCall);
  return techCall;
};

export { getAboutData, getContactData, getTechData };
