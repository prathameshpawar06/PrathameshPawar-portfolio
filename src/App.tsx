import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, Download, Briefcase, Code, GraduationCap, ChevronRight, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center px-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-primary-600 tracking-tight"
        >
          PP<span className="text-slate-900">.</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-slate-600 hover:text-primary-600 font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/PrathameshPawar-Resume.pdf" 
            target="_blank"
            className="bg-primary-600 text-white px-5 py-2 rounded-full font-medium hover:bg-primary-700 transition-colors flex items-center gap-2"
          >
            <Download size={18} /> Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-600 hover:text-primary-600"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="/PrathameshPawar-Resume.pdf" 
                target="_blank"
                className="bg-primary-600 text-white px-5 py-3 rounded-xl font-medium text-center flex items-center justify-center gap-2"
              >
                <Download size={18} /> Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="about" className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container-custom px-6 relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center md:text-left"
          >
            <div className="inline-block px-4 py-1.5 mb-6 bg-primary-50 text-primary-700 rounded-full font-semibold text-sm">
              Full Stack .NET Developer
            </div>
            <h1 className="heading-xl mb-6 text-slate-900 leading-[1.1]">
              Crafting Scalable <span className="text-primary-600">Enterprise</span> Solutions
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed">
              Hi, I'm <span className="font-bold text-slate-900">Prathamesh Pawar</span>. With 4.5 years of experience, 
              I specialize in building robust web applications using ASP.NET Core, React, and modern cloud technologies. 
              I turn complex business requirements into elegant, efficient code.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#contact" className="bg-primary-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-primary-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary-200">
                Get In Touch
              </a>
              <a href="#projects" className="bg-white text-slate-900 border border-slate-200 px-8 py-3.5 rounded-xl font-bold hover:bg-slate-50 transition-all hover:scale-105 active:scale-95">
                View Projects
              </a>
            </div>
            <div className="mt-10 flex justify-center md:justify-start gap-6 text-slate-400">
              <a href="https://github.com" target="_blank" className="hover:text-primary-600 transition-colors"><FaGithub size={24} /></a>
              <a href="https://www.linkedin.com/in/prathamesh-pawar-216a39193" target="_blank" className="hover:text-primary-600 transition-colors"><FaLinkedin size={24} /></a>
              <a href="mailto:prathameshpawar06@gmail.com" className="hover:text-primary-600 transition-colors"><Mail size={24} /></a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 bg-primary-600 rounded-3xl absolute -top-4 -right-4 -z-10 rotate-12 opacity-10 blur-2xl"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 bg-primary-400 rounded-3xl absolute -bottom-4 -left-4 -z-10 -rotate-12 opacity-10 blur-2xl"></div>
            <div className="relative z-10 glass-card p-8 rounded-[2rem] border-slate-100 overflow-hidden group">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                    <Code size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Expertise</div>
                    <div className="font-bold text-slate-900">.NET & React</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Experience</div>
                    <div className="font-bold text-slate-900">4.5 Years Professional</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Education</div>
                    <div className="font-bold text-slate-900">MCA Graduate</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      company: 'KD Cloud Solution',
      role: 'Software Engineer',
      period: 'Nov 24 - Present',
      desc: 'Full Stack .NET Developer contributing to enterprise applications. Building responsive React interfaces and designing scalable .NET REST APIs. Managing database operations and integrating secure third-party APIs.'
    },
    {
      company: 'Casepoint PVT.LTD',
      role: 'Associate Software Engineer',
      period: 'Jun 24 - Sept 24',
      desc: 'Contributed to product development using Kendo UI, HTML, CSS, and C#. Focused on frontend-backend integration and full-stack tasks in a structured workflow.'
    },
    {
      company: 'Xcellence-It',
      role: '.NET Developer',
      period: 'Dec 21 - Apr 24',
      desc: 'Worked on MVC applications and nopCommerce. Developed custom plugins, managed database operations, API integrations, and application deployment. 2.5 years of solid experience in the e-commerce domain.'
    }
  ];

  return (
    <section id="experience" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 text-slate-900">Professional Journey</h2>
          <div className="w-20 h-1.5 bg-primary-600 mx-auto rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12 relative pl-8 border-l-2 border-slate-200 last:mb-0"
            >
              <div className="absolute w-4 h-4 bg-primary-600 rounded-full -left-[9px] top-0 shadow-lg shadow-primary-200"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                  <div className="text-primary-600 font-semibold">{exp.company}</div>
                </div>
                <div className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-500 shadow-sm">
                  {exp.period}
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed italic">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Square – Real Estate Platform',
      tech: 'ASP.NET Core, CSHTML, JavaScript',
      desc: 'Built a core real estate platform with user onboarding, identity verification (Nafath), and financial integration (SIMAH). Utilized AI-assisted tools for UI refinement.',
      tags: ['Real Estate', 'Security', 'FinTech']
    },
    {
      title: 'Stockbridge Admin Panel',
      tech: 'React, .NET Core Web API, Swagger',
      desc: 'Developed a comprehensive management system for policies, clients, and staff with real-time validations and dynamic reporting.',
      tags: ['Admin Panel', 'CRM', 'Reports']
    },
    {
      title: 'Mobile Service Booking',
      tech: 'EF Core (.NET Core), Web API',
      desc: 'Automobile service booking system with dynamic van assignment, distance-based availability, and a custom reward points system.',
      tags: ['Booking', 'Automation', 'EF Core']
    },
    {
      title: 'RIO Billing System',
      tech: '.NET Core, JWT, EF Code-First',
      desc: 'A multi-branch billing system designed from scratch with JWT-based RBAC for secure access across different user roles.',
      tags: ['Billing', 'Security', 'Architecture']
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 text-slate-900">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-primary-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300 border-slate-100"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform">
                    <Code size={24} />
                  </div>
                  <div className="flex gap-2">
                    <ExternalLink size={20} className="text-slate-400 hover:text-primary-600 cursor-pointer" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{project.title}</h3>
                <div className="text-sm font-medium text-primary-600 mb-4">{project.tech}</div>
                <p className="text-slate-600 mb-6 line-clamp-3">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillGroups = [
    {
      title: 'Backend',
      skills: ['C#', '.NET Core', 'ASP.NET Core MVC', 'Entity Framework', 'LINQ', 'Web API', 'nopCommerce']
    },
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'jQuery', 'AJAX', 'HTML5/CSS3', 'Bootstrap', 'Kendo UI', 'Tailwind CSS']
    },
    {
      title: 'Database & Tools',
      skills: ['MSSQL Server', 'PostgreSQL', 'GitHub', 'TortoiseSVN', 'VS Code', 'Visual Studio', 'Swagger']
    },
    {
      title: 'Methodologies',
      skills: ['Agile (Scrum)', 'Waterfall', 'RESTful API Design', 'Unit Testing', 'JWT Auth', 'RBAC']
    }
  ];

  return (
    <section id="skills" className="section-padding bg-slate-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:border-primary-500/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-6 text-primary-400">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-700/50 text-slate-300 rounded-lg text-sm font-medium hover:bg-primary-500 hover:text-white transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="glass-card rounded-[2.5rem] overflow-hidden p-8 md:p-16 border-slate-100">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1">
              <h2 className="heading-lg mb-6 text-slate-900">Let's Build Something Together</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                Whether you have a specific requirement or just want to say hi, feel free to reach out.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-400 uppercase">Email</div>
                    <div className="text-lg font-bold text-slate-900">prathameshpawar06@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
                    <FaLinkedin size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-400 uppercase">LinkedIn</div>
                    <div className="text-lg font-bold text-slate-900 underline cursor-pointer">
                      <a href="https://www.linkedin.com/in/prathamesh-pawar-216a39193" target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/prathamesh-pawar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-slate-50 p-8 rounded-3xl">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all" />
                  <input type="email" placeholder="Your Email" className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all" />
                </div>
                <input type="text" placeholder="Subject" className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all" />
                <textarea placeholder="Message" rows={5} className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none"></textarea>
                <button className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary-200 flex items-center justify-center gap-2 group">
                  Send Message <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-100 bg-white">
      <div className="container-custom px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-2xl font-bold text-primary-600">PP<span className="text-slate-900">.</span></div>
        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Prathamesh Pawar. All rights reserved.
        </div>
        <div className="flex gap-6 text-slate-400">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub size={20} className="hover:text-primary-600 cursor-pointer" /></a>
          <a href="https://www.linkedin.com/in/prathamesh-pawar-216a39193" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} className="hover:text-primary-600 cursor-pointer" /></a>
          <a href="mailto:prathameshpawar06@gmail.com"><Mail size={20} className="hover:text-primary-600 cursor-pointer" /></a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
