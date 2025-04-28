import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import portfolioData from '../data/portfolio.json';
import { fetchGitHubRepos, convertRepoToProject } from '../services/github';

const Projects = () => {
  // Get Docgen project from portfolio data
  const docgenProject = portfolioData.projects.find(p => p.title.includes('Docgen'));

  const [projects, setProjects] = useState(portfolioData.projects);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadGitHubProjects = async () => {
      try {
        setLoading(true);
        // Fetch GitHub repos
        const repos = await fetchGitHubRepos('varshith-Git');

        if (repos.length > 0) {
          // Convert GitHub repos to projects
          const githubProjects = repos
            .filter(repo => !repo.name.toLowerCase().includes('docgen')) // Filter out any Docgen repos to avoid duplicates
            .map((repo, index) => convertRepoToProject(repo, index));

          // Combine Docgen project with GitHub projects
          const allProjects = docgenProject
            ? [docgenProject, ...githubProjects]
            : githubProjects;

          setProjects(allProjects);
        }
      } catch (err) {
        console.error('Failed to load GitHub projects:', err);
        setError('Failed to load projects from GitHub. Showing fallback projects instead.');
        // Use portfolio data as fallback
        setProjects(portfolioData.projects);
      } finally {
        setLoading(false);
      }
    };

    loadGitHubProjects();
  }, []);

  const filteredProjects = filter === 'all'
    ? projects
    : filter === 'featured'
      ? projects.filter(project => project.featured)
      : projects;

  return (
    <section id="projects" className="projects-section">
      <div className="section-bg-circle top-left"></div>
      <div className="section-bg-dots bottom-right"></div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <h2>My <span>Projects</span></h2>
          <p>Check out some of my recent work</p>
        </motion.div>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
            whileHover={{
              scale: filter === 'all' ? 1 : 1.05,
              y: filter === 'all' ? 0 : -3
            }}
            whileTap={{ scale: 0.95 }}
          >
            All Projects
          </motion.button>
          <motion.button
            className={`filter-btn ${filter === 'featured' ? 'active' : ''}`}
            onClick={() => setFilter('featured')}
            whileHover={{
              scale: filter === 'featured' ? 1 : 1.05,
              y: filter === 'featured' ? 0 : -3
            }}
            whileTap={{ scale: 0.95 }}
          >
            Featured
          </motion.button>
        </motion.div>

        {loading ? (
          <motion.div
            className="loading-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="loading-spinner"></div>
            <p>Loading projects from GitHub...</p>
          </motion.div>
        ) : error ? (
          <motion.div
            className="error-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="error-message">{error}</p>
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              className="projects-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="projects-scrollable">
                <motion.div
                  className="projects-grid"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {filteredProjects.length > 0 ? (
                    filteredProjects.map((project, index) => (
                      <ProjectCard key={project.id || index} project={project} index={index} />
                    ))
                  ) : (
                    <motion.p
                      className="no-projects-message"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      No projects found matching the selected filter.
                    </motion.p>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};

export default Projects;
