// import styles from '../styles/index.module.css';
// import {AiOutlineArrowRight} from 'react-icons/ai';

// function WhatWeDo() {
//   return (
//     <div className={`${styles.WhatWeDoDesktop}  w-10/12   justify-between items-center mx-auto text-white`}>
//     <div className={`${styles.FirstPartDesktop} `}>
//     <p className={`${styles.AboutUsDesktop} `} >What We <span className={`${styles.YelloSpan}`}>Do</span></p>
//     <div className={`${styles.YellowLine}`}></div>
//     <p className='w-full md:w-10/12 py-8 text-[18px]'>We are passionate about empowering women with knowledge about Bitcoin and its transformative technology. We specialize in providing comprehensive educational resources, training programs, and support specifically tailored to women who want to understand and participate in the world of cryptocurrencies.</p>
//     <div className='flex  py-8'>
//       <button className={`${styles.ButtonsForDesktop}`}>Apply Now</button>
//     </div>
//     </div>
//     <div className={`${styles.AgainGRiParts}  flex flex-wrap place-content-center gap-4  md:gap-8`}>
//       <div className={`${styles.IndividualWhatWeDo1} text-center grid items-center`}>
//         <p className={`${styles.IndividualWhatWeDoTopic}`}>Online Courses</p>
//         <p className='text-[14px] px-2' >Our course is designed to help our students learn easily, with simple relevant and engaging content</p>
//         <p className='flex font-semibold items-center w-full place-content-center gap-2'>READ MORE <AiOutlineArrowRight /> </p>
//       </div>
//       <div className={`${styles.IndividualWhatWeDo1} text-center grid items-center`}>
//       <p className={`${styles.IndividualWhatWeDoTopic}`}>Bitcoin MeetUps</p>
//         <p className='text-[14px] px-2'>We organize In person Bitcoin meet ups, giving our students the opportunity to expand their knowledge, interact with already existing bitcoinners and learn about new developments.</p>
//         <p className='flex font-semibold items-center w-full place-content-center gap-2'>READ MORE <AiOutlineArrowRight /> </p>
//       </div>
//       <div className={`${styles.IndividualWhatWeDo1} text-center grid items-center`}>
//       <p className={`${styles.IndividualWhatWeDoTopic}`}>Career Days</p>
//         <p className='text-[14px] px-2'>Key opinion leaders in the industry get to share information about their workplace, their job, and the education and skills that are required for success in their career.</p>
//         <p className='flex font-semibold items-center w-full place-content-center gap-2'>READ MORE <AiOutlineArrowRight /> </p>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default WhatWeDo


import styles from '../styles/index.module.css';

function WhatWeDo() {

  const applicationFormUrl = "https://app.deform.cc/form/0db19494-d668-4c26-87bb-4f9e5e387450/"; // Replace with your actual URL

  return (
    <div className={`${styles.WhatWeDoDesktop}  w-10/12 justify-between items-center mx-auto text-white`}>
      <div className={`${styles.FirstPartDesktop}`}>
        <p className={`${styles.AboutUsDesktop}`}>What We <span className={`${styles.YelloSpan}`}>Do</span></p>
        <div className={`${styles.YellowLine}`}></div>
        <p className='w-full md:w-10/12 py-8 text-[18px]'>At Ledger Lady, we empower women with comprehensive knowledge in the broader blockchain ecosystem. Our commitment goes beyond Bitcoin to include various aspects of blockchain technology. We offer educational resources, training programs, and support tailored for women, fostering their growth in blockchain and cryptocurrency.</p>
        <div className='flex py-8'>
          {/* <button className={`${styles.ButtonsForDesktop}`}>Apply Now</button> */}
          <a href={applicationFormUrl} target="_blank" rel="noopener noreferrer">
            <button className={`${styles.ButtonsForDesktop}`}>Apply Now</button>
          </a>
        </div>
      </div>
      <div className={`${styles.AgainGRiParts} flex flex-wrap place-content-center gap-4 md:gap-8`}>
        <div className={`${styles.IndividualWhatWeDo1} text-center grid items-center`}>
          <p className={`${styles.IndividualWhatWeDoTopic}`}>Online Courses</p>
          <p className='text-[14px] px-2'>Explore a range of courses covering blockchain technology, crypto trading, smart contracts, and more, designed to make learning engaging and accessible.</p>
          {/* <p className='flex font-semibold items-center w-full place-content-center gap-2'>READ MORE <AiOutlineArrowRight /> </p> */}
        </div>
        <div className={`${styles.IndividualWhatWeDo1} text-center grid items-center`}>
          <p className={`${styles.IndividualWhatWeDoTopic}`}>Blockchain MeetUps</p>
          <p className='text-[14px] px-2'>Join our in-person meetups to learn about the latest in blockchain, network with industry leaders, and share experiences with fellow enthusiasts.</p>
          {/* <p className='flex font-semibold items-center w-full place-content-center gap-2'>READ MORE <AiOutlineArrowRight /> </p> */}
        </div>
        <div className={`${styles.IndividualWhatWeDo1} text-center grid items-center`}>
          <p className={`${styles.IndividualWhatWeDoTopic}`}>Product Days</p>
          <p className='text-[14px] px-2'>Dedicated sessions to help aspiring entrepreneurs create successful blockchain-based products. A focus on women-led startups to drive innovation in the industry.</p>
          {/* <p className='flex font-semibold items-center w-full place-content-center gap-2'>READ MORE <AiOutlineArrowRight /> </p> */}
        </div>
        <div className={`${styles.IndividualWhatWeDo1} text-center grid items-center`}>
          <p className={`${styles.IndividualWhatWeDoTopic}`}>Career Days</p>
          <p className='text-[14px] px-2'>Interact with key opinion leaders in the blockchain industry to learn about career opportunities and the skills needed for success.</p>
          {/* <p className='flex font-semibold items-center w-full place-content-center gap-2'>READ MORE <AiOutlineArrowRight /> </p> */}
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo
