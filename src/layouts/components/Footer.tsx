import logo from '../../assets/MOON NGANG-01.png';
import { TbPointFilled } from 'react-icons/tb';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { IoMdMail } from 'react-icons/io';
const Footer = () => {
    return (
        <footer className="bg-[#EAF6F6] py-12">
            <div className=" flex flex-col md:flex-row justify-center items-start  gap-12 text-center md:text-left">
                {/* <div className="md:w-1/5 mb-8 md:mb-0"> */}
                <div className="w-[381px] mr-12">
                    <h3 className="font-baloo text-[25px] text-[#35A6A8] font-700">
                        TIỆM GIẶT NHÀ MOON
                    </h3>
                    <img
                        src={logo}
                        alt="Tiệm Giặt Nhà MOON"
                        className="mx-auto md:mx-0 mb-4 w-[239px] h-[93px]"
                    />

                    <p className="font-baloo font-400 text-[#22566ECC]/80">
                        MOON hiểu nỗi lo về cái áo trắng tinh mới mua ko lâu bị
                        lem màu, chiếc áo khoác len sợ bị xù lông hay bộ drap
                        giường bị phai màu khi gửi giặt dịch vụ của khách hàng.
                    </p>
                </div>

                {/* Services Section */}
                {/* <div className="md:w-1/5 mb-8 md:mb-0"> */}
                <div className="w-[239px] mr-12">
                    <h3 className="text-[25px] font-baloo font-600 text-[#35A6A8]">
                        Dịch vụ
                    </h3>
                    <ul className="mt-4 text-[#22566e] space-y-2 font-baloo font-400 text-[#22566ECC]/80">
                        <li className="flex items-center">
                            <TbPointFilled color="#35A6A8" size={16} />
                            Giặt sấy quần áo
                        </li>
                        <li className="flex items-center">
                            <TbPointFilled color="#35A6A8" size={16} />
                            Vệ sinh giày dép
                        </li>
                        <li className="flex items-center">
                            <TbPointFilled color="#35A6A8" size={16} />
                            Giặt sấy khăn, rèm
                        </li>
                        <li className="flex items-center">
                            <TbPointFilled color="#35A6A8" size={16} />
                            Vệ sinh gấu bông, topper
                        </li>
                    </ul>
                </div>

                {/* Address Section */}
                {/* <div className="md:w-1/5 mb-8 md:mb-0"> */}
                <div className="w-[285px] mr-12">
                    <h3 className="text-[25px] font-baloo font-600 text-[#35A6A8]">
                        Địa chỉ
                    </h3>
                    <ul className="mt-4 font-baloo font-400 text-[#22566ECC]/80 space-y-2">
                        <li>
                            Chi nhánh 1: 28/8, đường 25, phường Long Thạnh Mỹ,
                            TP. Thủ Đức
                        </li>
                        <li>
                            Chi nhánh 2: 631 Nguyễn Xiển, phường Long Thạnh Mỹ,
                            TP. Thủ Đức
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                {/* <div className="md:w-1/5"> */}
                <div className="w-[302px]">
                    <h3 className="text-[25px] font-baloo font-600 text-[#35A6A8]">
                        Liên hệ
                    </h3>
                    <ul className="mt-4 text-[#22566e] space-y-2">
                        <li className="flex items-center ">
                            <BiSolidPhoneCall
                                width={25}
                                height={25}
                                color="#35A6A8"
                                className="mr-4"
                            />
                            0123 456 789
                        </li>
                        <li className="flex items-center font-baloo font-400 text-[#22566ECC]/80 ">
                            <IoMdMail
                                width={25}
                                height={25}
                                color="#35A6A8"
                                className="mr-4"
                            />
                            tiemgiatnhamoon@gmail.com
                        </li>
                    </ul>
                    <div className="mt-4 flex justify-center md:justify-start space-x-4">
                        <a href="#" className="text-[#22566e]">
                            <i className="fab fa-facebook text-2xl"></i>
                        </a>
                        <a href="#" className="text-[#22566e]">
                            <i className="fab fa-instagram text-2xl"></i>
                        </a>
                        <a href="#" className="text-[#22566e]">
                            <i className="fab fa-tiktok text-2xl"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Text */}
            <div className="text-center mt-16 text-[#22566e]/80 font-baloo font-600 text-[20px] leading-[32.04px]">
                TIỆM GIẶT NHÀ MOON-Chuyên giặt sấy, giặt ủi tất cả các loại quần
                áo, giày GIAO NHẬN TẬN NHÀ
            </div>
        </footer>
    );
};

export default Footer;
