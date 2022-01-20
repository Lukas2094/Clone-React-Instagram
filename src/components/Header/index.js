import React from 'react';
import {AiOutlineSearch , AiFillHome} from 'react-icons/ai';
import { RiMessengerFill } from 'react-icons/ri';
import { BsPlusSquare} from 'react-icons/bs';
import { MdOutlineExplore } from 'react-icons/md';
import {FiHeart } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import './style.css';

// import { Container } from './styles';

function Header() {
  return  (
      <header className="header">
          <div className="container">
              <img className="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />

              <div className="input-fake">
              <IconContext.Provider value={{size:'26px'}}>
                  <AiOutlineSearch />
              </IconContext.Provider>
                  
                  <input type="text" placeholder='Pesquisar'/>
              </div> 

              <div className="icons">
                  <IconContext.Provider value={{size:'26px'}}>
                        <div>
                            <AiFillHome />
                        </div>
                        
                        <div>
                            <RiMessengerFill />
                        </div>
                        
                        <div>
                            <BsPlusSquare />
                        </div>
                        
                        <div>
                            <MdOutlineExplore />
                        </div>
                        
                        <div>
                           <FiHeart /> 
                        </div>
                        
                  </IconContext.Provider>

                  <img className="img-user" src="https://avatars.githubusercontent.com/u/61918910?v=4" />

                  
              </div>

          </div>
      </header>
  );
}

export default Header;