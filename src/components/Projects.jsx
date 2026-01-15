import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'TicketHub',
    description: 'A Full-Stack Event Management Platform',
    image: '/project/Tickethub.png',
    demoLink: 'https://ticket-hub-nine.vercel.app/',
    githubLink: 'https://github.com/MathewKioko/TicketHub',
    technologies: ['Jest', 'TypeScript', 'REST APIs', 'Mysql', 'Node.js']
  },
  {
    title: 'A DIGITAL FARM PARTNER',
    description: 'UKULIMA SMART is an AI-assisted smart agriculture platform',
    image: '/project/ukulimasmart.png',
    demoLink: 'https://ukulimasmart.vercel.app/',
    githubLink: 'https://github.com/MathewKioko/UKULIMA-SMART',
    technologies: ['React', 'Typescript', 'Tailwind CSS', 'REST APIs', 'supabase']
  },
  {
    title: 'Task-App',
    description: 'A production-ready, SaaS-grade task management UI system built with React, TypeScript, and Tailwind CSS.',
    image: '/project/ToDoList.png',
    demoLink: 'https://task-app-gamma-eight.vercel.app/',
    githubLink: 'https://github.com/MathewKioko/task-app',
    technologies: ['React 19', 'Tailwind', 'Vite',"NPM","Lucide React"]
  },
  /*
  {
    title: 'Portfolio Website',
    description: 'Modern portfolio website with React and Framer Motion',
    image: '/project/vivek_portfolio.png',
    demoLink: 'https://portfolio-wheat-seven-86.vercel.app/',
    githubLink: 'https://github.com/codervivek5/portfolio/',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion']
  },
  */
  {
    title: 'JAMII LOAN',
    description: 'A full-stack loan application system built with Node.js, Express, MongoDB, and React. ',
    image: '/project/loanapp.png',
    demoLink: 'https://jamii-loan.vercel.app/',
    githubLink: 'https://github.com/MathewKioko/JAMII-LOAN',
    technologies: ['LangChain', 'Gemini', 'LLM', "Streamlit","Fast API", "Docker","RAG"]
  },
]

const Projects = () => {
  return (
    <section id="works" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/50 to-dark/80 pointer-events-none" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Featured Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto px-4">
            Explore my recent projects showcasing web development.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-dark-light/20 backdrop-blur-xl border border-white/10"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs rounded-full bg-dark-light text-gray-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 