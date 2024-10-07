interface BannerProps {
    imageUrl: string;
    title: string;
}

const Banner: React.FC<BannerProps> = ({ imageUrl, title }) => {
    return (
        <div className="relative">
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-[600px] object-contain"
            />
            {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <h1 className="text-white text-3xl font-bold">{title}</h1>
            </div> */}
        </div>
    );
};

export default Banner;
