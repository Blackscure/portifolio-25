import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import tipsourceImage from '../../../public/images/tipsource.png';
import property254Image from '../../../public/images/property254.png';
import cityPlusImage from '../../../public/images/city-plus.png';
import tipserveImage from '../../../public/images/tipserve.png';


const projects = [
  {
    number: '01',
    title: 'Tipsource',
    description: 'Enables creators to receive gifts directly from followers and viewers without sharing personal details. Facilitates seamless MPESA payments and other methods with no hefty platform fees. Users can pin their unique payment links on posts or bios to get tipped instantly, providing a safer and easier way to be rewarded.',
    image: tipsourceImage,
    liveUrl: 'https://tipsource.io/'
  },
  {
    number: '02',
    title: 'Property254',
    description: 'Property254 connects users with the most trusted and reliable real estate companies and agents, making it easy to find affordable land and houses for sale in Kenya.',
    image: property254Image,
    liveUrl: 'https://property254.co.ke/'
  },
  {
    number: '03',
    title: 'City Plus',
    description: 'Cityplus.ke’s purpose is to empower people and create economic opportunity for Kenyans in their local community. We help them connect to buy, sell and find almost anything across hundreds of categories, including Home & Garden, Cars, Jobs and more. .',
    image: cityPlusImage,
    liveUrl: 'https://cityplus.ke/'
  },
  {
    number: '05',
    title: 'TipSource',
    description: 'Enables creators to receive gifts directly from followers and viewers without sharing personal details. Facilitates seamless MPESA payments and other methods with no hefty platform fees. Users can pin their unique payment links on posts or bios to get tipped instantly, providing a safer and easier way to be rewarded.',
    image: tipserveImage,
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