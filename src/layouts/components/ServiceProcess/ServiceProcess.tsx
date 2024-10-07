// ServiceProcess.tsx
import React from 'react';

interface ServiceProcessProps {
    img: string;
    title: string;
    description: React.ReactNode;
}

const ServiceProcess: React.FC<ServiceProcessProps> = ({
    img,
    title,
    description,
}) => {
    return (
        <div className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-lg space-y-4">
            <img src={img} alt={title} className="mx-auto mb-4 w-24 h-24" />
            <h3 className="font-baloo font-700 text-[24px] text-[#35A6A8]">
                {title}
            </h3>
            <p className="font-baloo text-[16px] text-[#22566e]">
                {description}
            </p>
        </div>
    );
};

export default ServiceProcess;
