import Navbar from "../components/NavBar";
import { projects } from "../data/projects";
import "./projects.css"

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#242424]">
      <Navbar />

      <div className="projects-content min-h-screen text-[#ffffff] p-8">
        <h1 className="text-5xl font-bold mb-[20px]">
          Projects
        </h1>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              
              {/* Image */}
              <div className="project-image-wrapper">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="project-image"
                  />
                </a>

                {project.images.length > 1 && (
                  <span className="image-badge">
                    +{project.images.length - 1} more
                  </span>
                )}
              </div>

              {/* Tags */}
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Info */}
              <div className="project-info">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-title"
                >
                  {project.title}
                </a>

                <p className="project-date">{project.date}</p>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* layout offset */}
      <style>{`
        .projects-content {
          padding: 2rem;
        }

        @media (min-width: 1024px) {
          .projects-content {
            margin-left: 350px;
          }
        }
      `}</style>
    </div>
  );
}
