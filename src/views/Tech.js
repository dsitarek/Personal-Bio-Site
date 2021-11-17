import React, { useState, useEffect } from 'react';
import { getTechData } from '../data/ProfileData';
import TechCard from '../components/index';

export default function Tech() {
  const [techData, setTechData] = useState([]);

  useEffect(() => {
    getTechData().then(setTechData);
  }, []);

  return (
    <div className="tech-container">
      {techData.map((tech) => <TechCard key={tech.id} />)}
    </div>
  );
}
