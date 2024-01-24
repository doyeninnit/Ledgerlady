// import styles from '../styles/index.module.css'

// function Subscribe() {
//   return (
//     <div className={`${styles.Subscribe} w-screen grid text-white place-content-center mt-12 ` }>
//     <div className='grid place-content-center w-full'>
//       <p className={`${styles.AboutUsDesktop} flex place-content-center py-8 `}>Subscribe to the latest Update</p>
//       <div className={`${styles.InboxMiniDivDesktop} flex justify-between items-center py-4`}>
//         <input type='text' className={`${styles.SubscribeInputField}`} />
//         <input type='submit' value='Subscribe' className={`${styles.ButtonsForDesktop}`}/>
//       </div>
//     </div>
    
//     </div>
//   )
// }

// export default Subscribe


import styles from '../styles/index.module.css'

function Subscribe() {
  return (
    <div className={`${styles.Subscribe} w-screen grid place-content-center mt-12`}>
      <div className='grid place-content-center w-full'>
        <p className={`${styles.AboutUsDesktop} text-white w-full text-center py-8`}>Subscribe to the Latest Updates</p>
        <div className={`${styles.YellowLine} self-center`}></div>
        <div className='flex justify-center items-center py-4 mt-4'>
          <input 
            type='text' 
            placeholder='Enter your email' 
            className={`${styles.SubscribeInputField} mr-4 p-3 rounded-lg`} 
            style={{ border: '1px solid #00D7FF', backgroundColor: '#202020', color: 'white' }}
          />
          <input 
            type='submit' 
            value='Subscribe' 
            className={`${styles.ButtonsForDesktop} cursor-pointer p-3 rounded-lg`}
            style={{ backgroundColor: '#00D7FF', border: 'none' }}
          />
        </div>
      </div>
    </div>
  )
}

export default Subscribe;
