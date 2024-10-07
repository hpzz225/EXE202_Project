import shipper from '../../../assets/shipper.png';
import bgship from '../../../assets/bg-ship.png';
import { FaStar } from 'react-icons/fa';

const FeeDelivery = () => {
    return (
        <div className="relative flex px-44 items-center">
            <img src={shipper} alt="Shipper" className="w-1/2 h-[600px] z-10" />

            <div className="relative w-1/2 h-[500px] z-0">
                <img
                    src={bgship}
                    alt="BG Ship"
                    className="absolute inset-0 w-full h-full "
                />

                <div className="absolute inset-0 flex flex-col justify-center items-center z-10 ">
                    <h2 className="font-baloo font-700 text-[50px] text-[#158284]">
                        PHÍ SHIP
                    </h2>
                    <p className="font-baloo font-400 text-[25px] text-left">
                        Giao nhận 2 chiều (tận nhà) <br />
                        Từ 7h-22h mỗi ngày, 7 ngày/tuần
                    </p>
                    <div className="flex mt-4">
                        <p className="font-baloo font-700 text-[25px] text-[#22566E] mr-8">
                            Ship 2 chiều
                        </p>
                        <ul className="font-baloo font-500 text-[25px] text-[#22566E]">
                            <li>
                                <FaStar
                                    className="inline-block text-[#22566E] mr-2"
                                    color="#FFB96D"
                                />
                                Dưới 5km: <strong>10k</strong>
                            </li>
                            <li>
                                <FaStar
                                    className="inline-block text-[#22566E] mr-2"
                                    color="#FFB96D"
                                />
                                Trên 5km: <strong>20k</strong>
                            </li>
                            <li className="font-semibold">
                                <FaStar
                                    className="inline-block text-[#22566E] mr-2"
                                    color="#FFB96D"
                                />
                                Free ship cho đơn trên 50k
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    );
};

export default FeeDelivery;
