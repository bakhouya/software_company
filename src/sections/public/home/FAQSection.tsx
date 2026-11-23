


import { useState } from "react";
import { Plus } from "lucide-react";
import HeaderSection from "@/components/ui/HeaderSection";

const faqs = [
  {
    question: "Comment débute une collaboration ?",
    answer:
      "Tout commence par un échange pour comprendre votre activité, vos objectifs et vos besoins. Nous définissons ensuite une approche claire, les fonctionnalités essentielles et les prochaines étapes du projet.",
  },
  {
    question: "Combien de temps faut-il pour réaliser un projet ?",
    answer:
      "La durée dépend de la complexité du projet, de ses fonctionnalités et de son périmètre. Après avoir étudié votre besoin, nous établissons un planning réaliste avec des étapes de validation.",
  },
  {
    question: "Proposez-vous le design et le développement ?",
    answer:
      "Oui. Nous pouvons prendre en charge l'ensemble du processus, de la conception UX/UI à l'intégration frontend et au développement backend, pour créer une expérience cohérente et performante.",
  },
  {
    question: "Peut-on créer une solution sur mesure ?",
    answer:
      "Absolument. Chaque solution est pensée selon vos besoins, vos processus et vos objectifs. Nous adaptons les fonctionnalités et l'architecture pour répondre précisément à votre activité.",
  },
  {
    question: "Assurez-vous le suivi après la mise en ligne ?",
    answer:
      "Oui. Nous pouvons assurer la maintenance, les corrections, les mises à jour et l'évolution de votre solution afin de garantir sa stabilité et son amélioration continue.",
  },
  {
    question: "Comment est défini le coût d'un projet ?",
    answer:
      "Le budget est établi selon le périmètre fonctionnel, la complexité technique, les délais et les besoins spécifiques. Vous recevez une proposition claire avant le démarrage.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="faq_section">
      <div className="container_public faq_container">

        <div className="">
          <HeaderSection
            sub="Qui sommes-nous ?"
            title="Donnons vie à vos ambitions"
            desc="Nous sommes une équipe passionnée par la technologie et l’innovation. Nous accompagnons les entreprises dans leur transformation digitale en créant des solutions sur mesure, pensées pour simplifier leur quotidien et accélérer leur développement."
          />
        </div>

        <div className="faq_list">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div className={`faq_item ${isOpen ? "is_active" : ""}`} key={faq.question} data-aos="zoom-in">
                <button
                  className="faq_question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq_answer_${index}`}
                  id={`faq_question_${index}`}>

                  <span className="flex align_center justify_center avatar avatar_sm bg_hover border_hover btn_radius">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="text text_body fs_md fw_medium">
                    {faq.question}
                  </div>

                  <span className="faq_toggle flex align_center justify_center avatar avatar_sm avatar_primary btn_radius">
                    <Plus size={19} />
                  </span>
                </button>

                <div
                  className="faq_answer"
                  id={`faq_answer_${index}`}
                  role="region"
                  aria-labelledby={`faq_question_${index}`}
                  hidden={!isOpen}>

                  <div className="text text_body">{faq.answer}</div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
