

/* ----------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------- */
import AboutSection from "@/sections/public/home/AboutSection";
import BusinessSectors from "@/sections/public/home/BusinessSectors";
import ContactSection from "@/sections/public/home/ContactSection";
import FAQSection from "@/sections/public/home/FAQSection";
import HeroSection from "@/sections/public/home/Hero";
import ProcessSection from "@/sections/public/home/ProcessSection";
import ProjectsSection from "@/sections/public/home/projects/ProjectsSection";
import QualitySection from "@/sections/public/home/QualitySection";
import ServicesSection from "@/sections/public/home/ServicesSection";
import TestimonialsSection from "@/sections/public/home/TestimonialsSection";
/* ----------------------------------------------------------------------------------------------------------- */

 
/* ----------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------- */
export default function HomePage() {

    return (
        <div className=""> 
            {/* ------------------------Hero Section---------------------------- */}
            <HeroSection />
            {/* ------------------------About Section---------------------------- */}
            <AboutSection />
            {/* ------------------------Projects Section---------------------------- */}
            <ProjectsSection />
            {/* ------------------------Services Section---------------------------- */}
            <ServicesSection />
            {/* ------------------------Business Sectors Section---------------------------- */}
            <BusinessSectors />
            {/* ------------------------Process Section---------------------------- */}
            <ProcessSection />
            {/* ------------------------Quality Section---------------------------- */}
            <QualitySection />
            {/* ------------------------FAQ Section---------------------------- */}
            <FAQSection />
            {/* ------------------------Contact Section---------------------------- */}
            <ContactSection />
            {/* ------------------------Testimonials Section---------------------------- */}
            <TestimonialsSection />
        </div>
    )

}
/* ----------------------------------------------------------------------------------------------------------- */


