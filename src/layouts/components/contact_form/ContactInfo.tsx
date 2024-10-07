import React from "react";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e13028dc9a0619323b217a2cdf582e29a0c6aaa11489650f6abf7e34fa612701?placeholderIfAbsent=true&apiKey=6a5f54a1ff4948049825ca6839455884",
      text: "0123 456 789",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c8ff4486c3571994a3f2f5e9d0a01d22dac40a02d97e4e112bd69e589d3e8b80?placeholderIfAbsent=true&apiKey=6a5f54a1ff4948049825ca6839455884",
      text: "tiemgiatnhamoon@gmail.com",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/95b0ed3d9d7de430dca348869f3f5119df267a42aea6e5f2f1e5579484cd4fff?placeholderIfAbsent=true&apiKey=6a5f54a1ff4948049825ca6839455884",
      text: "CN1: 28/8, đường 25, phường Long Thạnh Mỹ, Tp Thủ Đức.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/95b0ed3d9d7de430dca348869f3f5119df267a42aea6e5f2f1e5579484cd4fff?placeholderIfAbsent=true&apiKey=6a5f54a1ff4948049825ca6839455884",
      text: "CN2: 631 Nguyễn Xiển, phường Long Thạnh Mỹ, Tp Thủ Đức.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e7a0ba566f7c4901264647bd0299a22f544823e5ccf88ac3c91a43228eb64d3?placeholderIfAbsent=true&apiKey=6a5f54a1ff4948049825ca6839455884",
      text: "Hoạt động 7:00 AM - 22:00 PM",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e7a0ba566f7c4901264647bd0299a22f544823e5ccf88ac3c91a43228eb64d3?placeholderIfAbsent=true&apiKey=6a5f54a1ff4948049825ca6839455884",
      text: "7 ngày/tuần",
    },
  ];

  return (
    <aside className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col self-stretch my-auto text-2xl font-medium text-cyan-800 max-md:mt-10 max-md:max-w-full gap-20">
        <div className="flex flex-col items-start pl-2 w-full max-md:max-w-full">
          {contactDetails.map((detail, index) => (
            <div
              key={index}
              className={`flex gap-3.5 ${index > 0 ? "mt-3" : ""}`}
            >
              <img
                loading="lazy"
                src={detail.icon}
                alt=""
                className="object-contain shrink-0 my-auto aspect-square w-[25px]"
              />
              <div className={index < 2 ? "basis-auto" : "flex-auto"}>
                {detail.text}
              </div>
            </div>
          ))}
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/62e48a6034751b48901624f7123391afb018a9d0940d035924403b6f77c29993?placeholderIfAbsent=true&apiKey=6a5f54a1ff4948049825ca6839455884"
          alt="Contact map"
          className="object-contain mt-7 max-w-full aspect-[2.78] w-[453px]"
        />
      </div>
    </aside>
  );
};

export default ContactInfo;
