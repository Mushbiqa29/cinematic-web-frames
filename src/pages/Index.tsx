import { FilmstripNav } from '@/components/FilmstripNav';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { PortfolioGallery } from '@/components/PortfolioGallery';
import { ProcessSection } from '@/components/ProcessSection';
import { ServicesSection } from '@/components/ServicesSection';
import { PricingSection } from '@/components/PricingSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { StudioTourSection } from '@/components/StudioTourSection';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FilmstripNav />
      <HeroSection />
      <AboutSection />
      <PortfolioGallery />
      <ProcessSection />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <StudioTourSection />
      <ContactForm />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
