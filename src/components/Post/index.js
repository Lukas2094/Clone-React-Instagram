import React from 'react';
import './style.css';
import { FiMoreHorizontal , FiSend } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { BsChat , BsBookmark , BsEmojiSmile } from 'react-icons/bs';
import { IconContext } from 'react-icons';
// import { Container } from './styles';

function Post() {
  return (
      <>
        <header>
            <div className='infos-post'>
                <img src='https://avatars.githubusercontent.com/u/61918910?v=4' />
                <p>Lucas Silva</p>
            </div>

            <FiMoreHorizontal />
        </header>

        <div className='img-post'>
             <img src='https://avatars.githubusercontent.com/u/61918910?v=4' />
        </div>

        <div className='footer-post'>
            <IconContext.Provider value={{size: '30px'}}>
                <section className='engagement-post'>

                  <div className='icons1'>

                      <div className='icon'><IoMdHeartEmpty /></div>
                      <div className='icon'><BsChat /></div>
                      <div className='icon'><FiSend /></div>
                      
                  </div>

                  <div className='icon'><BsBookmark /></div>

              </section>
            </IconContext.Provider>

            <section className='like'>
                <span>61 curtidas</span>
            </section>
              
              <div className='legend'>
                  <p>
                      <strong>Lukas2094 </strong> 
                     Caiu em Itaquera , Já Eraaa!!!
                  </p>
              </div>

              <div className='time-post'>
                 <time> há 52 minutos </time>
              </div>

              <div className='comments'>
                    <div className='fake-comments'>
                         <IconContext.Provider value={{size:'25px'}}>
                                
                            <div className='icon cdn'>
                                <BsEmojiSmile />
                                <input placeholder="Adicione um comentário..." /> 
                            </div>   
                            
                                                           
                         </IconContext.Provider>

                         

                         <button>Publicar </button>
                    </div>
              </div>
        </div>
      
      </>
  );
}

export default Post;