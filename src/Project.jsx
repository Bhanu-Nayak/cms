import { useFetchProjects } from "./fetchProjects";
const Project = () => {
  const { projects, loading } = useFetchProjects();
  if (loading)
    return (
      <section className="Projects">
        <h2>loading...</h2>
      </section>
    );
  return (
    <section className="Projects">
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, title, img, url } = project;
          return (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="project"
            >
              <img src={img} alt={title} className="img" />
              <h5>{title}</h5>{" "}
            </a>
          );
        })}
        ;
      </div>
    </section>
  );
};
export default Project;
