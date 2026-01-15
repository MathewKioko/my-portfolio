import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaCode, FaTools, FaTrophy, FaUsers, FaProjectDiagram } from 'react-icons/fa'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Resume = () => {
  const contactInfo = {
    email: 'mathewkioko34@gmail.com',
    phone: '+254101737471',
    location: 'Kenya',
    linkedin: 'https://linkedin.com/in/MathewMusyoka',
    github: 'https://github.com/MathewKioko'
  }

  const education = [
    {
      year: '2023 - 2028',
      degree: 'Bachelor of Computer Science',
      institution: 'MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY',
      description: 'Computer Science | CGPA: N/A'
    },
    {
      year: '2019 - 2022',
      degree: 'Certificate',
      institution: 'Goverment School in Kenya',
      description: 'HighSchool | Aggregate: B+'
    },
    {
      year: '2009 - 2018',
      degree: 'Primary School',
      institution: 'Goverment School In Kenya',
      description: 'UP Board | Aggregate: A-%'
    }
  ]

  const experience = [
    
    {
  year: 'July 2025 - Present',
  position: 'Full-Stack Developer',
  company: 'Unimrkt Response',
  description: [
  'Developing and maintaining full-stack web applications using modern frameworks, with a strong focus on clean architecture, performance, and user experience',
  'Building real-world features such as authentication systems, role-based access control, dashboards, and API integrations inspired by production-grade platforms',
  'Designing and implementing e-commerce and data-driven application workflows, including product management, user flows, and responsive UI components',
  'Integrating AI-assisted features and automation concepts into web applications to enhance functionality and user engagement',
  'Deploying applications using containerization and cloud platforms, managing environments, and ensuring reliable production builds',
  'Tech Stack: JavaScript, React, Next.js, Node.js, FastAPI, PostgreSQL, Docker, GitHub, Vercel'
]
     
    }
  ]

  const skills = [
    {
      category: 'Frontend',
      items: ['Javascript', 'CSS', 'JavaScript', 'React', 'Streamlit']
    },
    {
      category: 'Backend & AI',
      items: [
        'Python', 'Core Java', 'FastAPI', 'Django',
        'MongoDB', 'MySQL', 'LangChain', 'RAG', 'LLMs',
        'MCP Server', 'AI Agents'
      ]
    },
    {
      category: 'DevOps & Deployment',
      items: ['Docker', 'vercel', 'Git', 'Firebase', 'CI/CD Pipelines', 'Cloud Deployment']
    }
  ]
  

  const projects = [
    {
      title: 'TicketHub',
      description: 'A Full-Stack Event Management Platform',
      link: 'https://ticket-hub-nine.vercel.app/'
    },
    {
      title: 'A DIGITAL FARM PARTNER',
      description: 'UKULIMA SMART is an AI-assisted smart agriculture platform',
      link: 'https://ukulimasmart.vercel.app/'
    },
    {
      title: 'Task-App',
      description: 'A production-ready, SaaS-grade task management UI system built with React, TypeScript, and Tailwind CSS.',
      link: 'https://task-app-gamma-eight.vercel.app/'
    },
    {
      title: 'JAMII LOAN',
      description: 'A full-stack loan application system built with Node.js, Express, MongoDB, and React.',
      link: 'https://jamii-loan.vercel.app/'
    }
  ]
  

  const achievements = [
  {
    title: 'Full-Stack Project Development',
    description: 'Designed and built multiple full-stack web applications, focusing on real-world features such as authentication, dashboards, APIs, and deployment'
  },
  {
    title: 'E-commerce System Design',
    description: 'Implemented core e-commerce workflows including product management, user flows, cart functionality, and admin-style interfaces'
  },
  {
    title: 'Modern Frontend Engineering',
    description: 'Developed responsive and accessible user interfaces using React, Next.js, Tailwind CSS, and animation libraries'
  },
  {
    title: 'Backend API Development',
    description: 'Built RESTful APIs, implemented authentication logic, and integrated databases to support scalable web applications'
  },
  {
    title: 'Deployment & DevOps Exposure',
    description: 'Deployed applications to cloud platforms such as Vercel and worked with Docker-based development environments'
  },
  {
    title: 'Continuous Learning & Open Source Exploration',
    description: 'Actively learning backend scalability, AI-assisted features, and open-source contribution workflows through hands-on projects'
  }
]

  

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-[2000px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              MATHEW KIOKO
            </span>
          </h1>
          <div className="flex flex-wrap justify-center gap-4 text-gray-400 mb-4">
            <a href={`mailto:${contactInfo.email}`} className="flex items-center hover:text-white transition-colors">
              <MdEmail className="mr-2" />
              {contactInfo.email}
            </a>
            <span className="flex items-center">
              <MdPhone className="mr-2" />
              {contactInfo.phone}
            </span>
            <span className="flex items-center">
              <MdLocationOn className="mr-2" />
              {contactInfo.location}
            </span>
          </div>
          <div className="flex justify-center gap-4">
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-dark-light/50 backdrop-blur-xl rounded-xl p-6 border border-white/5"
          >
            <div className="flex items-center mb-6">
              <FaGraduationCap className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-semibold text-white">Education</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-primary/20"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary -translate-x-2"></div>
                  <h3 className="text-lg font-medium text-white">{edu.degree}</h3>
                  <p className="text-primary text-sm mb-1">{edu.year}</p>
                  <p className="text-gray-300 mb-1">{edu.institution}</p>
                  <p className="text-gray-400 text-sm">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-dark-light/50 backdrop-blur-xl rounded-xl p-6 border border-white/5"
          >
            <div className="flex items-center mb-6">
              <FaBriefcase className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-semibold text-white">Work Experience</h2>
            </div>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-primary/20"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary -translate-x-2"></div>
                  <h3 className="text-lg font-medium text-white">{exp.position}</h3>
                  <p className="text-primary text-sm mb-1">{exp.year}</p>
                  <p className="text-gray-300 mb-1">{exp.company}</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">●</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-dark-light/50 backdrop-blur-xl rounded-xl p-6 border border-white/5"
        >
          <div className="flex items-center mb-6">
            <FaTools className="w-6 h-6 text-primary mr-3" />
            <h2 className="text-2xl font-semibold text-white">Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-medium text-white">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <motion.span
                      key={itemIndex}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-dark-light/50 backdrop-blur-xl rounded-xl p-6 border border-white/5"
          >
            <div className="flex items-center mb-6">
              <FaProjectDiagram className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-semibold text-white">Projects</h2>
            </div>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-primary/20"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary -translate-x-2"></div>
                  <h3 className="text-lg font-medium text-white">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:text-white transition-colors">
                    View Project →
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-dark-light/50 backdrop-blur-xl rounded-xl p-6 border border-white/5"
          >
            <div className="flex items-center mb-6">
              <FaTrophy className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-semibold text-white">Achievements</h2>
            </div>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-primary/20"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary -translate-x-2"></div>
                  <h3 className="text-lg font-medium text-white">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Resume 