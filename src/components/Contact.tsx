import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import portfolioData from '../data/portfolio.json';

const Contact = () => {
  const { contact } = portfolioData;
  const { socialLinks } = portfolioData.about;

  return (
    <section id="contact" className="contact-section">
      <div className="section-bg-circle bottom-right"></div>
      <div className="section-bg-dots top-left"></div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <h2>Get In <span>Touch</span></h2>
          <p>Feel free to reach out through any of these channels</p>
        </motion.div>

        <div className="contact-cards-container">
          <motion.a
            href={`mailto:${contact.email}`}
            className="contact-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)' }}
          >
            <div className="contact-card-icon">
              <FaEnvelope />
            </div>
            <h3>Email</h3>
            <p>{contact.email}</p>
          </motion.a>

          <motion.a
            href={`tel:${contact.phone.replace(/\s+/g, '')}`}
            className="contact-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)' }}
          >
            <div className="contact-card-icon">
              <FaPhone />
            </div>
            <h3>Phone</h3>
            <p>{contact.phone}</p>
          </motion.a>

          <motion.a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)' }}
          >
            <div className="contact-card-icon">
              <FaLinkedin />
            </div>
            <h3>LinkedIn</h3>
            <p>Connect with me</p>
          </motion.a>

          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)' }}
          >
            <div className="contact-card-icon">
              <FaMapMarkerAlt />
            </div>
            <h3>Location</h3>
            <p>{contact.location}</p>
          </motion.div>
        </div>

        <motion.div
          className="social-links-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3>Find me on</h3>
          <div className="social-links contact-social-links">
            <motion.a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
