import { useState } from 'react';
import styles from '../styles/index.module.css';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import LandingPageDrawer from '@/components/LandingPageDrawer';
import {BiMenu} from 'react-icons/bi'
import Link from 'next/link';



function Nav() {

const [state, setState] = useState({
  top: false,
});
const toggleDrawer = (open) => (event) => {
  if (
    event &&
    event.type === 'keydown' &&
    (event.key === 'Tab' || event.key === 'Shift')
  ) {
    return;
  }

  setState({ ...state, top: open });
};
  return (
    <>
    {/* Desktop */}
    <div className='w-screen hidden md:grid'>
    <div className={`${styles.NavDesktop} w-4/5 mx-auto flex justify-between items-center`}>
    <div className={`${styles.LogoDiv}`}><img src='/images/ladylogo.png' className=' w-full h-full'/></div>
    <div className={`${styles.NavItemsDEsktopDiv}`}>
      <Link href='/' > <p className={`${styles.NavItemDesktop}`}>Home</p></Link>
      {/* <Link href='/learnBitcoin' ><p className={`${styles.NavItemDesktop}`}>Learn Bitcoin</p></Link> */}
      <Link href='/news' > <p className={`${styles.NavItemDesktop}`}>News</p></Link>
      <Link href='/contact' > <p className={`${styles.NavItemDesktop}`}>Contact</p></Link>
    </div>
    <div>
    <Link href='/donation'> <button className={`${styles.ButtonDesktop} flex items-center text-white place-content-center`}>Donate</button></Link>
    </div>
    </div>
  
  </div>
  {/* Mobile Design */}
  <div className='grid md:hidden'>
  <div className={`${styles.NavDesktopComponent} w-10/12  mx-auto flex justify-between items-center`}> 
          <div className={`${styles.ComponentDivImage}`}><img src='/images/ladylogo.png' className='w-full h-full' /></div>
          <div className='flex'  >
                  <BiMenu  onClick={toggleDrawer(true)} className='text-white text-3xl'/>    
        <SwipeableDrawer
        anchor="top"
        open={state.top}
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer(false)}
      >
        <LandingPageDrawer toggleDrawer={toggleDrawer}/>
      </SwipeableDrawer>  
          </div>
     </div>
  </div>

  </>
  )
}

export default Nav