
import { Check } from "lucide-react";
import AboutImage from "@/assets/images/aboute.png"

const highlights = [
  "Des solutions adaptées à vos besoins",
  "Une approche centrée sur la qualité",
  "Un accompagnement à chaque étape",
];

export default function AboutSection() {
  return (
    <section className="about_section" id="About">
      <div className="about_bg_shapes" aria-hidden="true">
        <span className="about_bg_circle about_bg_circle_outer" />
        <span className="about_bg_circle about_bg_circle_inner" />
      </div>
      <div className="container_public">

        <div className="about_layout">
          <div className="about_image_wrapper">
            <svg className="about_svg_defs" aria-hidden="true">
              <defs>
                <clipPath id="aboutOrganicShape" clipPathUnits="objectBoundingBox">
                  <path d="
                    M 0.20,0.02
                    C 0.36,-0.02 0.45,0.08 0.61,0.04
                    C 0.80,-0.01 0.96,0.12 0.98,0.29
                    C 1.02,0.47 0.91,0.58 0.96,0.73
                    C 1.02,0.91 0.85,1.01 0.67,0.97
                    C 0.49,0.94 0.40,1.02 0.24,0.96
                    C 0.07,0.90 -0.01,0.77 0.04,0.59
                    C 0.09,0.43 -0.02,0.30 0.06,0.17
                    C 0.09,0.09 0.13,0.04 0.20,0.02
                    Z
                  "/>
                </clipPath>
              </defs>
            </svg>

            <div className="about_image_shape">
              <img src={AboutImage} alt="Notre univers digital et technologique" loading="lazy" decoding="async"/>
            </div>
          </div>




          <div className="about_content">
            <div className="text text_body fs_3xl fw_bold lh_55">
              Nous créons des
              <span className="text_primary"> solutions digitales </span>
              qui font avancer vos idées.
            </div>

            <p className="text text_body">
              Nous sommes une entreprise spécialisée dans le développement
              de solutions digitales et technologiques. Nous accompagnons
              les entreprises dans la conception de sites web, applications
              et outils sur mesure, en mettant l'accent sur la qualité,
              la performance et l'expérience utilisateur.
            </p>

            <div className="about_highlights">
              {highlights.map((item) => (
                <div className="about_highlight" key={item}>
                  <span className="about_check">
                    <Check size={14} />
                  </span>
                  <span className="text text_body">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
