import React, { useState } from 'react';
import { CheckCircle, MapPin } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experiences = [
    {
      period: '2022 - Present',
      title: 'Fullstack Developer',
      location: 'View Tech Ltd',
      description: 'Built robust RESTful APIs and integrated third-party APIs to enhance application functionality. Designed and developed user-friendly front-end interfaces, ensuring optimal responsiveness and seamless user experiences. Collaborated with cross-functional teams to deliver high-impact projects using modern web technologies.'
    },
    {
      period: '2020 - 2022',
      title: 'Full Stack Developer',
      location: 'Digital Solutions Ltd.',
      description: 'Developed and maintained full-stack applications using React and Node.js. Implemented RESTful APIs and database solutions for various client projects.'
    },

    
    // Add more experiences as needed
  ];

  return (
    <div className="min-h-screen bg-navy py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-6">Why Hire Me?</h2>
            <p className="text-gray-300 mb-8">
              With a strong foundation in modern web technologies and a passion for
              creating exceptional user experiences, I bring creativity and technical
              expertise to every project. I'm dedicated to writing clean, maintainable
              code and staying current with industry best practices.
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="bg-lightGreen bg-opacity-10 p-6 rounded-lg"
                    >
                      <span className="text-lightGreen font-bold text-sm">
                        {exp.period}
                      </span>
                      <h4 className="text-white font-bold text-lg mt-2">
                        {exp.title}
                      </h4>
                      <div className="flex items-center text-gray-300 mt-2">
                        <MapPin size={16} className="text-lightGreen" />
                        <span className="ml-2">{exp.location}</span>
                      </div>
                      <p className="text-gray-300 mt-4">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;