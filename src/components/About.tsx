import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';
import portfolioData from '../data/portfolio.json';

const About = () => {
  const { name, title, description, image, resumeUrl, socialLinks } = portfolioData.about;

  return (
    <section id="about" className="about-section">
      <div className="section-bg-circle top-left"></div>
      <div className="section-bg-dots bottom-left"></div>

      <div className="section-container about-container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>About Me</h2>
          <h1>Hi, I'm <span>{name.split(' ')[0]}</span></h1>
          <h3>{title}</h3>
          <p>{description}</p>

          <div className="social-links">
            <motion.a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FaTwitter />
            </motion.a>
          </div>

          <motion.a
            href={resumeUrl}
            className="btn btn-primary resume-btn"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 30px',
              fontSize: '1rem'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <motion.div
            className="profile-card"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <div className="profile-card-bg"></div>
            <div className="profile-card-content">
              <div className="profile-image-wrapper">
                <motion.div
                  className="profile-image-container"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={image}
                    alt={name}
                    className="profile-image"
                    onError={(e) => {
                      console.error('Image failed to load:', image);
                      e.currentTarget.src = 'https://via.placeholder.com/350?text=Varshith+Gudur';
                    }}
                  />
                </motion.div>
                <motion.div
                  className="profile-shape shape-1"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, repeatType: "reverse" }
                  }}
                ></motion.div>
                <motion.div
                  className="profile-shape shape-2"
                  animate={{
                    rotate: [0, -360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, repeatType: "reverse" }
                  }}
                ></motion.div>
                <motion.div
                  className="profile-shape shape-3"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.15, 1]
                  }}
                  transition={{
                    rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                    scale: { duration: 5, repeat: Infinity, repeatType: "reverse" }
                  }}
                ></motion.div>
                <div className="profile-glow"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>


    </section>
  );
};

export default About;
