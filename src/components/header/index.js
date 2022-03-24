import React, {useState} from 'react'
import './header.css';
import Mobile from './mobile/index';
import Web from './web/index';




function Header() {
  const[isOpem,setIsOpem]= useState(false);

  return (
    <div className='header'>

      <div className='logo'>Portfolio</div>
      <div className='menu'>

            <div className='web-menu'>
              <Web/>
            </div>



            <div className='mobile-menu'> 
            
                <div onClick={()=>setIsOpem (!isOpem)}>
                  <i class='fi-rr-apps menu-icon'></i>
                </div>
                {isOpem && <Mobile isOpem={isOpem} setIsOpem={setIsOpem}/>}  
            </div>

      </div>

    </div>
  );
  
  
}

export default Header;