import Banner from '@/layouts/components/Banner/Banner';
import ServiceIntro from '@/layouts/components/ServiceIntro/ServiceIntro';
import vesinhgiaydep from '../assets/vesinhgiaydep.png';
import vesinhgiaydepbanner from '../assets/vesinhgiaydepbanner.png';
import iconMoon from '../assets/iconMoon.png';
import FeeDelivery from '@/layouts/components/FeeDelivery/FeeDelivery';
import ContactForm from '@/layouts/components/ContactForm/ContactForm';
import PriceList from '@/layouts/components/PriceList/PriceList';
import giay from '../assets/giay.png';
import step1 from '../assets/step1.png';
import step2 from '../assets/step2.png';
import step3 from '../assets/step3.png';
import step4 from '../assets/step4.png';
import ServiceProcess from '@/layouts/components/ServiceProcess/ServiceProcess';
const Giay = () => {
    const processSteps = [
        {
            img: step1,
            title: 'Bước 1',
            description: (
                <>
                    <p className="mb-4">
                        Bạn đặt dịch vụ thông qua website, fanpage hoặc hotline.
                    </p>
                    <p>
                        MOON liên hệ nhận đồ của bạn vào thời gian và địa điểm
                        thuận tiện nhất cho bạn.
                    </p>
                </>
            ),
        },
        {
            img: step2,
            title: 'Bước 2',
            description:
                '  Hãy báo với MOON yêu cầu riêng của bạn, nếu bạn có nhu cầu giặt riêng đồ trắng hoặc không xài nước xả.',
        },
        {
            img: step3,
            title: 'Bước 3',
            description: (
                <>
                    <p className="mb-4">
                        Đồ của bạn sẽ được giặt sạch – sấy khô – gấp gọn gàng và
                        đóng gói sạch sẽ.
                    </p>
                    <p>
                        MOON giặt RIÊNG cho từng khách hàng, đảm bảo đồ của bạn
                        luôn an toàn và sạch sẽ.
                    </p>
                </>
            ),
        },
        {
            img: step4,
            title: 'Bước 4',
            description:
                'Sau 24h MOON sẽ liên hệ bạn để giao hàng tận nơi và theo thời gian bạn mong muốn.',
        },
    ];

    return (
        <>
            <Banner imageUrl={vesinhgiaydepbanner} title="Dịch Vụ Giặt Sấy" />
            <ServiceIntro
                imgUrl={vesinhgiaydep}
                title="VỆ SINH GIÀY DÉP"
                description="Dịch vụ vệ sinh giày, dép dù bằng tay nhưng vẫn đảm bảo được mức độ sạch sẽ cần thiết với mức chi phí hợp lý, đồng thời kéo dài tuổi thọ cho giày, giúp chúng luôn trong tình trạng tốt nhất để đồng hành trong các hoạt động hàng ngày."
            />
            <div className="flex flex-col items-center space-y-4 py-16">
                <h1 className="uppercase font-baloo font-700 text-[#35A6A8] text-[50px] leading-[80.1px] text-center">
                    Bảng Giá
                </h1>
                <img
                    src={iconMoon}
                    alt="Moon Icon"
                    className="w-[37.50px] h-[39.36px]"
                />
            </div>
            <section className="flex items-center my-10 ">
                <div className="relative w:1/2">
                    <img src={giay} alt="Shoe" className="w-full h-auto" />
                </div>
                <div className="text-left font-baloo w:1/2">
                    <h2 className="text-[40px] font-bold text-[#158284]">
                        Giày Thể Thao
                    </h2>
                    <p className="text-[80px] font-bold text-[#22566E] mt-4">
                        35K/Đôi
                    </p>
                    <p className="text-[40px] font-baloo font-bold text-[#EE887A] mt-2">
                        🔥 Combo Vệ Sinh Giày Siêu Tiết Kiệm
                    </p>
                    <ul className="mt-4 space-y-2 text-[#22566E] font-medium text-[25px]">
                        <li>⭐ Vệ sinh 2 đôi chỉ với 65K</li>
                        <li>⭐ Vệ sinh 3 đôi chỉ với 95K</li>
                        <li>⭐ Vệ sinh 4 đôi chỉ với 120K</li>
                        <li>⭐ Vệ sinh 5 đôi chỉ với 150K</li>
                    </ul>
                    <button className="mt-8 bg-[#f3908a] w-[203px] h-[75px]  text-white text-[25px] font-extrabold  py-2 px-4 rounded-2xl hover:bg-red-600">
                        Đặt dịch vụ
                    </button>
                </div>
            </section>
            <div className="flex flex-col items-center justify-center space-y-4 py-16">
                <h1 className="uppercase font-baloo font-700 text-[#35A6A8] text-[50px] leading-[80.1px] text-center">
                    QUY TRÌNH DỊCH VỤ
                </h1>
                <img
                    src={iconMoon}
                    alt="Moon Icon"
                    className="w-[37.50px] h-[39.36px]"
                />
                <section className=" grid grid-cols-4 gap-10 px-44 py-4 gap-8">
                    {processSteps.map((item, index) => (
                        <ServiceProcess
                            key={index}
                            img={item.img}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </section>
            </div>
            <FeeDelivery />
            <ContactForm />
        </>
    );
};

export default Giay;
