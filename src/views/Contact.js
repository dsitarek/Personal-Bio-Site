import React, { useState, useEffect } from 'react';
import { ContactCard } from '../components/index';
import { getContactData } from '../data/ProfileData';

export default function Contact() {
  const [contactData, setContactData] = useState({});

  useEffect(() => {
    getContactData().then(setContactData);
  }, []);
  return (
    <ContactCard contactData={contactData} />
  );
}
