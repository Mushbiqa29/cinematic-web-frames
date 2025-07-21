import { FilmstripNav } from '@/components/FilmstripNav';
import { HeroSection } from '@/components/HeroSection';
import { PortfolioGallery } from '@/components/PortfolioGallery';
import { ServicesSection } from '@/components/ServicesSection';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FilmstripNav />
      <HeroSection />
      <PortfolioGallery />
      <ServicesSection />
      <ContactForm />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
