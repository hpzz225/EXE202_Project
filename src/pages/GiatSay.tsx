import Banner from '@/layouts/components/Banner/Banner';

import ServiceIntro from '@/layouts/components/ServiceIntro/ServiceIntro';
import PriceList from '@/layouts/components/PriceList/PriceList';
import ServiceProcess from '@/layouts/components/ServiceProcess/ServiceProcess';
import ContactForm from '@/layouts/components/ContactForm/ContactForm';
import dichvugiatsay from '../assets/dichvugiatsay.png';
import giatsaylaylien1 from '../assets/giatsaylaylien1.png';
import price1 from '../assets/price1.png';
import price2 from '../assets/price2.png';
import price3 from '../assets/price3.png';
import price4 from '../assets/price4.png';
import price5 from '../assets/price5.png';
import price6 from '../assets/price6.png';
import step1 from '../assets/step1.png';
import step2 from '../assets/step2.png';
import step3 from '../assets/step3.png';
import step4 from '../assets/step4.png';
import iconMoon from '../assets/iconMoon.png';
import { FaStar } from 'react-icons/fa';
import FeeDelivery from '@/layouts/components/FeeDelivery/FeeDelivery';
const GiatSay = () => {
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

    const priceItems = [
        {
            img: price1,
            title: 'QUẦN ÁO',
            description:
                'Áo thun, thể thao, áo khoác, Quần Jean, Quần tây Nam - Nữ ...v..v..',
            price: '10k',
        },
        {
            img: price2,
            title: 'CHĂN, DRAP, MÙNG',
            description: 'Chăn, Mền, Gối',
            price: '20k',
        },
        {
            img: price3,
            title: 'GẤU BÔNG, TOPPER',
            description: (
                <>
                    <FaStar
                        className="inline-block text-[#22566E]  mr-2"
                        color="#FFB96D"
                    />
                    Trên 1kg: +10k phí dịch vụ
                </>
            ),

            price: '10k',
        },
        {
            img: price4,
            title: 'GIẶT KHĂN SPA',
            description: 'Nhận giặt khăn cho tiệm Spa, Khách sạn, Salon tóc',
            price: '10k',
        },
        {
            img: price5,
            title: 'GẤU BÔNG, TOPPER',
            description:
                'Nhận giặt tẩy trắng tất cả các loại khăn nhà hàng, khách sạn.',
            price: '15k',
        },
        {
            img: price6,
            title: 'GẤU BÔNG, TOPPER',
            description: (
                <>
                    <FaStar
                        className="inline-block text-[#22566E]  mr-2"
                        color="#FFB96D"
                    />
                    Nhận tháo lắp màn, rèm cửa: +20k phí dịch vụ
                </>
            ),
            price: '20k',
        },
    ];
    return (
        <>
            <Banner imageUrl={dichvugiatsay} title="Dịch Vụ Giặt Sấy" />
            <ServiceIntro
                imgUrl={giatsaylaylien1}
                title="Giật Sấy Lấy Liền!"
                description="Khi bạn có công việc bận rộn không còn thời gian giặt giũ, hoặc phòng trọ không có máy giặt, hãy giao đồ cho MOON và tiết kiệm thời gian đó cho gia đình hoặc bản thân mình. Hãy cho hết tất cả quần áo dơ của bạn vào trong túi, MOON sẽ giặt sạch sẽ, sấy khô thơm tho và gấp quần áo của bạn gọn gàng. Sẵn sàng để bạn cho vào tủ quần áo với giá cả cực kì hợp lý và cạnh tranh."
            />
            <div className="flex flex-col items-center justify-center space-y-4 py-16">
                <h1 className="uppercase font-baloo font-700 text-[#35A6A8] text-[50px] leading-[80.1px] text-center">
                    Bảng Giá
                </h1>
                <img
                    src={iconMoon}
                    alt="Moon Icon"
                    className="w-[37.50px] h-[39.36px]"
                />
                <section className=" grid grid-cols-3 gap-10 px-44 py-4">
                    {priceItems.map((item, index) => (
                        <PriceList
                            key={index}
                            img={item.img}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                        />
                    ))}
                </section>
            </div>
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

export default GiatSay;
