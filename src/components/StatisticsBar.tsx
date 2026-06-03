import React from 'react';
import { motion } from 'framer-motion';

const StatisticsBar: React.FC = () => {
  const stats = [
    { value: '2+', label: 'Internships', color: 'from-blue-500 to-blue-600', accentBg: 'bg-blue-500' },
    { value: '5+', label: 'Projects', color: 'from-purple-500 to-purple-600', accentBg: 'bg-purple-500' },
    { value: 'Final Year', label: 'Student', color: 'from-pink-500 to-pink-600', accentBg: 'bg-pink-500' },
    { value: '2026', label: 'Graduate', color: 'from-emerald-500 to-emerald-600', accentBg: 'bg-emerald-500' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-12 w-full pb-8"
      >
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
            >
              {/* Colored Accent Bar */}
              <div className={`h-1.5 ${stat.accentBg} group-hover:h-2 transition-all duration-300`} />
              
              {/* Card Content */}
              <div className="p-5 text-center">
                <motion.p 
                  className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                >
                  {stat.value}
                </motion.p>
                <p className="text-sm md:text-base font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Section Divider */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="relative mt-4"
      >
        {/* Divider Line with Gradient */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 dark:via-blue-500/10 to-transparent blur-sm" />
      </motion.div>
    </>
  );
};

export default StatisticsBar;
