import { motion } from 'framer-motion';
import portfolioData from '../data/portfolio.json';

const Experience = () => {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <h2>Experience & Education</h2>
          <p>My professional journey</p>
        </motion.div>

        <div className="experience-container">
          <div className="work-experience">
            <h3>Work Experience</h3>
            <div className="timeline">
              {experience.map((job, index) => (
                <motion.div
                  key={`${job.company}-${index}`}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>{job.position}</h4>
                    <h5>{job.company}</h5>
                    <p className="timeline-date">{job.duration}</p>
                    <p>{job.description}</p>
                    <ul className="achievements">
                      {job.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="education">
            <h3>Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <motion.div
                  key={`${edu.institution}-${index}`}
                  className="timeline-item"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>{edu.degree}</h4>
                    <h5>{edu.institution}</h5>
                    <p className="timeline-date">{edu.duration}</p>
                    <p>{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
