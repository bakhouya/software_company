
import { HeaderSectionLight } from "@/components/ui/HeaderSection";
import {Code2, PanelsTopLeft, ShoppingCart, Workflow, Settings2, Network} from "lucide-react";

import type { LucideIcon } from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

const services: Service[] = [
  {
    id: 1,
    title: "Développement web",
    description:
      "Des sites web rapides et intuitifs qui valorisent votre activité et transforment les visites en opportunités.",
    icon: Code2,
  },
  {
    id: 2,
    title: "Applications web & systèmes",
    description:
      "Des solutions digitales conçues autour de vos méthodes de travail, évolutives et faciles à maintenir.",
    icon: PanelsTopLeft,
  },
  {
    id: 3,
    title: "E-commerce",
    description:
      "Des boutiques en ligne optimisées, de la découverte des produits jusqu'à la finalisation des commandes.",
    icon: ShoppingCart,
  },
//   {
//     id: 4,
//     title: "Design UI/UX",
//     description:
//       "De la recherche aux prototypes, nous créons des interfaces intuitives qui rendent chaque interaction agréable.",
//     icon: ShoppingCart,
//   },
  {
    id: 5,
    title: "Intégrations & API",
    description:
      "Connectez vos outils et vos services grâce à des échanges de données fluides, fiables et sécurisés.",
    icon: Workflow,
  },
  {
    id: 6,
    title: "Automatisation des processus",
    description:
      "Simplifiez vos tâches quotidiennes grâce à des processus automatisés qui réduisent les erreurs et font gagner du temps.",
    icon: Settings2,
  },
  {
    id: 7,
    title: "Plateformes digitales",
    description:
      "Des expériences connectées qui réunissent vos services, vos utilisateurs et vos données dans un espace unifié.",
    icon: Network,
  },
];

export default function ServicesSection() {
  return (
    <section className="services_section" id="Services">
      <div className="services_container container_public">

        <HeaderSectionLight
            sub=" Nos expertises"
            title="Des services pensés pour vos ambitions"
            desc="Du conseil à la conception, du développement à l'accompagnement, nous réunissons toutes les expertises nécessaires pour donner vie à vos projets digitaux."
        />
        

        <div className="services_grid">
            
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="card service_card" key={service.id}>
                <div className="flex justify_center my_end_7">
                    <div className="avatar avatar_xl radius_large mx_auto bg_hover border_hover">
                        <Icon size={25} strokeWidth={1.7} className="text_primary"/>
                    </div>
                </div>

                <div className="sector_card__content text_center">
                  <div className="text text_body fs_md fw_semibold my_end_3 text_limit_1 title">{service.title}</div>
                  <div className="text text_body text_limit_2">{service.description}</div>
                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}
