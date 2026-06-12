import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiTailwindcss, SiJavascript, SiPhp, SiLaravel, SiFigma, SiGit, SiGo, SiMysql, SiPostgresql, SiCodeigniter } from 'react-icons/si';
import { FaServer, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  const skills = [
    { name: 'Frontend', icon: <FaLaptopCode className="text-blue-500" /> },
    { name: 'Backend', icon: <FaServer className="text-gray-500" /> },
    { name: 'React.js', icon: <SiReact className="text-[#61DAFB]" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: 'JavaScript (ES6+)', icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: 'Go', icon: <SiGo className="text-[#00ADD8]" /> },
    { name: 'PHP', icon: <SiPhp className="text-[#777BB4]" /> },
    { name: 'Laravel', icon: <SiLaravel className="text-[#FF2D20]" /> },
    { name: 'CodeIgniter', icon: <SiCodeigniter className="text-[#EE4623]" /> },
    { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1]" /> },
    { name: 'Git', icon: <SiGit className="text-[#F05032]" /> },
    { name: 'Figma', icon: <SiFigma className="text-[#F24E1E]" /> }
  ];

  const experiences = [
    {
      year: '2023',
      title: 'Golang Backend Bootcamp',
      company: 'Engima Camp',
    },
    {
      year: '2025',
      title: 'Frontend Javascript Beginner Bootcamp',
      company: 'Coding Camp By DBS',
    }
  ];

  const educations = [
    {
      year: '2022 - 2026',
      degree: 'S1 Sistem Informasi',
      institution: 'Universitas Mercu Buana',
    }
  ];

  return (
    <section id="about" className="py-24 bg-neutral-light">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Photo/Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-2/5 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-accent rounded-2xl transform rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-primary rounded-2xl transform -rotate-3 shadow-xl overflow-hidden flex items-center justify-center">
                <span className="text-white/50 text-xl">Photo Placeholder</span>
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-3/5"
          >
            <h3 className="text-2xl font-semibold text-neutral-dark mb-4">
              I craft digital experiences with purpose.
            </h3>
            <p className="text-neutral-dark/80 mb-8 leading-relaxed">
              With a passion for clean code and intuitive design, I build web applications that not only look stunning but also perform exceptionally well. I bridge the gap between design and engineering.
            </p>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-primary mb-4">My Skills</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span key={index} className="flex items-center gap-2 px-4 py-2 bg-white text-secondary rounded-full shadow-sm text-sm font-medium border border-light/20">
                    <span className="text-lg">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-primary mb-4">Experience</h4>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center p-4 bg-white rounded-xl shadow-sm border border-light/10">
                    <span className="text-accent font-semibold w-32 shrink-0">{exp.year}</span>
                    <div>
                      <h5 className="font-bold text-neutral-dark">{exp.title}</h5>
                      <span className="text-sm text-neutral-dark/60">{exp.company}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-primary mb-4">Education</h4>
              <div className="space-y-4">
                {educations.map((edu, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center p-4 bg-white rounded-xl shadow-sm border border-light/10">
                    <span className="text-accent font-semibold w-32 shrink-0">{edu.year}</span>
                    <div>
                      <h5 className="font-bold text-neutral-dark">{edu.degree}</h5>
                      <span className="text-sm text-neutral-dark/60">{edu.institution}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
