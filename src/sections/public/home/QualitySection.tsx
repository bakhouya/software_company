



import { BrainCircuit, Eye, Layers3, Handshake, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";


const principles = [
  {
    number: "01",
    icon: BrainCircuit,
    title: "La réflexion avant l'action",
    description:
      "Nous relions vos objectifs business aux besoins réels des utilisateurs, pour donner un sens à chaque fonctionnalité.",
  },
  {
    number: "02",
    icon: Eye,
    title: "La clarté à chaque étape",
    description:
      "Un périmètre défini, des livrables concrets, des délais convenus et une communication transparente.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Une vision tournée vers l'avenir",
    description:
      "Nous concevons des architectures flexibles et évolutives, capables d'accompagner votre croissance.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Un partenariat durable",
    description:
      "Le lancement n'est que le début. Nous restons à vos côtés pour faire évoluer votre produit dans le temps.",
  },
];

export default function QualitySection() {
  return (
    <section className="quality_section shapes sapes_bottom_start" id="Quality">

      <div className="bg_shapes" aria-hidden="true">
        <span className="bg_circle bg_circle_outer" />
        <span className="bg_circle bg_circle_inner" />
      </div>

      <div className="quality_container container_public">

        <div className="quality_header" data-aos="fade-right">
            <span className="radius_large bg_hover max_content py_5 px_13 border_hover">
                <span className="text text_body fs_sm text_primary ">  Notre approche  </span>
            </span>
            <div className="text text_body fs_3xl title fw_bold my_start_10 title_headline">
              La technologie commence par l'humain <span className="text_primary"> et se traduit en valeur</span> 
            </div>
            <div className="text text_body text_limit_4"> 
                Nous ne commençons pas par les outils, mais par les
              bonnes questions. Nous comprenons ce que vous souhaitez
              transformer, puis choisissons la solution qui crée le
              plus de valeur avec le moins de complexité possible.
            </div>

            <Link to={""} className="btn btn_primary btn_lg btn_glow btn_radius my_start_40">
              Découvrir notre histoire
              <ArrowUpRight size={19} />
            </Link>
        </div>

        <div className="quality_grid" data-aos="fade-left">
            
          {principles.map((service) => {
            const Icon = service.icon;

            return (
              <article className="card quality_card" key={service.number}>
                <div className="flex justify_center my_end_7">
                    <div className="avatar avatar_xl radius_large mx_auto bg_hover border_hover">
                        <Icon size={25} strokeWidth={1.7} className="text_primary"/>
                    </div>
                </div>

                <div className="">
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
