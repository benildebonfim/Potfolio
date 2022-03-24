import React from 'react'
import {RedeDados} from '../../dados/redes';
import './redes-contato.css';


function Social() {
    const dado= RedeDados;
  return (

          <div className='social-contact'>
            {dado.map((item)=>{
              return(
                <a href='={item.link}'>
                      <div className='social-icon-div'>
                        <img src={item.icon} className='social-icon'/>

                      </div>
                </a>
              );
            })}

          </div>

  );
  
}

export default Social;