// GitHub API service

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  stargazers_count: number;
  language: string;
  fork: boolean;
}

export const fetchGitHubRepos = async (username: string): Promise<GitHubRepo[]> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();

    // Filter out forked repositories and sort by stars
    return repos
      .filter(repo => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count);
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
};

// Function to determine if a repo should be featured based on stars or specific criteria
export const isFeaturedRepo = (repo: GitHubRepo): boolean => {
  // Consider a repo featured if it has more than 5 stars or has specific topics
  const featuredTopics = ['featured', 'portfolio', 'showcase'];
  return (
    repo.stargazers_count > 5 ||
    repo.topics.some(topic => featuredTopics.includes(topic))
  );
};

// Convert GitHub repo to project format
export const convertRepoToProject = (repo: GitHubRepo, index: number) => {
  return {
    id: repo.id,
    title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    description: repo.description || `A ${repo.language || 'code'} project hosted on GitHub.`,
    technologies: [repo.language, ...(repo.topics || [])].filter(Boolean),
    image: `https://opengraph.githubassets.com/1/${repo.html_url.replace('https://github.com/', '')}`,
    demoUrl: repo.homepage || repo.html_url,
    codeUrl: repo.html_url,
    featured: isFeaturedRepo(repo),
    stargazers_count: repo.stargazers_count
  };
};
