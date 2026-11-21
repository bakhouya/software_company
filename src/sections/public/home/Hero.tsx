



import { Link } from "react-router-dom";

import { ArrowRight, Play } from "lucide-react";
import HeroVideo from "@/assets/videos/bg2.mp4";

export default function HeroSection() {
  return (
    <>

      <section className="hero_section" aria-labelledby="hero_title">

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
                  <div className="">
                      <div className="text text_body fs_xl fw_bold text_primary"> 254 </div>
                      <div className="text text_body text_white"> Clients </div>
                  </div>
                  <div className="slash_hero"></div>
                  <div className="">
                      <div className="text text_body fs_xl fw_bold text_primary"> 254 </div>
                      <div className="text text_body text_white"> Solutions </div>
                  </div>
                  <div className="slash_hero"></div>
                  <div className="">
                      <div className="text text_body fs_xl fw_bold text_primary"> 254 </div>
                      <div className="text text_body text_white"> Solutions </div>
                  </div>
              </div>

              <div className="flex align_center justify_center gap_16 hero_actions">

                <Link to="/contact" className="btn btn_pimary btn_lg btn_glow btn_radius">
                  Let's Work Together
                  <ArrowRight size={18} />
                </Link>

                <Link to="/projects" className="btn btn_lg btn_outline btn_glow btn_radius">
                  <Play size={17} />
                  Explore Our Work
                </Link>

              </div>

            </div>


          </article>

          {/* <div className="waves_hero">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60" preserveAspectRatio="none">
              <path d="M0 60 L0 15.4 C360 15.4 360 27.7 720 27.7 C1080 27.7 1080 14.8 1440 14.8 L1440 60 Z"/>
            </svg>
          </div> */}
  

      </section>
      

    </>
  );
}
