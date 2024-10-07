import ContactSection from "@/layouts/components/ContactSection";
import { HeroServices } from "@/layouts/components/servicesComponents/HeroServices";
import { ServiceBody } from "@/layouts/components/servicesComponents/ServiceBody";
import { ServiceBody2 } from "@/layouts/components/servicesComponents/ServicesBody2";

const Services = () => {
  return (
    <div>
      <HeroServices />
      <ServiceBody />
      <ServiceBody2 />
      <ContactSection />
    </div>
  );
};

export default Services;
