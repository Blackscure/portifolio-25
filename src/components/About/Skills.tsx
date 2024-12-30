import React, { useState } from 'react';
import SkillBar from './SkillBar';

const skills = [
  { name: 'Python - Django', percentage: 90 },
  { name: 'Flutter - Dart', percentage: 87 },
  { name: 'PHP - Laravel', percentage: 85 },
  { name: 'JavaScript - React', percentage: 95 },
  { name: 'Node - Express', percentage: 88 },
  { name: 'Database - MySQL, PostgreSQL', percentage: 92 },
  { name: 'Cloud - AWS', percentage: 80 },
];

const Skills = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedSkills = showAll ? skills : skills.slice(0, 3);

  return (
    <div className="grid grid-cols-1 gap-6">
      {displayedSkills.map((skill) => (
        <SkillBar key={skill.name} {...skill} />
      ))}
      <button
        onClick={() => setShowAll(!showAll)}
        className="border border-lightGreen text-lightGreen px-4 py-2 rounded-full font-medium hover:bg-lightGreen hover:text-navy transition-colors duration-300"
      >
        {showAll ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default Skills;
