import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Lightbulb, Target } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Academic Excellence',
      description: 'Final Year BCA Student Semester 7 Honors in Mobile Application Development'
    },
    {
      icon: Code,
      title: 'Technical Growth',
      description: 'Continuously learning new programming languages and frameworks'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Mindset',
      description: 'Passionate about creating efficient and creative solutions'
    },
    {
      icon: Target,
      title: 'Career Focus',
      description: 'Aspiring to become a skilled Full-Stack Developer'
    }
  ];

  return (
    <section id="about" className="py-10 bg-gray-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/20 relative overflow-hidden">
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Journey
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Hello! My name is <span className="font-semibold text-blue-600 dark:text-blue-400">Gohel Akshay</span>, 
                  and I am currently pursuing a Bachelor of Computer Applications (BCA) at 
                  <span className="font-semibold"> Gyanmanjari Innovative University (GMIU)</span>. 
                  I am currently in my 3rd year, 5th semester, and have developed a strong passion for 
                  technology and software development.
                </p>
                <p>
                  Throughout my academic journey, I have gained proficiency in various programming languages 
                  including <span className="font-semibold text-purple-600 dark:text-purple-400">C, Advanced C, Java, and JavaScript</span>. 
                  I have also developed skills in web development technologies such as 
                  <span className="font-semibold text-green-600 dark:text-green-400"> HTML, CSS, and Next.js</span>, 
                  which have allowed me to create dynamic and responsive web applications.
                </p>
                <p>
                  My technical toolkit also includes experience with database management through 
                  <span className="font-semibold text-orange-600 dark:text-orange-400"> RDBMS</span>, API testing with 
                  <span className="font-semibold text-red-600 dark:text-red-400"> Postman</span>, and version control using 
                  <span className="font-semibold text-gray-600 dark:text-gray-400"> Git and GitHub</span>. 
                  Recently, I have started learning <span className="font-semibold text-yellow-600 dark:text-yellow-400">Python</span> through 
                  online platforms, further expanding my programming expertise.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {highlight.title}
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Personal Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <blockquote className="text-xl md:text-2xl font-medium italic mb-4">
              "Every line of code is a step toward turning ideas into reality. 
              I'm passionate about learning, growing, and building solutions that make a difference."
            </blockquote>
            <cite className="text-blue-100 font-semibold">- Akshay Gohel</cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;