import React from "react";
const ContactSection: React.FC = () => {
  return (
    <section className="bg-[#ffffff] py-4 grid grid-cols-2">
      <div className="flex flex-col items-center justify-center space-y-4 py-36 mx-auto">
        <h1 className="uppercase font-baloo font-700 text-[#35A6A8] text-[50px] leading-[80.1px] text-center">
          LIÊN HỆ VỚI CHÚNG TÔI
        </h1>
        <p className="mt-9 text-2xl text-cyan-800 max-md:max-w-full">
          Đội ngũ chuyên viên tư vấn Tiệm Giặt Nhà MOON luôn sẵn sàng hỗ trợ
          khách hàng để tìm được dịch vụ mong muốn.
        </p>
      </div>
      {/* <div className="flex flex-col ml-48 w-auto max-md:ml-0 max-md:w-full"> */}
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/60561b8afdec87237d16a1fe408154015a647f258d76734d1076320acd526a4e?placeholderIfAbsent=true&apiKey=6a5f54a1ff4948049825ca6839455884"
        alt="Contact illustration"
        className="flex flex-col ml-32 w-[708px] h-[664px] max-md:w-full "
      />
      {/* </div> */}
    </section>
  );
};

export default ContactSection;
