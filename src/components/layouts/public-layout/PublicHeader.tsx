
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


import { ArrowUpDown } from "lucide-react";
import LOGO from "@/assets/images/logos/Agoura.png"
import ThemeToggle from "@/components/ui/ThemeToggle";
import BottomNavigation from "./BottomNavigation";



export default function PublicHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");


    useEffect(() => {
      const handleScroll = () => {setIsScrolled(window.scrollY > 0);};
      window.addEventListener("scroll", handleScroll);
      return () => {window.removeEventListener("scroll", handleScroll);};
    }, []);

    const navLinks = [
      { label: "Accueil", path: "#Home" },
      { label: "Services", path: "#Services" },
      { label: "À propos", path: "#About" },
      { label: "Projets", path: "#Projects" },
      { label: "Secteurs", path: "#Sectors" },
      { label: "Processus", path: "#Process" },
      { label: "Engagements", path: "#Quality" },
    ];

    const Scrolling = (link: { path: string }) => {
      document.getElementById(link.path.replace("#", ""))?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    return (
      <>
      <header className={`public_header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container_public">
          <div className={`header_container ${isScrolled ? "header_container_scroll" : ""}`}>

            <Link to="/" className="header_logo">
              <img src={LOGO} alt="logo"  loading="lazy" decoding="async"/>
            </Link>

            <nav className={`flex align_center justify_center ${menuOpen ? "active" : ""}`}>
                {navLinks.map((link) => {
                    const isActive = activeSection === link.path;
                    return (
                        <Link
                            key={link.path}
                            to="#"
                            className={`nav_link text text_body ${isActive ? "nav_link_active" : ""}`}
                            onClick={(event) => {
                              event.preventDefault(); setActiveSection(link.path); setMenuOpen(false); Scrolling(link);
                            }}>
                              
                            <span className="nav_link_label">{link.label}</span>

                            {isActive && (
                                <motion.span
                                    layoutId="nav_link_indicator"
                                    className="nav_link_indicator"
                                    transition={{type: "spring", stiffness: 400, damping: 30}}/>
                            )}
                        </Link>
                    );
                })}
            </nav>
           
            <div className="flex align_center gap_10">
                <ThemeToggle />
                <Link to={"#Contact"} className="btn btn_md btn_primary btn_glow btn_radius"
                  onClick={(event) => {event.preventDefault(); Scrolling({ path: "#Contact" });}}>
                  <div className="text text_body text_white fw_semibold">Contactez</div>
                  <ArrowUpDown size={17} />
                </Link>
            </div>

          </div>
        </div>
      </header>

      <BottomNavigation />
      </>
    );

}
