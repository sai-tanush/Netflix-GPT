import React from 'react';
import logo from '../assets/logo.png';

const HeaderLogo:React.FC = () => {
  return (
    <div >
      <img src={logo} alt='logo' height={100} width={190} className='absolute top-0 left-32 z-30 ' />
    </div>
  )
}

export default HeaderLogo;