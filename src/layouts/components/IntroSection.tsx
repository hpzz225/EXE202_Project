import { useNavigate } from 'react-router-dom';
import iconMoon from '../../assets/iconMoon.png';
import intro1 from '../../assets/intro1.png';
import intro2 from '../../assets/intro2.png';
import intro3 from '../../assets/khăn.png';
import intro4 from '../../assets/thú.png';
import { routes } from '../../router/router';

const IntroSection = () => {
    const navigate = useNavigate(); // Hook để điều hướng

    return (
        <section className="bg-[#ffffff] py-4">
            {/* Header Section */}
            <div className="flex flex-col items-center justify-center space-y-4 py-36">
                <h1 className="uppercase font-baloo font-700 text-[#35A6A8] text-[50px] leading-[80.1px] text-center">
                    Moon Có Gì?
                </h1>
                <img
                    src={iconMoon}
                    alt="Moon Icon"
                    className="w-[37.50px] h-[39.36px]"
                />
            </div>

            {/* Introduction Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 pt-36">
                {/* First Item */}
                <div className="text-center">
                    <img
                        src={intro1}
                        alt="Giặt Sấy Quần Áo"
                        className="w-[514.58px] h-[359.22px] mx-auto"
                    />
                    <div className="py-10 w-[513px] mx-auto">
                        <h2 className="text-[#35A6A8] text-[35px] font-baloo font-700">
                            Giặt Sấy Quần Áo
                        </h2>
                        <p className="text-[#22566e] text-[25px] font-baloo font-400 py-4">
                            Phù hợp với các loại quần áo có chất liệu vải thông
                            thường, chăn, mền.
                        </p>
                        {/* Button */}
                        <button
                            className="bg-[#f3908a] text-white text-[20px] py-2 px-6 rounded-full hover:bg-[#2b8c8c] transition duration-300 shadow-lg hover:shadow-xl"
                            onClick={() => navigate(routes.GiatSay)}
                        >
                            Xem chi tiết
                        </button>
                    </div>
                </div>

                {/* Second Item */}
                <div className="text-center">
                    <img
                        src={intro2}
                        alt="VỆ SINH GIÀY DÉP"
                        className="w-[514.58px] h-[359.22px] mx-auto"
                    />
                    <div className="py-10 w-[513px] mx-auto">
                        <h2 className="text-[#35A6A8] text-[35px] font-baloo font-700">
                            VỆ SINH GIÀY DÉP
                        </h2>
                        <p className="text-[#22566e] text-[25px] font-baloo font-400 py-4">
                            Giày của bạn trở nên sáng bóng và thơm tho, sẵn sàng
                            cho mọi chặng đường
                        </p>
                        {/* Button */}
                        <button
                            className="bg-[#f3908a] text-white text-[20px] py-2 px-6 rounded-full hover:bg-[#2b8c8c] transition duration-300 shadow-lg hover:shadow-xl"
                            onClick={() => navigate(routes.GiatSay)}
                        >
                            Xem chi tiết
                        </button>
                    </div>
                </div>

                {/* Third Item */}
                <div className="text-center">
                    <img
                        src={intro3}
                        alt="GIẶT SẤY KHĂN,RÈM"
                        className="w-[514.58px] h-[359.22px] mx-auto"
                    />
                    <div className="py-10 w-[513px] mx-auto">
                        <h2 className="text-[#35A6A8] text-[35px] font-baloo font-700">
                            GIẶT SẤY KHĂN, RÈM
                        </h2>
                        <p className="text-[#22566e] text-[25px] font-baloo font-400 py-4">
                            Giải pháp chuyên nghiệp để bảo quản và làm sạch
                            khăn, rèm của bạn.
                        </p>
                        {/* Button */}
                        <button
                            className="bg-[#f3908a] text-white text-[20px] py-2 px-6 rounded-full hover:bg-[#2b8c8c] transition duration-300 shadow-lg hover:shadow-xl"
                            onClick={() => navigate(routes.GiatSay)}
                        >
                            Xem chi tiết
                        </button>
                    </div>
                </div>

                {/* Fourth Item */}
                <div className="text-center">
                    <img
                        src={intro4}
                        alt="VỆ SINH GẤU BÔNG, TOPPER"
                        className="w-[514.58px] h-[359.22px] mx-auto"
                    />
                    <div className="py-10 w-[513px] mx-auto">
                        <h2 className="text-[#35A6A8] text-[35px] font-baloo font-700">
                            VỆ SINH GẤU BÔNG, TOPPER
                        </h2>
                        <p className="text-[#22566e] text-[25px] font-baloo font-400 py-4">
                            Dịch vụ mang lại sự tươi mới và an toàn cho gấu bông
                            - topper của bạn.
                        </p>
                        {/* Button */}
                        <button
                            className="bg-[#f3908a] text-white text-[20px] py-2 px-6 rounded-full hover:bg-[#2b8c8c] transition duration-300 shadow-lg hover:shadow-xl"
                            onClick={() => navigate(routes.GiatSay)}
                        >
                            Xem chi tiết
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
