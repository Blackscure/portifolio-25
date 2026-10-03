import { ExternalLink } from 'lucide-react';
import tipsourceImage from '../../../public/images/tipsource.png';
import property254Image from '../../../public/images/property254.png';
import cityPlusImage from '../../../public/images/city-plus.png';
import scmImage from '../../../public/images/scm.png';

const projects = [
  {
    number: '01',
    title: 'Tipsource',
    description:
      'Enables creators to receive gifts directly from followers and viewers without sharing personal details. Seamless MPESA payments with no hefty platform fees, plus pinnable payment links for instant tipping.',
    image: tipsourceImage,
    liveUrl: 'https://tipsource.io/',
  },
  {
    number: '02',
    title: 'Property254',
    description:
      'Connects users with the most trusted and reliable real estate companies and agents, making it easy to find affordable land and houses for sale in Kenya.',
    image: property254Image,
    liveUrl: 'https://property254.co.ke/',
  },
  {
    number: '03',
    title: 'City Plus',
    description:
      'Empowers Kenyans to connect locally to buy, sell and find almost anything across hundreds of categories, including Home & Garden, Cars, Jobs and more.',
    image: cityPlusImage,
    liveUrl: 'https://cityplus.ke/',
  },
  {
    number: '04',
    title: 'Supply Management System',
    description:
      'A comprehensive supply chain management platform for inventory control, regional sales assignment, and logistics coordination, featuring optimized route assignment, real-time journey tracking, timestamped events, and secure role-based access for administrators, salespersons, and drivers.',
    image: scmImage,
    liveUrl: 'https://demo.vaptechapp.com/#/login',
  },
];

const Portfolio = () => {
  return (
    <section className="bg-navy py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl mb-12">
          <span className="text-lightGreen">My</span>{' '}
          <span className="text-white">Projects</span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-lightGreen/60"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-navy/80 px-2.5 py-1 text-xs font-mono text-lightGreen">
                  {project.number}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mb-4 line-clamp-4 text-sm leading-relaxed text-slate-300">
                  {project.description}
                </p>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-sm text-lightGreen hover:underline"
                >
                  View live <ExternalLink size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;