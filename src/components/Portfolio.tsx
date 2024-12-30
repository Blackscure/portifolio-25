import React from 'react';
import { ArrowUpRight, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-navy py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl mb-12">
          <span className="text-lightGreen">My</span>{' '}
          <span className="text-white">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <span className="text-lightGreen text-xl font-bold">01</span>
            <h3 className="text-white text-2xl font-bold mt-4">Project Name</h3>
            <p className="text-gray-300 mt-4">
              A modern web application built with React and TypeScript, featuring
              real-time data visualization and responsive design. Implemented using
              best practices and modern development workflows.
            </p>
            <div className="mt-6 border-t border-gray-700 pt-6">
              <div className="flex items-center space-x-6">
                <ArrowUpRight
                  size={24}
                  className="text-lightGreen cursor-pointer hover:text-white transition-colors duration-300"
                />
                <Github
                  size={24}
                  className="text-lightGreen cursor-pointer hover:text-white transition-colors duration-300"
                />
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
              alt="Project Screenshot"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute bottom-4 right-4 flex space-x-4">
              <button className="p-2 bg-navy rounded-full text-lightGreen hover:bg-lightGreen hover:text-navy transition-colors duration-300">
                <ChevronLeft size={24} />
              </button>
              <button className="p-2 bg-navy rounded-full text-lightGreen hover:bg-lightGreen hover:text-navy transition-colors duration-300">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;