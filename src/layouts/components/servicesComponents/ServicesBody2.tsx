import bg2 from "@/assets/servicesbody2.png";
export const ServiceBody2 = () => {
  return (
    <section className="block relative flex-col justify-center items-center px-20 py-80 mt-36 w-full text-2xl font-bold text-white min-h-[928px] max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full ">
      {/* <div className="bg-[#ffffff] py-32"> */}
      <img
        loading="lazy"
        src={bg2}
        alt="anhgiatsay"
        className="object-cover absolute inset-0 size-full"
        // className="w-[845px] h-[602px] left-[1011px] top-[358px] absolute"
      />
      <div className="flex relative flex-col items-start mb-0 ml-52 max-w-full w-[470px] max-md:mb-2.5">
        <h2 className="text-[50px] text-[#1b8b8d] font-bold font-['Baloo 2']">
          VỆ SINH GIÀY DÉP
        </h2>
        <br />
        <p className="self-stretch mt-6 font-medium max-md:max-w-full w-[528px] text-white text-[25px] font-medium font-['Baloo 2']">
          Phù hợp cho áo quần thường ngày, ví dụ như áo thun, áo sơ mi, quần
          jeans, khăn, tất vớ, đồ lót …
          <br />
          <br />
          MOON sẽ giặt, sấy khô, đóng gói cẩn thận cho bạn
        </p>
        <br />
        <button className="w-[222px] h-[71px] bg-[#f49791] rounded-[20px] shadow hover:bg-[#f76153]">
          Chi tiết giá
        </button>
      </div>
      {/* </div> */}
    </section>
  );
};
