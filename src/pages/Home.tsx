import BenefitsSection from '../layouts/components/BenefitsSection';
import ContactSection from '../layouts/components/ContactSection';
import { Hero } from '../layouts/components/Hero';
import IntroSection from '../layouts/components/IntroSection';

const Home = () => {
    return (
        <>
            <Hero />
            <IntroSection />
            <BenefitsSection />
            <ContactSection />
        </>
    );
};

export default Home;
