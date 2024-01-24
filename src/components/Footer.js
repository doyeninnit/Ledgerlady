// import styles from '../styles/footer.module.css'
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import Link from 'next/link';

// function Footer() {
//   return (
//    <>
//    <div className={`${styles.FooterLine} mt-12`}></div>
//     <div className='w-screen grid place-content-center '>
//     <Grid container spacing={2} alignItems="center"   >
//     <Grid item xs={12} sm={6} lg={3}>
//        <div  className={`${styles.GridFooterDesktop}  className='grid  place-content-center md:place-content-start  text-center`}>
//         <img src="images/ladylogo.png"/>
//         <p className='px-4 md:px-8 text' style={{ color: 'white' }}>The next generation of the financial ecosystem is being built and we as women cant afford to delay learning about the Bitcoin ecosystem. And as Bitcoin Dada our main goal is to empower the African woman through education on this new and excellent future scope. Thereby accelerating bitcoin adoption across the continent.</p>
//        </div>
//       </Grid>
//       <Grid item xs={12} sm={6} lg={3}>
//        <div  className={`${styles.GridFooterDesktop}  className='grid  place-content-center md:place-content-start text-center `}>
//         <p className={`${styles.MainWords} py-4`} >What We Offer</p>
//         <div className=' w--full sm:w-1/2 md:w-[max-content] md:text-start mx-auto' style={{ color: 'white' }}>
//         <p>Online -Courses</p>
//         <p >Meet Ups</p>
//         <p>Product Days</p>
//         <p>Career Days</p>
//         </div>
//        </div>
//       </Grid>
//       <Grid item xs={12} sm={6} lg={3}>
//       <div className={`${styles.GridFooterDesktop}  className='grid  place-content-center md:place-content-start  text-center`}>
//       <div className=' w--full sm:w-1/2 md:w-[max-content] md:text-start mx-auto'>
//         <p className={`${styles.MainWords} py-4`}>Ouick Links</p>
//        <Link href='/' style={{ color: 'white' }}> <p>Home</p></Link> 
//         <Link href='/learnBitcoin' style={{ color: 'white' }}><p>Learn Bitcoin</p></Link> 
//         <Link href='/news'style={{ color: 'white' }}><p>News & Press</p></Link> 
//         <Link href='/contact'style={{ color: 'white' }}> <p>Contact</p></Link> 
//         <Link href='https://donation.btcdada.com/'style={{ color: 'white' }}> <p>Donate</p></Link> 
//         </div>
//        </div>
//       </Grid>
//       <Grid item xs={12} sm={6} lg={3}>
//       <div   className={`${styles.GridFooterDesktop}  className='grid  place-content-center md:place-content-start  text-center `}>
//       <div className=' w--full sm:w-1/2 md:w-[max-content] md:text-start mx-auto'>
//         <p className={`${styles.MainWords} py-4`} >Contacts</p>
//         <p style={{ color: 'white' }}>+254 700 225 704</p>
//         <p style={{ color: 'white' }}>bitcoindada@protonmail.com</p>
//         </div>
//        </div>
//       </Grid>
//     </Grid>
//   </div>
//   <div className='py-4 md:py-8'>

//   </div>
//   </>
//   )
// }

// export default Footer



import Grid from '@mui/material/Grid';
import Link from 'next/link';

function Footer() {
  return (
    <>
      <div style={{ backgroundColor: '#00D7FF', height: '1px', width: '100%', marginTop: '12px' }}></div>
      <div className='w-screen grid place-content-center' style={{ color: 'white', padding: '20px 0' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6} lg={3}>
            <div className='grid place-content-center md:place-content-start text-center'>
              <img src="images/ladylogo.png" alt="Logo" style={{ marginBottom: '10px' }}/>
              <p style={{ textAlign: 'justify', padding: '0 10px' }}>The next generation of the financial ecosystem is being built and we as women can't afford to delay learning about blockchain. Our main goal is to empower the African woman through education, thereby accelerating blockchain adoption across the continent.</p>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <div className='grid place-content-center md:place-content-start text-center'>
              <p style={{ color: '#00D7FF', fontSize: '24px', marginBottom: '10px' }}>What We Offer</p>
              <ul style={{ listStyleType: 'circle', textAlign: 'left', paddingLeft: '20px' }}>
                <li>Online Courses</li>
                <li>Meet Ups</li>
                <li>Product Days</li>
                <li>Career Days</li>
              </ul>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <div className='grid place-content-center md:place-content-start text-center'>
              <p style={{ color: '#00D7FF', fontSize: '24px', marginBottom: '10px' }}>Quick Links</p>
              <ul style={{ listStyleType: 'none', textAlign: 'left', paddingLeft: '20px' }}>
                <li><Link href='/'><p>Home</p></Link></li>
                <li><Link href='/learnBitcoin'><p>Learn Bitcoin</p></Link></li>
                <li><Link href='/news'><p>News & Press</p></Link></li>
                <li><Link href='/contact'><p>Contact</p></Link></li>
                <li><Link href='https://donation.btcdada.com/'><p>Donate</p></Link></li>
              </ul>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <div className='grid place-content-center md:place-content-start text-center'>
              <p style={{ color: '#00D7FF', fontSize: '24px', marginBottom: '10px' }}>Contacts</p>
              <p>+254 700 225 704</p>
              <p>bitcoindada@protonmail.com</p>
            </div>
          </Grid>
        </Grid>
      </div>
      <div style={{ padding: '20px 0' }}></div>
    </>
  )
}

export default Footer;
