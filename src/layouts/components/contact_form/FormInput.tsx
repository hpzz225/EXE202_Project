// import React from 'react';

// interface FormInputProps {
//   label: string;
//   isTextArea?: boolean;
// }

// const FormInput: React.FC<FormInputProps> = ({ label, isTextArea = false }) => {
//   const inputId = label.toLowerCase().replace(/\s+/g, '-');

//   return (
//     <div className={`flex flex-col ${isTextArea ? 'w-full' : 'w-6/12'} max-md:ml-0 max-md:w-full`}>
//       <div className="flex flex-col grow text-2xl font-semibold text-cyan-700 max-md:mt-7">
//         <label htmlFor={inputId} className="self-start ml-3 max-md:ml-2.5">
//           {label}
//         </label>
//         {isTextArea ? (
//           <textarea
//             id={inputId}
//             className="flex shrink-0 mt-4 bg-white rounded-3xl h-[159px] max-md:max-w-full"
//             aria-label={label}
//           />
//         ) : (
//           <input
//             type="text"
//             id={inputId}
//             className="flex shrink-0 mt-4 bg-white rounded-3xl h-[61px]"
//             aria-label={label}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default FormInput;