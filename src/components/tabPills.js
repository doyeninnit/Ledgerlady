// import { useState } from 'react';
// import styles from '../styles/tab.module.css';
// import stylesz from '../styles/index.module.css';


// function TabComponent() {
// const [active,setActive] = useState();

// return(
// <>
// <div className={`${styles.DesktopDesign}`}>
// <div className={`${styles.TabComponent} grid items-center w-10/12 py-12`}>
// <p className={`${stylesz.AboutUsDesktop} text-white w-full place-content-start`}  >What Students Say About Us</p>
// <div className={`${stylesz.YellowLine}`}></div>
// <div className='flex items-center'>
// <div className='w-1/2 flex place-content-center'>
// <div className={`${styles.PersonDiv}`}>
//     <img src='/images/person1.png' className={`${styles.PersonDivImg} w-full h-full`} />
//     <div className={`${styles.PersonDEtails}`}>
//         <p className='text-[#00D7FF] font-medium'>Kalondu Muthemba</p>
//         <p className='text-white font-normal'>BDD student</p>
//     </div>
// </div>
// </div>

// <div className='w-1/2'>
//     <div className={`${styles.KalonduDiv}`}>
//         <div className='flex'> <div className={`${styles.YellowCIrcle}`}></div><p className='px-12 text-[#00D7FF] font-semibold'>Kalondu Muthemba</p></div>
//         <p className='flex flex-wrap text-[18px] text-white py-8 px-4 md:px-8 w-11/12'>As a person who works with women from the slums my mantra is to empower a woman you empower a community. Bitcoin is a source of income for us. Financial security is crucial to every woman, for in Bitcoin we take back our power.</p>
//     </div>
//     <div className={`${styles.KalonduDiv}`}>
//         <div className='flex'> <div className={`${styles.YellowCIrcle}`}></div><p className='px-12 text-[#00D7FF] font-semibold'>BeatriceWanjiru</p></div>
//         <p className='flex flex-wrap text-[18px] text-white py-8 md:px-8 px-4 w-11/12'>African women are underrepresented in tech and finance spaces. Today Bitcoin promises global revolution, it gives hope for financial freedom especially to women in countries where financial systems are too corrupt to be trusted. With the education at Bitcoin Dada we can broaden our sources of income giving us financial freedom.</p>
//     </div>
//     <div className={`${styles.KalonduDiv}`}>
//         <div className='flex'> <div className={`${styles.YellowCIrcle}`}></div><p className='px-12 text-[#00D7FF] font-semibold'>Lucy Manzi</p></div>
//         <p className='flex flex-wrap text-[18px] text-white py-8 md:px-8 px-4 w-11/12'> The African woman has been demeaned for as long as we can retrace our history. Financial literacy was not championed for us. And as with every passing revolution Africa has been left behind. Bitcoin however levels the playfield across the globe. Bitcoin education for women opens vast opportunities ranging from careers to financial liberation. Bitcoin Dada sets an entry point for us to participate in the ecosystem without fear or doubts. </p>
//     </div>

// </div>
// </div>

// </div>
// </div>

// {/* MObile */}
// <div className={`${styles.MobileDesign}`}>
// <div className={`${styles.TabComponent} grid items-center w-10/12 py-12 mx-auto`}>
// <p className={`${stylesz.AboutUsDesktop} text-white w-full place-content-start `}  >What Students Say About Us</p>
// <div className={`${stylesz.YellowLine}`}></div>
// <div className='grid items-center pt-8'>

