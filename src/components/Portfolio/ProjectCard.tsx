import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

interface ProjectCardProps {
  number: string;
  title: string;
  description: string;
  image: string;
  githubUrl?: string;
  liveUrl: string;
}

const ProjectCard = ({ number, title, description, image, githubUrl, liveUrl }: ProjectCardProps) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[450px] items-center">
    <div className="flex flex-col justify-between h-full">
      <div>
        <span className="text-lightGreen text-xl font-bold">{number}</span>
        <h3 className="text-white text-2xl font-bold mt-4">{title}</h3>
        <p className="text-gray-300 mt-4 line-clamp-4">{description}</p>
      </div>
      <div className="mt-6 border-t border-gray-700 pt-6">
        <div className="flex items-center space-x-6">
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <ArrowUpRight size={24} className="text-lightGreen cursor-pointer hover:text-white transition-colors duration-300" />
          </a>
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github size={24} className="text-lightGreen cursor-pointer hover:text-white transition-colors duration-300" />
            </a>
          )}
        </div>
      </div>
    </div>
    <div className="relative flex items-center justify-center">
      <img
        src={image}
        alt={title}
        className="rounded-lg shadow-xl object-contain w-full max-h-[200px] sm:max-h-[250px] lg:max-h-[300px]"
      />
    </div>
  </div>
);

export default ProjectCard;