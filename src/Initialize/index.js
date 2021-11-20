import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import AppNavbar from '../components/AppNavbar';
import Routes from '../routes/index';

function Initialize() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(async () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user.getIdTokenResult().then((idTokenResult) => idTokenResult.claims.admin).then((idTokenResult) => setIsAdmin(!!idTokenResult));
      }
    });
  }, []);

  return (
    <>
      <AppNavbar isAdmin={isAdmin} />
      <Routes isAdmin={isAdmin} />
    </>
  );
}

export default Initialize;
