import ContactForm from '@/layouts/components/contact_form/ContactForm'
import ContactInfo from '@/layouts/components/contact_form/ContactInfo'
import ContactSection from '@/layouts/components/contact_section'


const Contact  = () => {
  return (
    <div>

      <ContactSection />

      {/* <div className="mt-10 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
        <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
          <ContactForm />
          <ContactInfo />
        </div>
      </div> */}
      <ContactForm />

      <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
        <div className="w-[535px] text-center text-[#35a5a7] text-[50px] font-bold font-['Baloo 2']">XEM TRÊN BẢN ĐỒ</div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d244.91108329399682!2d106.83137979829512!3d10.843622276428274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d10.843605!2d106.8315245!5e0!3m2!1svi!2s!4v1728178943457!5m2!1svi!2s" 
          width="1980" 
          height="1080" 
          style= {{ border:"0" }}
          // allowfullscreen="" 
          loading="lazy" 
          // referrerpolicy="no-referrer-when-downgrade"
          >
        </iframe>
      </div>
    </div>
  )
}

export default Contact
