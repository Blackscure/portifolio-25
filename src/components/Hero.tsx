import React, { useState } from "react";
import { Github, Linkedin, Download } from "lucide-react";
import TypewriterText from "./TypewriterText";

const Hero = () => {
  const [countdown, setCountdown] = useState(null);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "src/assets/Petro_buyahi.pdf"; 
    link.download = "resume.pdf";
    link.click();

    // Start countdown
    setCountdown(100);
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 0) {
          clearInterval(interval);
          return null;
        }
        return prev - 1;
      });
    }, 30); 
  };

  return (
    <div className="min-h-screen pt-20 bg-navy">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 text-white">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">Petro Buyahi</h1>
          <div className="text-2xl lg:text-3xl mb-6">
            I'm a <TypewriterText text="Software Engineer" />
          </div>
          <p className="text-gray-300 mb-8 max-w-lg">
            I am a Software Engineer passionate about turning ideas into
            reality through innovative mobile and web applications. Leveraging
            expertise in modern development tools, frameworks, and AI
            technologies, I craft intelligent, user-friendly, and scalable
            solutions. From automation to predictive systems, I integrate AI to
            enhance functionality and create impactful experiences. Let’s
            collaborate to build something extraordinary and perfectly tailored
            to your needs.
          </p>
          <div className="flex items-center space-x-6">
            <button
              onClick={handleDownload}
              className="bg-lightGreen text-navy px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors duration-300"
            >
              <Download className="inline-block mr-2" size={20} />
              {countdown !== null
                ? `Downloading... ${countdown}%`
                : "Download Resume"}
            </button>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Blackscure"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-lightGreen rounded-full text-lightGreen hover:bg-lightGreen hover:text-navy transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/wekesa-buyahi-9819271a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-lightGreen rounded-full text-lightGreen hover:bg-lightGreen hover:text-navy transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <div className="relative">
            <div className="absolute inset-0 bg-lightGreen opacity-20 rounded-full filter blur-xl"></div>
            <img
              src="/images/DSC_0006ee Copy.JPG"
              alt="Portrait"
              className="relative z-10 w-[400px] h-[400px] object-cover rounded-full mx-auto border-4 border-lightGreen"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
