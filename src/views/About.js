import React, { useState, useEffect } from 'react';
import getAboutData from '../data/ProfileData';
import Bio from '../components/Bio';

export default function About() {
  const [aboutData, setAboutData] = useState({});

  useEffect(() => {
    getAboutData().then(setAboutData);
  }, []);
  return (
    <div className="about-container">
      <Bio aboutData={aboutData} />
    </div>
  );
}
