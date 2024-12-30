import React from 'react';
import { MapPin } from 'lucide-react';

interface ExperienceCardProps {
  period: string;
  title: string;
  location: string;
  description: string;
}

const ExperienceCard = ({ period, title, location, description }: ExperienceCardProps) => (
  <div className="bg-lightGreen bg-opacity-10 p-6 rounded-lg">
    <span className="text-lightGreen font-bold text-sm">{period}</span>
    <h4 className="text-white font-bold text-lg mt-2">{title}</h4>
    <div className="flex items-center text-gray-300 mt-2">
      <MapPin size={16} className="text-lightGreen" />
      <span className="ml-2">{location}</span>
    </div>
    <p className="text-gray-300 mt-4">{description}</p>
  </div>
)

export default ExperienceCard;