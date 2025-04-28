import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaLaptopCode, FaServer, FaCloud } from 'react-icons/fa';
import { BsRobot } from 'react-icons/bs';
import portfolioData from '../data/portfolio.json';

const Skills = () => {
  const { skills } = portfolioData;

  // Map category names to icons
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'data & ai':
        return <BsRobot />;
      case 'data engineering':
        return <FaDatabase />;
      case 'frontend':
        return <FaLaptopCode />;
      case 'backend':
        return <FaServer />;
      case 'cloud & devops':
        return <FaCloud />;
      default:
        return <FaCode />;
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="section-bg-circle bottom-right"></div>
      <div className="section-bg-dots top-right"></div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <h2>My <span>Skills</span></h2>
          <p>Here are the technologies and tools I work with</p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.category}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                y: -10,
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)'
              }}
            >
              <div className="skill-card-header">
                <div className="skill-card-icon">
                  {getCategoryIcon(skillCategory.category)}
                </div>
                <h3>{skillCategory.category}</h3>
              </div>
              <div className="skill-card-content">
                {skillCategory.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    className="skill-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + techIndex * 0.05,
                      type: "spring"
                    }}
                    whileHover={{
                      y: -3,
                      backgroundColor: 'var(--primary-color)',
                      color: 'white'
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
