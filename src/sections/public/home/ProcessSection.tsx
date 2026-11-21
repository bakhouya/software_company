


import { HeaderSectionLight } from "@/components/ui/HeaderSection";


const steps = [
  {
    number: "01",
    title: "Écouter",
    description:
      "Nous prenons le temps de comprendre votre contexte, vos enjeux et les opportunités avant d'imaginer une solution.",
    label: "Comprendre",
  },
  {
    number: "02",
    title: "Définir",
    description:
      "Nous transformons votre vision en un périmètre précis, avec des objectifs clairs et des priorités mesurables.",
    label: "Structurer",
  },
  {
    number: "03",
    title: "Concevoir",
    description:
      "Nous imaginons l'expérience utilisateur, explorons les pistes créatives et validons la direction dès les premières étapes.",
    label: "Imaginer",
  },
  {
    number: "04",
    title: "Développer",
    description:
      "Nous donnons vie à la solution progressivement, avec une architecture solide et des points de validation réguliers.",
    label: "Construire",
  },
  {
    number: "05",
    title: "Tester",
    description:
      "Nous vérifions chaque détail : qualité, performances, compatibilité et simplicité d'utilisation.",
    label: "Optimiser",
  },
  {
    number: "06",
    title: "Lancer",
    description:
      "Nous préparons la mise en ligne et vous accompagnons dans le passage du projet à son utilisation réelle.",
    label: "Déployer",
  },
  {
    number: "07",
    title: "Évoluer",
    description:
      "Nous analysons les retours, identifions les améliorations et faisons évoluer votre produit dans la durée.",
    label: "Améliorer",
  },
];

export default function ProcessSection() {
  return (
    <section className="process_section" id="Process">
      <div className="container_public">

        <div className="projects_heading_light">
          <HeaderSectionLight
            sub="Nos réalisations"
            title="L’innovation en action"
            desc="Découvrez une sélection de projets conçus avec passion, où créativité, expertise technique et vision stratégique se rencontrent pour donner vie à des expériences digitales performantes."
          />
        </div>

        <div className="process_timeline">
            <div className="process_track" />
            <div className="process_tech_bg" aria-hidden="true">
                <span className="tech_circle tech_circle_one" />
                <span className="tech_circle tech_circle_two" />
                <span className="tech_line tech_line_one" />
                <span className="tech_line tech_line_two" />
                <span className="tech_cross tech_cross_one">+</span>
                <span className="tech_cross tech_cross_two">+</span>
                <span className="tech_orbit_dot" />
            </div>

            {steps.map((step, index) => (
                <article className={`process_step ${index % 2 === 0 ? "step_left" : "step_right"}`}key={step.number}>
                <div className="process_content">
                    <div className="text text_body fs_md fw_semibold">{step.title}</div>
                    <div className="text text_body text_limit_2">{step.description}</div>
                    <span className="process_step_index">
                    ÉTAPE {step.number}
                    </span>
                </div>

                <div className="process_marker"> <span>{step.number}</span> </div>

                <div className="process_visual">
                    <span className="process_ghost_number">{step.number}</span>
                </div>
                </article>
            ))}
        </div>

      </div>
    </section>
  );
}
