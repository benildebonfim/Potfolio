import React from 'react'
import './sobre.css';

import Social from '../../comp/redes-contato/index';


function Sobre() {
  return (
        <div className='about'>
         
           <div className='about-top'>
         
               <div className='about-info'>
                 Ola, Sou
                Finalista do Curso de Engenharia Informática

                <br/><span className='info-name'> Faculdade de Ciências e da Tecnologia</span>

                <h6> Área a siguer Administradora de Base de Dados</h6>

               </div>

               <div className='about-photo'>

               <img 
               src={require('../../../assets/rosto.png').default} className='picture' />
               

               </div>

           </div>

           <Social/>
        </div>
  );
}

export default Sobre;