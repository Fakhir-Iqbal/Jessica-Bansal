// import React from 'react'

// function Card({ headText, centerText, linkText_1, linkFor_1, linkText_2, linkFor_2, row, image }) {

//     return (
//         <div className={`grid grid-cols-1 md:grid-cols-2 gap-2 md:px-20 md:py-10 ${row && "bg-[#EBECED]"}`}>
//             <div className={`px-4 flex flex-col justify-center ${row ? "order-first md:order-last" : ""}`}>
//                 <h1 className='text-2xl md:text-3xl font-semibold'>{headText}</h1>
//                 <p className='text-sm lg:mt-6 leading-6 md:text-justify'>{centerText}</p>
//                 <div className='md:mt-6'>
//                     <p className='text-base md:text-lg uppercase'><a className='underline' href={linkText_1}>Click to View</a> {linkFor_1}</p>
//                     <p className='text-base md:text-lg uppercase mt-4'><a className='underline' href={linkText_2}>Click to View</a> {linkFor_2}</p>
//                 </div>
//             </div>
//             <div className='h-[56vh] overflow-hidden'>
//                 <img src={image} className='object-cover h-full w-full' alt='Illustration' />
//             </div>
//         </div>

//     )
// }

// export default Card