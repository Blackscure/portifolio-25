import React from 'react';
import { Phone, Mail } from 'lucide-react';

const ContactInfo = () => (
  <div>
    <h1 className="text-4xl font-bold text-white mb-4">Let's Work Together</h1>
    <p className="text-gray-300 mb-8">
      Ready to bring your ideas to life? Let's collaborate and create something amazing together. Get in touch with me today.
    </p>
    <div className="space-y-4">
      <div className="flex items-center text-gray-300">
        <Phone className="text-lightGreen mr-3" size={20} />
        <span>+254723468573</span>
      </div>
      <div className="flex items-center text-gray-300">
        <Mail className="text-lightGreen mr-3" size={20} />
        <span>Wekesabuyahi@gmail.com</span>
      </div>
    </div>
  </div>
);

export default ContactInfo;