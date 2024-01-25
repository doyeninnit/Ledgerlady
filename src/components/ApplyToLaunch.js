// import styles from '../styles/index.module.css'

// function ApplyToLaunch() {
//   return (
//     <div className={`${styles.ApplyToLaunch} flex mx-auto  `}>
// <div className='grid items-center'>
// <p className={`${styles.AboutUsDesktop}  w-3/5 md:w-3/4 px-6 flex flex-wrap `}>Apply to Join.</p>
// <div className=' px-6'>
//   <button className={`${styles.ButtonsForDesktop}`}>Apply Now</button>
// </div>
// </div>
// <div className={`${styles.calendarDesktopDiv}`}>
//   <img src='/images/calendar.png' className='w-full h-full' />
// </div>
// </div>
//   )
// }

// export default ApplyToLaunch;

import styles from '../styles/index.module.css'

function ApplyToLaunch() {
  // URL of the application form
  const applicationFormUrl = "https://app.deform.cc/form/0db19494-d668-4c26-87bb-4f9e5e387450/"; // Replace with your actual URL

  return (
    <div className={`${styles.ApplyToLaunch} flex mx-auto`}>
      <div className='grid items-center'>
        <p className={`${styles.AboutUsDesktop} w-3/5 md:w-3/4 px-6 flex flex-wrap`}>Apply to Join.</p>
        <div className='px-6'>
          <a href={applicationFormUrl} target="_blank" rel="noopener noreferrer">
            <button className={`${styles.ButtonsForDesktop}`}>Apply Now</button>
          </a>
        </div>
      </div>
      <div className={`${styles.calendarDesktopDiv}`}>
        <img src='/images/calendar.png' className='w-full h-full' alt="Calendar" />
      </div>
    </div>
  )
}

export default ApplyToLaunch;
