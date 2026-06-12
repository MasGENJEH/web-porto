import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-neutral-light">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-neutral-dark/70 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out using the form below.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/3"
          >
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-light/20 h-full">
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Info</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-dark">Email</h4>
                    <p className="text-neutral-dark/70 text-sm">hello@example.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                    <FiPhone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-dark">Phone</h4>
                    <p className="text-neutral-dark/70 text-sm">+62 812 3456 7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-dark">Location</h4>
                    <p className="text-neutral-dark/70 text-sm">Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-light/20">
                <h4 className="font-semibold text-neutral-dark mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                    <FiLinkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                    <FiGithub size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                    <FiTwitter size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-2/3"
          >
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-light/20">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-dark mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-light/50 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-dark mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-light/50 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-dark mb-2">Subject</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-light/50 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="Project Inquiry" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-dark mb-2">Message</label>
                  <textarea rows="5" className="w-full px-4 py-3 rounded-lg border border-light/50 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none" placeholder="Tell me about your project..."></textarea>
                </div>

                <button type="button" className="px-8 py-4 bg-primary text-white rounded-lg font-semibold w-full hover:bg-secondary transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
