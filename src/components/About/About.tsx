import React, { useState } from "react";
import {
  Briefcase,
  Code2,
  MapPin,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";
import Skills from "./Skills";

type TabId = "experience" | "skills";

const tabs: { id: TabId; label: string; icon: React.ReactNode }[] = [
  { id: "experience", label: "Experience", icon: <Briefcase size={16} /> },
  { id: "skills", label: "Skills", icon: <Code2 size={16} /> },
];

const experiences = [
  {
    period: "Sep 2024 - Present",
    title: "Software Engineer",
    location: "Vap Technologies",
    type: "Full time",
  },
  {
    period: "Oct 2022 - Jun 2024",
    title: "Full Stack Developer",
    location: "View Tech Limited (SasaPay)",
    type: "Contract",
  },
  {
    period: "Feb 2021 - Oct 2022",
    title: "Software Developer",
    location: "Vap Technologies",
    type: "Full time",
  },
  {
    period: "Aug 2018 - Jan 2021",
    title: "Software Developer",
    location: "Cal Kenya (Viusasa)",
    type: "Contract",
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState<TabId>("experience");
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? experiences : experiences.slice(0, 2);

  return (
    <section className="bg-navy py-16 lg:py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Why <span className="text-lightGreen">Hire Me?</span>
          </h2>
          <p className="text-gray-300 leading-relaxed">
            With a strong foundation in modern web technologies and a passion
            for creating exceptional user experiences, I bring creativity and
            technical expertise to every project.
          </p>
        </div>

        {/* Pill tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/5 border border-white/10 rounded-full p-1.5 gap-1 overflow-x-auto max-w-full">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? "bg-lightGreen text-navy shadow-lg shadow-lightGreen/20"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto">
          {activeTab === "experience" && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {displayed.map((exp, index) => {
                  const isCurrent = exp.period.includes("Present");
                  return (
                    <div
                      key={index}
                      className={`group relative overflow-hidden rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 ${
                        isCurrent
                          ? "bg-lightGreen/10 border-lightGreen/40"
                          : "bg-white/5 border-white/10 hover:border-lightGreen/40"
                      }`}
                    >
                      <div className="relative">
                        <div className="flex items-center gap-2 mb-5">
                          <span
                            className={`text-xs font-medium px-3 py-1 rounded-full ${
                              exp.type === "Full time"
                                ? "bg-lightGreen/15 text-lightGreen"
                                : "bg-white/10 text-gray-300"
                            }`}
                          >
                            {exp.type}
                          </span>
                          {isCurrent && (
                            <span className="flex items-center gap-1.5 text-xs text-lightGreen">
                              <span className="h-2 w-2 rounded-full bg-lightGreen animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                          {exp.title}
                          <ArrowUpRight
                            size={18}
                            className="text-lightGreen opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                          />
                        </h3>

                        <p className="flex items-center gap-2 text-gray-300 mb-2">
                          <MapPin size={14} className="text-lightGreen" />
                          {exp.location}
                        </p>
                        <p className="flex items-center gap-2 text-sm text-gray-400">
                          <CalendarDays size={14} className="text-lightGreen" />
                          {exp.period}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {experiences.length > 2 && (
                <div className="flex justify-center mt-10">
                  <button
                    onClick={() => setShowAll((prev) => !prev)}
                    className="px-6 py-2.5 rounded-full border border-lightGreen text-lightGreen hover:bg-lightGreen hover:text-navy transition-colors duration-300 text-sm font-medium"
                  >
                    {showAll ? "Show Less" : "Show More"}
                  </button>
                </div>
              )}
            </div>
          )}

          {activeTab === "skills" && <Skills />}
        </div>
      </div>
    </section>
  );
};

export default About;