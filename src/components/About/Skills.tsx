import React, { useState } from 'react';
import SkillBar from './SkillBar';

const skills = {
  frameworks: [
    { name: 'Python - Django', percentage: 90 },
    { name: 'Flutter - Dart', percentage: 87 },
    { name: 'PHP - Laravel', percentage: 85 },
    { name: 'JavaScript - React', percentage: 95 },
    { name: 'Node - Express', percentage: 97 },
    { name: 'Java - Spring', percentage: 88 },
  ],

  databases: [
    { name: 'MySQL', percentage: 92 },
    { name: 'PostgreSQL', percentage: 92 },
    { name: 'Redis', percentage: 85 },
  ],

  devops: [
    { name: 'Docker', percentage: 90 },
    { name: 'Kubernetes', percentage: 78 },
    { name: 'Jenkins', percentage: 82 },
    { name: 'Cloud - AWS', percentage: 89 },
  ],

  monitoring: [
    { name: 'Prometheus', percentage: 75 },
    { name: 'Sentry', percentage: 80 },
    { name: 'Locust', percentage: 82 },
  ],
};

const Skills = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="grid grid-cols-1 gap-6">
      {/* Show only frameworks by default */}
      <div>
        <h3 className="text-lg font-semibold capitalize mb-2 text-lightGreen">Frameworks</h3>
        <div className="space-y-2">
          {skills.frameworks.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
      </div>

      {/* Conditionally show other categories */}
      {showAll && (
        <>
          <div>
            <h3 className="text-lg font-semibold capitalize mb-2 text-lightGreen">Databases</h3>
            <div className="space-y-2">
              {skills.databases.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold capitalize mb-2 text-lightGreen">DevOps</h3>
            <div className="space-y-2">
              {skills.devops.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold capitalize mb-2 text-lightGreen">Monitoring</h3>
            <div className="space-y-2">
              {skills.monitoring.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setShowAll(!showAll)}
        className="border border-lightGreen text-lightGreen px-4 py-2 rounded-full font-medium hover:bg-lightGreen hover:text-navy transition-colors duration-300 mt-4"
      >
        {showAll ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default Skills;
