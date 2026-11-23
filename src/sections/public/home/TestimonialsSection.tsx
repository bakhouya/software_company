
import { ArrowUpRight, Quote, Star } from "lucide-react";
import HeaderSection from "@/components/ui/HeaderSection";


const testimonials = [
    {
      id: 1,
      name: "Yassine El Amrani",
      role: "Fondateur",
      company: "Entreprise digitale",
      initials: "YE",
      rating: 5,
      featured: false,
      message:
        "Une équipe professionnelle, à l'écoute et surtout capable de transformer nos idées en une solution concrète. Le résultat correspond parfaitement à nos attentes.",
    },
    {
      id: 2,
      name: "Salma Benali",
      role: "Directrice générale",
      company: "Société commerciale",
      initials: "SB",
      rating: 5,
      featured: true,
      message:
        "Nous avons particulièrement apprécié leur approche, leur disponibilité et la qualité du travail réalisé. Une collaboration fluide du début jusqu'à la livraison du projet.",
    },
    {
      id: 3,
      name: "Mehdi Alaoui",
      role: "Responsable de projet",
      company: "Startup",
      initials: "MA",
      rating: 5,
      featured: false,
      message:
        "Une très bonne expérience avec une équipe réactive et organisée. Notre plateforme est plus performante et offre désormais une meilleure expérience à nos utilisateurs.",
    },
];

export default function TestimonialsSection() {
  return (
    <section className="testimonials_section" id="Testimonials">
      <div className="testimonials_bg_glow" aria-hidden="true" />

      <div className="container_public">
        <HeaderSection
          title="La confiance de nos clients,"
          sub=" notre meilleure réussite."
          desc="Chaque collaboration est une nouvelle occasion de créer de la valeur. Découvrez les retours de ceux qui nous ont fait confiance."
        />

        <div className="testimonials_grid">
          {testimonials.map((item) => (
            <article className={`testimonial_card ${ item.featured ? "testimonial_card_featured" : ""}`} key={item.id} data-aos="fade-up">
              <div className="testimonial_card_top">
                <span className="testimonial_quote_icon">
                  <Quote size={21} />
                </span>

                <div className="testimonial_stars" aria-label={`${item.rating} sur 5`}>
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <Star key={index} size={15} fill="currentColor" />
                  ))}
                </div>
              </div>

              <div className="text text_body text_limit_4">“{item.message}”</div>

              <div className="testimonial_divider" />

              <div className="testimonial_author">
                <div className="avatar avatar_md btn_radius avatar_primary">{item.initials}</div>

                <div className="testimonial_author_info">
                  <div className="text text_body fw_semibold">{item.name}</div>
                  <div className="text text_body fs_sm text_limit_1">{item.role} · {item.company}</div>
                </div>

                <span className="btn_icon btn_radius btn_md">
                  <ArrowUpRight size={17} />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
