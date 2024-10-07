import React from 'react';

const ContactImage: React.FC = () => {
  return (
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/60561b8afdec87237d16a1fe408154015a647f258d76734d1076320acd526a4e?placeholderIfAbsent=true&apiKey=6a5f54a1ff4948049825ca6839455884" 
        alt="Contact illustration" 
        className="object-contain w-full aspect-square max-md:max-w-full" 
      />
    </div>
  );
};

export default ContactImage;