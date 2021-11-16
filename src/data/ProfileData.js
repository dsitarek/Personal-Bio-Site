import axios from 'axios';
import firebaseConfig from '../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;
const gitUrl = 'https://api.github.com';
const gitUser = 'dsitarek';

const getAboutData = async () => {
  const gitCall = await axios.get(`${gitUrl}/users/${gitUser}`).then((response) => response.data);
  const fbCall = await axios.get(`${dbUrl}/about.json`).then((response) => response.data);
  const AboutData = {
    name: gitCall.name,
    location: gitCall.location,
    bio: fbCall.bio,
    imageURL: gitCall.avatar_url,
  };
  console.log(AboutData);
  return AboutData;
};

export default getAboutData;
