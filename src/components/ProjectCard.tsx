import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    demoUrl: string;
    codeUrl: string;
    featured: boolean;
    stargazers_count?: number;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      className={`project-card ${project.featured ? 'featured' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 50,
        damping: 10
      }}
      whileHover={{
        y: -15,
        transition: { type: "spring", stiffness: 300 }
      }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-content">
        <motion.div
          className="project-header"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
        >
          <h3>{project.title}</h3>
          {project.stargazers_count !== undefined && (
            <div className="project-stars">
              <FaStar /> <span>{project.stargazers_count}</span>
            </div>
          )}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
        >
          {project.description}
        </motion.p>
        <motion.div
          className="tech-stack"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
        >
          {project.technologies.map((tech, techIndex) => (
            <motion.span
              key={tech}
              className="tech-tag"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
                delay: index * 0.1 + 0.5 + techIndex * 0.05
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
        </motion.div>
        <motion.div
          className="project-links"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.6 }}
        >
          <motion.a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaExternalLinkAlt /> Live Demo
          </motion.a>
          <motion.a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-accent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub /> View Code
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
