import React from 'react';
import SkillBar from './SkillBar';

const skills = [
  { name: 'Python - Django', percentage: 90 },
  { name: 'PHP - Laravel', percentage: 85 },
  { name: 'JavaScript - React', percentage: 95 },
  { name: 'Node - Express', percentage: 88 },
  { name: 'Database - MySQL, PostgreSQL', percentage: 92 },
  { name: 'Cloud - AWS', percentage: 80 },
];

const Skills = () => (
  <div className="grid grid-cols-1 gap-6">
    {skills.map((skill) => (
      <SkillBar key={skill.name} {...skill} />
    ))}
  </div>
);

export default Skills;