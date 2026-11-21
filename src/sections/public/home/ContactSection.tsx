

import {
  ArrowUpRight,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";

const services = [
  "Développement web",
  "Applications web",
  "Applications mobiles",
  "E-commerce",
  "Logiciel sur mesure",
  "UI / UX Design",
  "Autre besoin",
];

const projectSteps = [
  {
    number: "01",
    title: "Vous nous expliquez",
    description: "Partagez votre idée et vos objectifs.",
  },
  {
    number: "02",
    title: "Nous définissons",
    description: "Nous étudions vos besoins et les solutions possibles.",
  },
  {
    number: "03",
    title: "Nous construisons",
    description: "Nous donnons vie à votre projet, étape par étape.",
  },
];

export default function ContactSection() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Le traitement du formulaire sera connecté au backend Django.
  };

  return (
    <section className="contact_section" id="Contact">
      <div className="contact_bg_glow" aria-hidden="true" />
      <div className="contact_bg_circle" aria-hidden="true" />

      <div className="container_public">
        <div className="contact_layout">
          <div className="contact_information">
            <div className="contact_intro">
              <span className="avatar avatar_lg bg_hover border_hover btn_radius">
                <Sparkles size={19} className="text_primary"/>
              </span>

              <div>
                <div className="text fs_lg text_primary fw_semibold">Chaque projet commence par une conversation.</div>
                <div className="text fs_base text_white">
                  Décrivez-nous votre vision. Nous prendrons le temps de
                  comprendre vos besoins avant de vous proposer une solution.
                </div>
              </div>
            </div>

            <div className="contact_steps">
              {projectSteps.map((step) => (
                <div className="contact_step" key={step.number}>
                  <span className="contact_step_number">{step.number}</span>

                  <div className="contact_step_content">
                    <div className="text fs_md text_white fw_semibold">{step.title}</div>
                    <div className="text fs_base text_white">{step.description}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact_direct radius_primary">
              <div className="avatar avatar_lg btn_radius bg_hover border_hover">
                <MessageCircle size={20} className="text_primary"/>
              </div>

              <div className="contact_direct_text">
                <div className="text fs_base text_white fw_semibold text_limit_1">UNE QUESTION AVANT DE COMMENCER ?</div>
                <div className="text fs_base text_white text_limit_1">Nous sommes à votre écoute </div>
              </div>

              <ArrowUpRight size={19} className="contact_direct_arrow" />
            </div>
          </div>

          {/* Contact form */}
          <div className="contact_form_wrapper">
            <div className="contact_form_heading">
              <div>
                <div className="text text_body fs_lg fw_semibold">Parlons de vos idées</div>
                <div className="text text_body fs_sm fw_regular">Remplissez le formulaire ci-dessous et nous vous contacterons dans les plus brefs délais.</div>
              </div>

              <span className="avatar avatar_lg bg_hover border_hover btn_radius">
                <Send size={20} className="text_primary"/>
              </span>
            </div>

            <form className="contact_form" onSubmit={handleSubmit}>
              <div className="contact_fields_row">
                <div className="form_field">
                  <label htmlFor="contact_name">Votre nom <span>*</span>  </label>
                  <input
                    type="text"
                    id="contact_name"
                    name="name"
                    placeholder="Ex. Jean Dupont"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="form_field">
                  <label htmlFor="contact_email">Adresse e-mail <span>*</span></label>
                  <input
                    type="email"
                    id="contact_email"
                    name="email"
                    placeholder="vous@exemple.com"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="form_field">
                <label htmlFor="contact_service">Quel service recherchez-vous ? <span>*</span></label>
                <select id="contact_service" name="service" defaultValue="" required>
                  <option value="" disabled>
                    Choisir un service
                  </option>

                  {services.map((service) => (
                    <option value={service} key={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contact_fields_row">
                <div className="form_field">
                  <label htmlFor="contact_budget">Budget estimé</label>
                  <select id="contact_budget" name="budget" defaultValue="">
                    <option value="" disabled>
                      Sélectionner un budget
                    </option>
                    <option value="Moins de 5 000 DH">Moins de 5 000 DH</option>
                    <option value="5 000 – 15 000 DH">5 000 – 15 000 DH</option>
                    <option value="15 000 – 30 000 DH">15 000 – 30 000 DH</option>
                    <option value="30 000 – 50 000 DH">30 000 – 50 000 DH</option>
                    <option value="Plus de 50 000 DH">Plus de 50 000 DH</option>
                    <option value="À définir">À définir</option>
                  </select>
                </div>

                <div className="form_field">
                  <label htmlFor="contact_timeline">Délai souhaité</label>
                  <select id="contact_timeline" name="timeline" defaultValue="">
                    <option value="" disabled>
                      Choisir un délai
                    </option>
                    <option value="Dès que possible">Dès que possible</option>
                    <option value="Dans un mois">Dans un mois</option>
                    <option value="Dans 2 à 3 mois">Dans 2 à 3 mois</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div className="form_field">
                <label htmlFor="contact_message">Parlez-nous de votre projet <span>*</span></label>
                <textarea
                  id="contact_message"
                  name="message"
                  rows={4}
                  placeholder="Décrivez votre idée, vos objectifs et ce que vous souhaitez réaliser..."
                  required
                />
              </div>

              <div className="contact_form_footer">
                <button type="submit" className="btn btn_primary btn_lg btn_glow btn_radius">
                  Envoyer ma demande
                  <span><ArrowUpRight size={18} /></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
