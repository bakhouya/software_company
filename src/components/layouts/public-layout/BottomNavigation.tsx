

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {House, Layers3, BriefcaseBusiness, Shapes, Workflow} from "lucide-react";

const navLinks = [
  //   { label: "À propos", path: "#About", icon: UserRound },
  //   { label: "Engagements", path: "#Quality", icon: ShieldCheck },
  
  { label: "Services", path: "#Services", icon: Layers3 },
  { label: "Projets", path: "#Projects", icon: BriefcaseBusiness },
  { label: "Accueil", path: "#Home", icon: House },
  { label: "Secteurs", path: "#Sectors", icon: Shapes },
  { label: "Processus", path: "#Process", icon: Workflow },

];

const BottomNavigation = () => {
  const [activeSection, setActiveSection] = useState("#Home");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.path.replace("#", "")))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(`#${visibleSections[0].target.id}`);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.2, 0.4, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const Scrolling = (path: string) => {
    document.getElementById(path.replace("#", ""))?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActiveSection(path);
  };

  return (
    <nav className="bottom_navigation" aria-label="Navigation principale">
      <div className="bottom_navigation_inner">
        {navLinks.map((link) => {
          const isActive = activeSection === link.path;
          const Icon = link.icon;

          return (
            <button
              key={link.path}
              type="button"
              className={`bottom_navigation_item ${isActive ? "active" : ""}`}
              onClick={() => Scrolling(link.path)}
              aria-label={link.label}
              aria-current={isActive ? "location" : undefined}
            >
              <span className="bottom_navigation_icon">
                <Icon size={20} strokeWidth={isActive ? 2.3 : 1.8} />

                {isActive && (
                  <motion.span
                    layoutId="bottom_nav_indicator"
                    className="bottom_navigation_indicator"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </span>

              <span className="bottom_navigation_label">
                {link.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
