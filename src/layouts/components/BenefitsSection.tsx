import money from '../../assets/money.png';
import bike from '../../assets/bike.png';
import quality from '../../assets/quality.png';
import like from '../../assets/like.png';

const BenefitsSection = () => {
    return (
        <section className="bg-[#EAF6F6] py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-[#35A6A8] text-[40px] font-baloo font-700">
                    TẠI SAO NÊN CHỌN MOON?
                </h2>
                <div className="w-[60px] h-[3px] bg-[#35A6A8] mx-auto my-4"></div>

                {/* Benefits Cards */}
                <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8 mt-10">
                    {/* Card 1 */}
                    <div className="bg-white p-8 rounded-3xl shadow-md w-[300px] min-h-[350px] flex flex-col">
                        <div className="flex justify-center mb-4">
                            <img
                                src={money}
                                alt="Icon 1"
                                className="w-12 h-12"
                            />
                        </div>
                        <h3 className="text-[#35A6A8] text-[24px] font-baloo font-700">
                            CHI PHÍ HỢP LÝ
                        </h3>
                        <p className="text-[#22566e] text-[18px] font-baloo font-400 mt-4 flex-grow">
                            Tiệm giặt nhà MOON với chi phí hợp lý cho tất cả
                            khách hàng khi so sánh trên thị trường.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-8 rounded-3xl shadow-md w-[300px] min-h-[350px] flex flex-col">
                        <div className="flex justify-center mb-4">
                            <img
                                src={bike}
                                alt="Icon 2"
                                className="w-12 h-12"
                            />
                        </div>
                        <h3 className="text-[#35A6A8] text-[24px] font-baloo font-700">
                            GIAO HÀNG TẬN NƠI
                        </h3>
                        <p className="text-[#22566e] text-[18px] font-baloo font-400 mt-4 flex-grow">
                            Hỗ trợ giao nhận tận nhà từ 7h – 22h tất cả 7 ngày
                            trong tuần.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-8 rounded-3xl shadow-md w-[300px] min-h-[350px] flex flex-col">
                        <div className="flex justify-center mb-4">
                            <img
                                src={quality}
                                alt="Icon 3"
                                className="w-12 h-12"
                            />
                        </div>
                        <h3 className="text-[#35A6A8] text-[24px] font-baloo font-700">
                            CHẤT LƯỢNG
                        </h3>
                        <p className="text-[#22566e] text-[18px] font-baloo font-400 mt-4 flex-grow">
                            Đảm bảo chất lượng giặt sấy với máy móc hiện đại và
                            dịch vụ an toàn, hiệu quả cho quần áo.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white p-8 rounded-3xl shadow-md w-[300px] min-h-[350px] flex flex-col">
                        <div className="flex justify-center mb-4">
                            <img
                                src={like}
                                alt="Icon 4"
                                className="w-12 h-12"
                            />
                        </div>
                        <h3 className="text-[#35A6A8] text-[24px] font-baloo font-700">
                            UY TÍN-TỈ MỈ
                        </h3>
                        <p className="text-[#22566e] text-[18px] font-baloo font-400 mt-4 flex-grow">
                            Cam kết chăm sóc quần áo của bạn tốt nhất, đảm bảo
                            làm sạch đúng yêu cầu và giặt lại nếu bạn không hài
                            lòng.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
