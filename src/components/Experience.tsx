import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience: React.FC = () => {
  const internshipDetails = {
    company: 'Midnight Digital Pvt. Ltd.',
    role: 'Web Development Intern',
    duration: 'May 2024 - June 2024',
    location: 'Remote',
    description: 'Gained hands-on experience in modern web development practices, contributing to real-world projects and enhancing technical skills in a professional environment.'
  };

  const achievements = [
    {
      title: 'Responsive Website Design',
      description: 'Designed and developed multiple responsive websites ensuring optimal user experience across all devices and screen sizes.',
      icon: '🎨'
    },
    {
      title: 'Performance Optimization',
      description: 'Successfully boosted website performance by implementing best practices, optimizing code, and enhancing loading speeds.',
      icon: '⚡'
    },
    {
      title: 'UI Template Development',
      description: 'Created reusable UI-based templates that improved development efficiency and maintained consistent design standards.',
      icon: '🛠️'
    },
    {
      title: 'Team Collaboration',
      description: 'Worked effectively with senior developers and designers, contributing to project planning and code reviews.',
      icon: '🤝'
    }
  ];

  const skills_gained = [
    'Modern Web Development Practices',
    'Responsive Design Implementation',
    'Performance Optimization Techniques',
    'UI/UX Best Practices',
    'Version Control with Git',
    'Professional Communication',
    'Project Management',
    'Code Review Processes'
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/20 relative overflow-hidden">
      {/* Animated Background Glow Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="hidden dark:block absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="hidden dark:block absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real-world experience that shaped my professional development and technical expertise
          </p>
        </motion.div>

        {/* Main Internship Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 mb-12 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {internshipDetails.company}
                  </h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
                    {internshipDetails.role}
                  </p>
                  <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5" />
                      <span>{internshipDetails.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5" />
                      <span>{internshipDetails.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {internshipDetails.description}
              </p>
            </div>

            {/* Duration Highlight */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                15
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-semibold">
                Days of Intensive Experience
              </p>
            </div>
          </div>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Key Achievements & Contributions
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Gained */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Professional Skills Gained
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills_gained.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center"
              >
                <CheckCircle className="w-6 h-6 mx-auto mb-2" />
                <p className="text-sm font-medium">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready for New Opportunities
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
              Looking to bring my experience and passion for web development to a dynamic team
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
            >
              Let's Connect
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;