import { useFetchProjects } from '../fetchProjects';

const Projects = () => {
  const { projects } = useFetchProjects();
  console.log(projects);
  return <div>Projects</div>;
};

export default Projects;
