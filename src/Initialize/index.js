import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { AppNavbar, Footer } from '../components/index';
import Routes from '../routes/index';

function Initialize() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);

  useEffect(async () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user.getIdTokenResult().then((idTokenResult) => idTokenResult.claims.admin).then((idTokenResult) => setIsAdmin(!!idTokenResult));
        setIsUser(true);
      }
    });
  }, []);

  return (
    <>
      <AppNavbar isAdmin={isAdmin} />
      <Routes isAdmin={isAdmin} />
      <Footer isUser={isUser} />
    </>
  );
}

export default Initialize;
