import bg from '../../assets/Group 108.png';
import effect from '../../assets/tải xuống (2) 1.png';
import laundry from '../../assets/laundry.png';
import machine from '../../assets/machine.png';
export const Hero = () => {
    return (
        <section className="bg-[#ffffff] py-32 ">
            <div className="container mx-auto flex justify-between items-end px-[158px] ">
                <div className="w-[650px] mr-12">
                    <h1 className=" text-[#35a5a7] text-[40px] font-baloo font-bold ">
                        GIẶT GÌ KHÓ ĐÃ CÓ MOON LO!
                    </h1>
                    <p className=" text-[#22566e] text-[20px] font-baloo font-400 mt-8  ">
                        MOON hiểu nỗi lo về cái áo trắng tinh mới mua ko lâu bị
                        lem màu, chiếc áo khoác len sợ bị xù lông hay bộ drap
                        giường bị phai màu khi gửi giặt dịch vụ của khách hàng.
                        Nhưng không sao cả, MOON luôn tận tay chăm sóc từng món
                        đồ mà khách đã tin tưởng giao phó như chính quần áo của
                        MOON vậy.
                    </p>
                </div>

                <div className="relative">
                    <img src={bg} alt="" className="w-[700px] h-[400px]" />
                    <img src={effect} alt="" className="absolute z-10 top-0" />
                    <img
                        src={machine}
                        alt=""
                        className="absolute z-20 top-[-1rem] right-16 w-[400px] h-[500px]"
                    />
                    <img
                        src={laundry}
                        alt=""
                        className="absolute z-30 top-[13.75rem] right-[21.75rem] w-[200px] h-[210px]"
                    />
                </div>
            </div>
        </section>
    );
};
