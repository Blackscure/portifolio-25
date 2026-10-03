import { Mail, Phone, MapPin, Github, Linkedin,  ArrowUp } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const contactDetails = [
  { icon: Mail, label: 'wekesabuyahi@gmail.com', href: 'wekesabuyahi@gmail.com' },
  { icon: Phone, label: '+254 723468573', href: 'tel:+254723468573' },
  { icon: MapPin, label: 'Nairobi, Kenya' },
];

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/Blackscure' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/petro-buyahi-9819271a3/' },
];

const Contact = () => (
  <footer id="contact" className="bg-navy border-t border-white/10">
    <div className="container mx-auto px-6 pt-16 pb-8">
      {/* Top call-to-action */}
      <div className="mb-12 flex flex-col gap-6 border-b border-white/10 pb-12 md:flex-row md:items-center md:justify-between">
        <h2 className="text-3xl font-semibold">
          <span className="text-white">Let’s work</span>{' '}
          <span className="text-lightGreen">together</span>
        </h2>
        <a
          href="mailto:hello@yourdomain.com"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-lightGreen px-6 py-3 text-lightGreen transition-colors duration-300 hover:bg-lightGreen hover:text-navy"
        >
          <Mail size={18} /> Say hello
        </a>
      </div>

      {/* Columns */}
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-2">
          <h3 className="mb-3 text-xl font-semibold text-white">
            Petro<span className="text-lightGreen">Buyahi</span>
          </h3>
          <p className="max-w-sm text-sm leading-relaxed text-slate-300">
            Developer building useful products for the web. Open to freelance
            work, collaborations and new opportunities.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-lightGreen">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-slate-300 transition-colors hover:text-lightGreen"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-lightGreen">
            Contact
          </h4>
          <ul className="space-y-3">
            {contactDetails.map(({ icon: Icon, label, href }) => (
              <li key={label} className="flex items-center gap-3 text-sm text-slate-300">
                <Icon size={16} className="shrink-0 text-lightGreen" />
                {href ? (
                  <a href={href} className="transition-colors hover:text-lightGreen">
                    {label}
                  </a>
                ) : (
                  <span>{label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-full p-2 text-lightGreen transition-colors duration-300 hover:bg-lightGreen hover:text-navy"
            >
              <Icon size={18} />
            </a>
          ))}
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-2 rounded-full border border-white/20 p-2 text-slate-300 transition-colors hover:border-lightGreen hover:text-lightGreen"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Contact;