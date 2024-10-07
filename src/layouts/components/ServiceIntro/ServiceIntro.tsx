interface ServiceIntroProps {
    imgUrl: string;
    title: string;
    description: string;
}

const ServiceIntro: React.FC<ServiceIntroProps> = ({
    imgUrl,
    title,
    description,
}) => {
    return (
        <div className="flex justify-evenly my-10">
            <div className="">
                <img
                    src={imgUrl}
                    alt="Service Intro"
                    className="w-[600px] h-[400px] object-contain  "
                />
            </div>
            <div className="flex-col w-[600px]">
                <h2 className="text-[#35A6A8] text-[50px] font-700 font-baloo mb-4">
                    {title}
                </h2>
                <p className="text-[#22566E] font-baloo font-400 text-[25px]">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ServiceIntro;
