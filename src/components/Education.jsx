import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'

const educationData = [
  {
    school: "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
    degree: "Bachelor Of Science In Computer Science",
    period: "2023 - 2028",
    //score: "CGPA: 7.2",
    location: "Kenya"
  },
  {
    school: "ST.CHARLES LWANGA HIGHSCHOOL",
    degree: "Kenya National Examination Council Certificate",
    period: "2019 - 2022",
    score: "Aggregate: A",
    location: "Kenya"
  },
  {
    school: "MANDONGOI PRIMARY SCHOOL",
    degree: "KNEC certificate.",
    period: "2009 - 2018",
    score: "Aggregate: A-",
    location: "Kenya"
  }
]

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/50 to-dark/80 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4"
          >
            Education
          </motion.h2>
          <p className="text-gray-400">My Academic Journey</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              <div className={`flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-dark border-4 border-primary transform -translate-x-1/2 flex items-center justify-center">
                  <FaGraduationCap className="text-primary" />
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-xl bg-dark-light/20 backdrop-blur-xl border border-white/10 h-full"
                  >
                    <div className="flex flex-col space-y-2">
                      <span className="text-primary font-medium">{edu.period}</span>
                      <h3 className="text-xl font-semibold text-white">{edu.school}</h3>
                      <p className="text-gray-300">{edu.degree}</p>
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-secondary">{edu.score}</span>
                        <span className="text-gray-400 text-sm">{edu.location}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education 