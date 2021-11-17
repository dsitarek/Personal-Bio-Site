import React, { useState, useEffect } from 'react';
import { getAboutData } from '../data/ProfileData';
import { Bio } from '../components/index';

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
