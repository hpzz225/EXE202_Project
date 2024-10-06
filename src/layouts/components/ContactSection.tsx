import contacform from '../../assets/contactform.png';

const ContactSection = () => {
    return (
        <section className="relative py-16">
            <img src={contacform} alt="" className="  px-[158px] h-[500px]" />

            <form className="absolute top-[15%] right-[17%] flex flex-col gap-4">
                <p className="font-700 font-baloo text-[25px] text-[#FFFFFF] mt-4 ">
                    Hotline
                </p>
                <p className="text-[60px] font-baloo font-800 text-[#35A6A8]">
                    0123 456 789
                </p>
                <p className="text-white text-[20px] font-baloo">
                    Để lại sốt để được hỗ trợ nhanh nhất!
                </p>
                <div className="flex items-center gap-4">
                    <input
                        type="text"
                        placeholder="Họ và tên"
                        className="w-[300px]  p-4 text-black rounded-3xl focus:outline-none"
                    />
                    <input
                        type="text"
                        placeholder="Số điện thoại"
                        className="w-[300px]  p-4 text-black rounded-3xl focus:outline-none"
                    />
                </div>
                <input
                    type="text"
                    placeholder="Địa chỉ"
                    className="w-full  p-4 text-black rounded-3xl focus:outline-none"
                />
                <button className="bg-[#FA7B6E] w-[250px] text-white text-lg py-4 px-8 rounded-3xl hover:bg-[#f76153]">
                    Đặt lịch
                </button>
            </form>
        </section>
    );
};

export default ContactSection;
