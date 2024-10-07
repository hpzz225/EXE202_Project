import ContactForm from '@/layouts/components/ContactForm/ContactForm';
import BenefitsSection from '../layouts/components/BenefitsSection';

import { Hero } from '../layouts/components/Hero';
import IntroSection from '../layouts/components/IntroSection';

const Home = () => {
    return (
        <>
            <Hero />
            <IntroSection />
            <BenefitsSection />
            <ContactForm />
        </>
    );
};

export default Home;
