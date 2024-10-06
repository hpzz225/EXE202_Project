import React from 'react';
import ContactInfo from './contact_info';
import ContactImage from './contact_image';

const ContactSection: React.FC = () => {
  return (
    <section className="self-start mt-7 mr-0 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <ContactInfo />
        <ContactImage />
      </div>
    </section>
  );
};

export default ContactSection;