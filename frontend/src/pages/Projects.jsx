import Navbar from "../components/NavBar";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#242424]">
      <Navbar />
      <div className="projects-content min-h-screen text-[#ffffff] p-8">
        {/* Page Title */}
        <h1 className="text-5xl font-bold mb-[20px]">
          Projects
        </h1>

        {/* Projects Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          style={{ display: 'grid', gap: '2.5rem' }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card
              overflow-hidden transition-all 
              duration-300 border-2 border-transparent 
              "
            >
              {/* Project Image */}
              <div className="w-full overflow-hidden pb-[25px]">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="max-w-full h-[305px] object-contain
                              transition-transform duration-300 ease-out
                              hover:scale-105"
                  />
                </a>

                {project.images.length > 1 && (
                  <span className="
                    absolute bottom-2 right-2
                    text-[12px] px-2 py-1
                    bg-black/70 border border-[#666]
                  ">
                    +{project.images.length - 1} more
                  </span>
                )}
              </div>
              {/* Tags */}
              <div className="flex flex-wrap gap-[20px] mb-[15px]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[13px] p-[5px] px-2 py-1 border border-[#666]
                              text-[#ccc] bg-[#1a1a1a]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Project Info */}
              <div className="p-4 text-[#ffffff]">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-[#e0e0e0]"
                >
                  {project.title}
                </a>
                <p className="text-[12px] text-[#888] mb-2">
                  {project.date}
                </p>
                <p className="text-[14px] text-[#ccc]">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State if no projects */}
        {projects.length === 0 && (
          <div className="flex flex-col items-center justify-center text-center mt-20">
            <h2 className="text-2xl mb-4">No projects yet</h2>
            <p className="text-sm text-[#888]">Check back soon for updates!</p>
          </div>
        )}
      </div>

      <style>{`
        /* Mobile styles (default) */
        .projects-content {
          margin-left: 0;
          margin-right: 2rem;
          margin-top: 2rem;
          margin-bottom: 2rem;
        }

        /* Desktop styles */
        @media (min-width: 1024px) {
          .projects-content {
            margin-left: 350px;
            margin-right: 2rem;
            margin-top: 2rem;
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </div>
  );
}