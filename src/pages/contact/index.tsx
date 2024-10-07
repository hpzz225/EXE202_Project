import ContactForm from "@/layouts/components/contact_form/ContactForm";
import ContactSection from "@/layouts/components/contact_section";

const Contact = () => {
  return (
    <div className="gap-10">
      <ContactSection />

      <ContactForm />

      <div className="flex flex-col w-full max-md:ml-0 max-md:w-full gap-10">
        <div className="uppercase font-baloo font-700 text-[#35A6A8] text-[50px] leading-[80.1px] text-center">
          XEM TRÊN BẢN ĐỒ
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d244.91108329399682!2d106.83137979829512!3d10.843622276428274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d10.843605!2d106.8315245!5e0!3m2!1svi!2s!4v1728178943457!5m2!1svi!2s"
          width="1980"
          height="1080"
          style={{ border: "0" }}
          // allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
