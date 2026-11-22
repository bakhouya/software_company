



import { Link } from "react-router-dom";

import { ArrowRight, Play } from "lucide-react";
import HeroVideo from "@/assets/videos/bg2.mp4";

export default function HeroSection() {
  return (
    <>

      <section className="hero_section" aria-labelledby="hero_title" id="Home">

          <video src={HeroVideo} title={"Hero Video"} autoPlay muted loop playsInline preload="metadata" />
          <div className="hero_overlay" aria-hidden="true" />

          <article className="container_public hero_content text_center mx_auto">

            <div className="hero_text">


              <div className="text fs_4xl fw_semibold hero_title">
                Nous 
                <span className="text_primary"> donnons </span>
                vie à vos idées grâce à des 
                <span className="text_secondary"> solutions digitales </span> 
                innovantes
              </div>

              <p className="text text_body text_white">
                Nous accompagnons les entreprises dans leur transformation numérique en concevant des applications, des plateformes web et des solutions logicielles performantes, modernes et adaptées à leurs besoins. De la première idée jusqu'à la réalisation finale
              </p>

              <div className="state_hero">
                <div>
                  <div className="text text_body fs_xl fw_bold text_primary">20+</div>
                  <div className="text text_body text_white text_limit_1">Solutions développées</div>
                </div>

                <div className="slash_hero"></div>

                <div>
                  <div className="text text_body fs_xl fw_bold text_primary">10+</div>
                  <div className="text text_body text_white text_limit_1">Services proposés</div>
                </div>

                <div className="slash_hero"></div>

                <div>
                  <div className="text text_body fs_xl fw_bold text_primary">98%</div>
                  <div className="text text_body text_white text_limit_1">Satisfaction client</div>
                </div>
              </div>

              <div className="flex align_center justify_center gap_12 hero_actions">

                <Link to="/contact" className="btn btn_pimary btn_lg btn_glow btn_radius">
                  Travaillons ensemble
                  <ArrowRight size={18} />
                </Link>

                <Link to="/projects" className="btn btn_lg btn_outline btn_glow btn_radius">
                  <Play size={17} />
                  Découvrir nos projets
                </Link>

              </div>

            </div>


          </article>

      </section>
      

    </>
  );
}
