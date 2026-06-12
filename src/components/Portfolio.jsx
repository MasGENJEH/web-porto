import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Academic Sistem Information',
      category: 'Web Application',
      description: 'Information System Academic for manage student and lecturer academic data.',
      tech: ['React', 'Tailwind CSS', 'Laravel'],
      image: 'Main UI',
      images: ['Login UI', 'Dashboard UI', 'Student List UI', 'Grade Input UI']
    },
    {
      id: 2,
      title: 'Finance Dashboard',
      category: 'Dashboard UI',
      description: 'Interactive financial dashboard for data visualization.',
      tech: ['React', 'Framer Motion', 'Chart.js'],
      image: 'Dashboard Main',
      images: ['Main Dashboard UI', 'Analytics Chart UI', 'Transaction History UI']
    },
    {
      id: 3,
      title: 'Travel Agency Landing',
      category: 'Landing Page',
      description: 'High-converting landing page for a premium travel agency.',
      tech: ['Next.js', 'Tailwind CSS'],
      image: 'Hero Section',
      images: ['Hero Section UI', 'Destinations UI', 'Booking Form UI', 'Testimonials UI']
    },
    {
      id: 4,
      title: 'E-Commerce Mobile App',
      category: 'Mobile App',
      description: 'Cross-platform mobile application for online shopping.',
      tech: ['React Native', 'Firebase', 'Redux'],
      image: 'App Home',
      images: ['Home Screen UI', 'Product Detail UI', 'Cart UI', 'Checkout UI']
    },
    {
      id: 5,
      title: 'Healthcare Portal',
      category: 'Web Application',
      description: 'Patient management and tele-medicine portal.',
      tech: ['Vue.js', 'Node.js', 'PostgreSQL'],
      image: 'Patient Portal',
      images: ['Patient Dashboard UI', 'Doctor Appointment UI', 'Medical Records UI']
    },
    {
      id: 6,
      title: 'Real Estate Platform',
      category: 'Web Application',
      description: 'Property listing and management system.',
      tech: ['React', 'Next.js', 'Prisma'],
      image: 'Property List',
      images: ['Property Map UI', 'Listing Detail UI', 'Agent Dashboard UI']
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">My Portfolio</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-neutral-dark/70 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was crafted with attention to detail and user experience in mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-light rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-light/20 group"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-secondary/10 flex items-center justify-center relative overflow-hidden">
                <span className="text-primary/40 font-medium z-10">{project.image}</span>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="px-6 py-2 bg-white text-primary rounded-full font-semibold transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider block mb-2">{project.category}</span>
                <h3 className="text-xl font-bold text-neutral-dark mb-2">{project.title}</h3>
                <p className="text-sm text-neutral-dark/70 mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-white text-secondary rounded shadow-sm border border-light/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-neutral-dark/60 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto z-10"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-neutral-light rounded-full flex items-center justify-center text-neutral-dark hover:bg-light transition-colors z-20"
              >
                <FiX size={20} />
              </button>

              {/* Project Image Gallery */}
              <div className="p-8 pb-0">
                <div className="flex gap-4 overflow-x-auto pb-4 snap-x styled-scrollbar">
                  {selectedProject.images.map((img, idx) => (
                    <div key={idx} className="min-w-[280px] sm:min-w-[400px] h-48 sm:h-72 bg-secondary/10 flex items-center justify-center rounded-xl border border-light/30 shadow-inner shrink-0 snap-center">
                      <span className="text-primary/40 text-xl sm:text-2xl font-bold text-center px-4">{img}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-8">
                <span className="text-sm font-bold text-accent uppercase tracking-wider block mb-2">{selectedProject.category}</span>
                <h3 className="text-3xl font-bold text-primary mb-4">{selectedProject.title}</h3>
                
                <p className="text-neutral-dark/80 mb-6 leading-relaxed text-lg">
                  {selectedProject.description}
                  <br/><br/>
                  This project demonstrates a comprehensive understanding of modern web development practices. It features a responsive design, optimal performance, and a seamless user experience tailored to the specific needs of the target audience.
                </p>
                
                <h4 className="text-xl font-semibold text-primary mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className="px-4 py-2 bg-neutral-light text-secondary rounded-lg font-medium shadow-sm border border-light/20">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition-colors shadow-md">
                    Live Demo
                  </button>
                  <button className="px-8 py-3 bg-white text-primary border border-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors">
                    Source Code
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