// <div className='w-full'>
//     <div className={`${styles.KalonduDiv}`}>
//         <div className='flex items-center'> <div className={`${styles.YellowCIrcle}`}></div>
//         <img  src='/images/person1.png' className={`${styles.ImagePersonMobile} ml-6`}/>
//         <p className='px-12 text-[#FFAF00] font-semibold'>Kalondu Muthemba</p>
//         </div>
//         <p className='flex flex-wrap text-[16px] text-white py-8 px-4 w-full'>As a person who works with women from the slums my mantra is to empower a woman you empower a community. Bitcoin is a source of income for us. Financial security is crucial to every woman, for in Bitcoin we take back our power.</p>
//     </div>
//     <div className={`${styles.KalonduDiv}`}>
//         <div className='flex items-center'> <div className={`${styles.YellowCIrcle}`}></div>
//         <img  src='/images/person1.png' className={`${styles.ImagePersonMobile} ml-6`}/>
//         <p className='px-12 text-[#FFAF00] font-semibold'>BeatriceWanjiru</p>
//         </div>
//         <p className='flex flex-wrap text-[16px] text-white py-8 px-4 w-full'>African women are underrepresented in tech and finance spaces. Today Bitcoin promises global revolution, it gives hope for financial freedom especially to women in countries where financial systems are too corrupt to be trusted. With the education at Bitcoin Dada we can broaden our sources of income giving us financial freedom.</p>
//     </div>
//     <div className={`${styles.KalonduDiv}`}>
//         <div className='flex items-center'> <div className={`${styles.YellowCIrcle}`}></div>
//         <img  src='/images/person1.png' className={`${styles.ImagePersonMobile} ml-6`}/>
//         <p className='px-12 text-[#FFAF00] font-semibold'>Lucy Manzi</p>
//         </div>
//         <p className='flex flex-wrap text-[16px] text-white py-8 px-4 w-full'> The African woman has been demeaned for as long as we can retrace our history. Financial literacy was not championed for us. And as with every passing revolution Africa has been left behind. Bitcoin however levels the playfield across the globe. Bitcoin education for women opens vast opportunities ranging from careers to financial liberation. Bitcoin Dada sets an entry point for us to participate in the ecosystem without fear or doubts. </p>
//     </div>

// </div>
// </div>

// </div>
// </div>
// </>
//   )
// }

// export default TabComponent;




import { useState, useEffect } from 'react';
import styles from '../styles/tab.module.css';
import stylesz from '../styles/index.module.css';

