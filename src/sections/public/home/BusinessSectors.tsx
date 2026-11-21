
import HeaderSection from "@/components/ui/HeaderSection";
import {ArrowUpRight, Building2, ShoppingBag, BriefcaseBusiness, GraduationCap, Utensils, House} from "lucide-react";

const sectors = [
  {
    id: "01",
    title: "Entreprises et organisations",
    description: "Des systèmes pour organiser le travail, les équipes et les données.",
    icon: Building2,
    className: "corporate",
  },
  {
    id: "02",
    title: "Commerce et distribution",
    description: "Des parcours d'achat fluides et des expériences de vente connectées.",
    icon: ShoppingBag,
    className: "commerce",
  },
  {
    id: "03",
    title: "Services professionnels",
    description: "Des interfaces digitales qui valorisent vos services et facilitent leur accès.",
    icon: BriefcaseBusiness,
    className: "professional",
  },
  {
    id: "04",
    title: "Éducation et formation",
    description: "Des plateformes d'apprentissage et de gestion de contenu flexibles.",
    icon: GraduationCap,
    className: "education",
  },
  {
    id: "05",
    title: "Restauration et hôtellerie",
    description: "Des solutions pour la réservation, la commande et la relation client.",
    icon: Utensils,
    className: "hospitality",
  },
  {
    id: "06",
    title: "Immobilier",
    description: "Des moyens plus simples pour explorer les biens et gérer les demandes.",
    icon: House,
    className: "real-estate",
  },
//   {
//     id: "07",
//     title: "Systèmes de gestion",
//     description: "L'automatisation des processus et la réduction des tâches répétitives.",
//     icon: Workflow,
//     className: "management",
//   },
//   {
//     id: "08",
//     title: "Logistique et transport",
//     description: "Des solutions pour connecter les opérations et suivre les flux d'informations.",
//     icon: Truck,
//     className: "logistics",
//   },
];

export default function BusinessSectors() {
  return (
    <section className="business_sectors" id="Sectors">

      <div className="business_sectors__container container_public">

        <div className="">
          <HeaderSection
            sub="Nos domaines d’expertise"
            title="Des solutions pour chaque secteur"
            desc="Nous concevons des solutions digitales adaptées aux spécificités de chaque activité, afin d’optimiser les opérations, simplifier les processus et accompagner durablement le développement de votre entreprise."
          />
        </div>

        <div className="business_sectors__grid">
          {sectors.map((sector) => {
            const Icon = sector.icon;

            return (
              <article className="card sector_card" key={sector.id}>

                <div className="flex justify_center my_end_7">
                    <div className="avatar avatar_xl radius_large mx_auto bg_hover border_hover">
                        <Icon size={25} strokeWidth={1.7} className="text_primary"/>
                    </div>
                </div>

                <div className="sector_card__content text_center">
                    <div className="text text_body fs_md fw_semibold my_end_3 text_limit_1 title">{sector.title}</div>
                    <div className="text text_body text_limit_2">{sector.description}</div>
                </div>

                <div className="sector_card__bottom">
                    <div className="text text_body">Découvrir le secteur</div>

                    <div className="sector-card__arrow">
                        <ArrowUpRight size={17} />
                    </div>
                </div>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
