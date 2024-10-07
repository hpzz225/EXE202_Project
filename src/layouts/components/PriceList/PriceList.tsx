interface PriceListProps {
    img: string;
    title: string;
    description: React.ReactNode;
    price: string;
}

const PriceList: React.FC<PriceListProps> = ({
    img,
    title,
    description,
    price,
}) => {
    return (
        <div className="text-center">
            <img
                src={img}
                alt={title}
                className="w-[500px] h-[450px] mx-auto"
            />

            <div className="w-full h-[669px] bg-[#f4f9fc] rounded-[50px] p-8 shadow flex flex-col justify-between items-center">
                <h2 className="text-[#35A6A8] text-[40px] font-baloo font-700 uppercase">
                    {title}
                </h2>
                <p className="text-[#22566e] text-[25px] font-baloo font-400 text-center">
                    {description}
                </p>
                <p className="font-baloo font-extrabold text-[100px] text-[#22566E]">
                    {price}/kg
                </p>
                <button
                    className="bg-[#f3908a] text-white text-[20px] py-2 px-6 rounded-full hover:bg-[#2b8c8c] transition duration-300 shadow-lg hover:shadow-xl"
                    onClick={() => {}}
                >
                    Đặt dịch vụ
                </button>
                {/* Chú thích thêm */}
                <p className="text-[#22566e] text-[16px] mt-4">
                    *Số Kg được cân sau khi đồ đã được giặt và sấy khô.*
                    <br />
                    Giặt sấy nhanh trong ngày : +10% phí dịch vụ
                </p>
            </div>
        </div>
    );
};

export default PriceList;
