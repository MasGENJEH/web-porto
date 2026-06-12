import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <div className="mb-6">
          <a href="#home" className="text-2xl font-bold tracking-wide inline-block">
            Porto<span className="text-accent">Folio</span>.
          </a>
        </div>
        <p className="text-white/60 text-sm mb-4">
          Transforming Ideas into Digital Reality
        </p>
        <div className="w-full h-px bg-white/10 my-6"></div>
        <p className="text-white/40 text-xs">
          &copy; {new Date().getFullYear()} Website Portofolio Personal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
