import bg from "@/assets/servicesbody.png";
export const ServiceBody = () => {
  return (
    <section className="flex relative flex-col justify-center items-end px-20 py-72 mt-6 max-w-full text-2xl font-bold text-white min-h-[964px] w-[2050px] max-md:px-5 max-md:py-24 ">
      <div className="bg-[#ffffff] py-32">
        <img
          loading="lazy"
          src={bg}
          alt="anhgiatsay"
          className="object-cover absolute inset-0 size-full"
          // className="w-[845px] h-[602px] left-[1011px] top-[358px] absolute"
        />
        <div className="flex relative flex-col items-start mb-0 max-w-full w-[591px] max-md:mb-2.5">
          <h2 className="text-5xl text-red-400 max-md:text-4xl">GIẶT SẤY</h2>
          <p className="self-stretch mt-6 font-medium max-md:max-w-full">
            Phù hợp cho áo quần thường ngày, ví dụ như áo thun, áo sơ mi, quần
            jeans, khăn, tất vớ, đồ lót …
            <br />
            <br />
            MOON sẽ giặt, sấy khô, đóng gói cẩn thận cho bạn
          </p>
          <button className=" w-[222px] h-[71px] spx-14 py-4 mt-12 text-center bg-teal-400 rounded-[20px] shadow max-md:px-5 max-md:mt-10 hover:bg-teal-300">
            Chi tiết giá
          </button>
        </div>
      </div>
    </section>
  );
};
