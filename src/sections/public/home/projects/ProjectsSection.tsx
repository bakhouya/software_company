
import { ArrowUpRight} from "lucide-react";
import HeaderSection from "@/components/ui/HeaderSection";

import T_1 from "@/assets/images/templates/t-1.png"
import T_2 from "@/assets/images/templates/t-2.png"
import T_3 from "@/assets/images/templates/t-3.png"
import T_4 from "@/assets/images/templates/t-4.png"
import T_5 from "@/assets/images/templates/t-5.png"
import T_6 from "@/assets/images/templates/t-6.png"

interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Mavora",
    category: "E-commerce",
    year: "2026",
    description: "Une expérience e-commerce moderne pensée pour simplifier l'achat, valoriser les produits et fluidifier le parcours client.",
    image: T_1,
    technologies: ["React", "TypeScript", "Django"],
    link: "/projects/mavora",
  },
  {
    id: 2,
    title: "RestoCore",
    category: "Management System",
    year: "2026",
    description: "Une solution digitale complète pour centraliser et optimiser la gestion des activités d'un restaurant.",
    image: T_2,
    technologies: ["Django", "DRF", "React"],
    link: "/projects/restocore",
  },
  {
    id: 3,
    title: "Beam Chat",
    category: "Artificial Intelligence",
    year: "2026",
    description: "Un assistant conversationnel intelligent conçu pour offrir une interaction fluide et naturelle.",
    image: T_3,
    technologies: ["React", "TypeScript", "AI"],
    link: "/projects/beam-chat",
  },
  {
    id: 4,
    title: "Project Four",
    category: "Web Development",
    year: "2026",
    description: "Une solution digitale conçue pour répondre aux besoins métiers.",
    image: T_4,
    technologies: ["React", "API"],
    link: "/projects/project-four",
  },
  {
    id: 5,
    title: "Project Five",
    category: "Web Application",
    year: "2026",
    description: "Une expérience web moderne, performante et évolutive.",
    image: T_5,
    technologies: ["TypeScript", "Django"],
    link: "/projects/project-five",
  },
  {
    id: 6,
    title: "Project Six",
    category: "Digital Solution",
    year: "2026",
    description: "Un outil digital pensé pour simplifier les opérations quotidiennes.",
    image: T_6,
    technologies: ["React", "Python"],
    link: "/projects/project-six",
  },
];

export default function ProjectsSection() {
  return (
    <section className="projects_section" id="Projects">
      <div className="container_public projects_container">

        <div className="projects_heading">
          <HeaderSection
            sub="Notre expertise"
            title="Des projets qui font la différence"
            desc="Nous transformons vos idées en solutions digitales innovantes, pensées pour répondre à vos besoins, relever vos défis et accompagner votre croissance."
          />
        </div>

        <div className="projects_masonry">
          {projects.map((project, index) => (
            <a
              href={project.link}
              className={`project_card project_card_${index + 1}`}
              key={project.id}
              aria-label={`Découvrir le projet ${project.title}`}
              data-aos="fade-up">
              <div className="project_image">
                <img src={project.image} alt={project.title} loading="lazy" decoding="async"/>
   
                <div className="project_image_overlay" />

                <span className="project_index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="project_category">
                  {project.category}
                </span>

                <span className="project_arrow radius_large">
                  <ArrowUpRight size={20} />
                </span>
{/* 
                <div className="project_info">
                  <div className="flex align_center justify_between">
                    <div className="text text_body text_white fs_sm fw_semibold">{project.year}</div>
                    <span className="text text_body text_white fs_sm fw_semibold">
                      Découvrir <MoveUpRight size={14} />
                    </span>
                  </div>

                  <div className="text text_body fs_lg fw_bold text_limit_1 title text_primary">{project.title}</div>
                  <div className="text text_body text_limit_2 title text_white">{project.description}</div>

                  <div className="project_technologies my_start_10">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div> */}
              </div>
            </a>
          ))}
        </div>


      </div>
    </section>
  );
}
