import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    number: '01',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    number: '02',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    number: '03',
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    number: '04',
    title: 'Weather Application',
    description: 'Real-time weather tracking with interactive maps',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    number: '05',
    title: 'Portfolio Generator',
    description: 'Dynamic portfolio website generator for developers',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  }
];

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen bg-navy py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl mb-12">
          <span className="text-lightGreen">My</span>{' '}
          <span className="text-white">Projects</span>
        </h2>
        
        <ProjectCard {...projects[currentProject]} />
        
        <div className="flex justify-end mt-8 space-x-4">
          <button
            onClick={prevProject}
            className="p-2 bg-navy rounded-full text-lightGreen hover:bg-lightGreen hover:text-navy transition-colors duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextProject}
            className="p-2 bg-navy rounded-full text-lightGreen hover:bg-lightGreen hover:text-navy transition-colors duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;