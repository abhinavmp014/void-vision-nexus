import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import VisionSection from "@/components/VisionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <VisionSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
