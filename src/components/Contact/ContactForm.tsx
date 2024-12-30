import React from 'react';

const ContactForm = () => (
  <form className="space-y-6">
    <div>
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-3 rounded-lg bg-navy-light text-white placeholder-gray-400 border border-gray-700 focus:border-lightGreen focus:outline-none"
      />
    </div>
    <div>
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-3 rounded-lg bg-navy-light text-white placeholder-gray-400 border border-gray-700 focus:border-lightGreen focus:outline-none"
      />
    </div>
    <div>
      <textarea
        placeholder="Your Message"
        rows={6}
        className="w-full p-3 rounded-lg bg-navy-light text-white placeholder-gray-400 border border-gray-700 focus:border-lightGreen focus:outline-none"
      />
    </div>
    <button
      type="submit"
      className="w-full bg-lightGreen text-navy font-medium py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
    >
      Send Message
    </button>
  </form>
);

export default ContactForm;