function TabComponent() {
  // const testimonials = [
  //   {
  //     name: 'Kalondu Muthemba',
  //     text: 'As a person who works with women from the slums my mantra is to empower a woman you empower a community. Bitcoin is a source of income for us. Financial security is crucial to every woman, for in Bitcoin we take back our power.',
  //     image: '/images/person1.png',
  //   },
  //   {
  //     name: 'Beatrice Wanjiru',
  //     text: 'African women are underrepresented in tech and finance spaces. Today Bitcoin promises global revolution, it gives hope for financial freedom especially to women in countries where financial systems are too corrupt to be trusted. With the education at Bitcoin Dada we can broaden our sources of income giving us financial freedom.',
  //     image: '/images/person1.png', // Assuming you have different images for each person
  //   },
  //   {
  //     name: 'Lucy Manzi',
  //     text: 'The African woman has been demeaned for as long as we can retrace our history. Financial literacy was not championed for us. And as with every passing revolution Africa has been left behind. Bitcoin however levels the playfield across the globe. Bitcoin education for women opens vast opportunities ranging from careers to financial liberation. Bitcoin Dada sets an entry point for us to participate in the ecosystem without fear or doubts.',
  //     image: '/images/person1.png',
  //   },
  // ];

  const testimonials = [
    {
      name: 'Kalondu Muthemba',
      text: 'Working to uplift women from marginalized communities, I have found blockchain to be a transformative tool. Beyond just Bitcoin, the wider blockchain ecosystem offers unparalleled financial security and empowerment. For us, diving into blockchain technology is reclaiming our power, ensuring financial independence and making a stand in a global movement towards equitable financial access.',
      // image: '/images/person1.png',
    },
    {
      name: 'Beatrice Wanjiru',
      text: 'African women face systemic barriers in tech and finance, yet the rise of blockchain technology spells a new era of hope. It is not just about Bitcoin; it is about the entire spectrum of decentralized finance (DeFi) that offers financial freedom in systems otherwise marred by corruption and inefficiency. Through education and engagement in blockchain, we are not just broadening our income sources—we are pioneering financial sovereignty.',
      // image: '/images/person2.png',
    },
    {
      name: 'Lucy Manzi',
      text: 'The narrative of the African woman has been one of resilience against systemic exclusion, particularly in financial literacy and opportunities. Blockchain technology, with Bitcoin as its spearhead, is democratizing financial access on a global scale. Embracing blockchain education paves the way for not only financial liberation but also for entering careers in a burgeoning industry.',
      // image: '/images/person3.png',
    },
  ];
  

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <>
      {/* Desktop Design */}
      <div className={`${styles.DesktopDesign}`}>
        <div className={`${styles.TabComponent} grid items-center w-10/12 py-12`}>
          <p className={`${stylesz.AboutUsDesktop} text-white w-full place-content-start`}>What Students Say About Us</p>
          <div className={`${stylesz.YellowLine}`}></div>
          <div className='flex items-center'>
            <div className='w-1/2 flex place-content-center'>
              <div className={`${styles.PersonDiv}`}>
                {/* <img src={activeTestimonial.image} className={`${styles.PersonDivImg} w-full h-full`} /> */}
                 <div className={`${styles.PersonDEtails}`}> 
                  {/* <p className='text-[#00D7FF] font-medium'>{activeTestimonial.name}</p>
                  <p className='text-white font-normal'>BDD student</p>  */}
                </div>
              </div>
            </div>

            <div className='w-1/2'>
              <div className={`${styles.KalonduDiv}`}>
                <div className='flex'> <div className={`${styles.YellowCIrcle}`}></div><p className='px-12 text-[#00D7FF] font-semibold'>{activeTestimonial.name}</p></div>
                <p className='flex flex-wrap text-[18px] text-white py-8 px-4 md:px-8 w-11/12'>{activeTestimonial.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Design */}
      {/* ... Mobile Design goes here ... */}
      <div className={`${styles.MobileDesign}`}>
<div className={`${styles.TabComponent} grid items-center w-10/12 py-12 mx-auto`}>
<p className={`${stylesz.AboutUsDesktop} text-white w-full place-content-start `}  >What Students Say About Us</p>
<div className={`${stylesz.YellowLine}`}></div>
<div className='grid items-center pt-8'>

<div className='w-full'>
    <div className={`${styles.KalonduDiv}`}>
        <div className='flex items-center'> <div className={`${styles.YellowCIrcle}`}></div>
        <img  src='/images/person1.png' className={`${styles.ImagePersonMobile} ml-6`}/>
        <p className='px-12 text-[#FFAF00] font-semibold'>Kalondu Muthemba</p>
        </div>
        <p className='flex flex-wrap text-[16px] text-white py-8 px-4 w-full'>As a person who works with women from the slums my mantra is to empower a woman you empower a community. Bitcoin is a source of income for us. Financial security is crucial to every woman, for in Bitcoin we take back our power.</p>
    </div>
    <div className={`${styles.KalonduDiv}`}>
        <div className='flex items-center'> <div className={`${styles.YellowCIrcle}`}></div>
        <img  src='/images/person1.png' className={`${styles.ImagePersonMobile} ml-6`}/>
        <p className='px-12 text-[#FFAF00] font-semibold'>BeatriceWanjiru</p>
        </div>
        <p className='flex flex-wrap text-[16px] text-white py-8 px-4 w-full'>African women are underrepresented in tech and finance spaces. Today Bitcoin promises global revolution, it gives hope for financial freedom especially to women in countries where financial systems are too corrupt to be trusted. With the education at Bitcoin Dada we can broaden our sources of income giving us financial freedom.</p>
    </div>
    <div className={`${styles.KalonduDiv}`}>
        <div className='flex items-center'> <div className={`${styles.YellowCIrcle}`}></div>
        <img  src='/images/person1.png' className={`${styles.ImagePersonMobile} ml-6`}/>
        <p className='px-12 text-[#FFAF00] font-semibold'>Lucy Manzi</p>
        </div>
        <p className='flex flex-wrap text-[16px] text-white py-8 px-4 w-full'> The African woman has been demeaned for as long as we can retrace our history. Financial literacy was not championed for us. And as with every passing revolution Africa has been left behind. Bitcoin however levels the playfield across the globe. Bitcoin education for women opens vast opportunities ranging from careers to financial liberation. Bitcoin Dada sets an entry point for us to participate in the ecosystem without fear or doubts. </p>
    </div>

</div>
</div>

</div>
</div>
    </>
  )
}

export default TabComponent;
