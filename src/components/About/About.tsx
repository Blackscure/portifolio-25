import React, { useState } from 'react';
import ExperienceCard from './ExperienceCard';
import Skills from './Skills';

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [showAllExperiences, setShowAllExperiences] = useState(false);

  const experiences = [
    {
      period: '2022 - Present',
      title: 'Frontend Developer',
      location: 'Tech Company Inc.',
      description: 'Led frontend development for multiple high-impact projects, implementing responsive designs and modern web technologies.'
    },
    {
      period: '2020 - 2022',
      title: 'Full Stack Developer',
      location: 'Digital Solutions Ltd.',
      description: 'Developed and maintained full-stack applications using React and Node.js. Implemented RESTful APIs and database solutions.'
    },
    {
      period: '2018 - 2020',
      title: 'Backend Developer',
      location: 'Software Corp',
      description: 'Built scalable backend services and APIs using Node.js and Python. Managed database optimization and server infrastructure.'
    },
    {
      period: '2016 - 2018',
      title: 'Junior Developer',
      location: 'Tech Startup',
      description: 'Started career working on full-stack web applications. Gained experience with modern web technologies and best practices.'
    }
  ];

  const displayedExperiences = showAllExperiences ? experiences : experiences.slice(0, 2);

  return (
    <div className="min-h-screen bg-navy py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-6">Why Hire Me?</h2>
            <p className="text-gray-300 mb-8">
              With a strong foundation in modern web technologies and a passion for
              creating exceptional user experiences, I bring creativity and technical
              expertise to every project.
            </p>
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => setActiveTab('experience')}
                className={`px-6 py-3 rounded-lg transition-colors duration-300 ${
                  activeTab === 'experience'
                    ? 'bg-lightGreen text-navy'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveTab('skills')}
                className={`px-6 py-3 rounded-lg transition-colors duration-300 ${
                  activeTab === 'skills'
                    ? 'bg-lightGreen text-navy'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`px-6 py-3 rounded-lg transition-colors duration-300 ${
                  activeTab === 'projects'
                    ? 'bg-lightGreen text-navy'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                Projects
              </button>
            </div>
          </div>

          <div className="lg:w-1/2">
            {activeTab === 'experience' && (
              <div>
                <h3 className="text-2xl mb-6">
                  <span className="text-lightGreen">My</span>{' '}
                  <span className="text-white">Experience</span>
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  {displayedExperiences.map((exp, index) => (
                    <ExperienceCard key={index} {...exp} />
                  ))}
                </div>
                {!showAllExperiences && (
                  <button
                    onClick={() => setShowAllExperiences(true)}
                    className="text-lightGreen mt-6 hover:text-white transition-colors duration-300"
                  >
                    Show More
                  </button>
                )}
              </div>
            )}
            {activeTab === 'skills' && <Skills />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;