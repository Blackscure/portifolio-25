import React, { useState } from 'react';
import ExperienceCard from './ExperienceCard';
import Skills from './Skills';

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [showAllExperiences, setShowAllExperiences] = useState(false);

  const experiences = [
    {

      period: '2024 Feb - Present',
      title: 'Software Engineer',
      location: 'Jenga Works (Founder)',
      type: 'Full time',
     
    },


    {
      period: 'Oct 2022 - jul 2023',
      title: 'Fullstack Developer',
      location: 'View Tech Ltd (SasaPay)',
      type: 'Contract',
     
    },
   
    {
      period: 'Jan 2021 - Oct 2022',
      title: 'Full stack  Developer',
      location: 'Vap Technologies',
      type: 'Full time',
    },

    {
      period: 'Aug 2021 - Jan 2022',
      title: 'Software  Developer',
      location: 'Cal Kenya (Viu Sasa).',
      type: 'Internship',
    },
   
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
