import React from 'react';
import './style.css';
import Post from '../Post';
// import { Container } from './styles';
import Stories from '../Stories';
import Suggestion from '../Suggestion';
function layout() {
  return (
      <>
       <div className='MainGrid'>

            <div className='first-column' style={{gridArea: 'firstColumn'}}>
                <div className="box">
                            <Stories />
                            <Stories />
                            <Stories />
                            <Stories />
                            <Stories />
                            <Stories />
                            
                        </div>

                    <div className="box2" style={{margin:"30px 0 "}}>
                        <Post />
                    </div>
            </div>

                <div style={{gridArea: 'secondColumn'}}>
                    <div className="sugestionBox">
                        <Suggestion />
                    </div>
                </div>
       </div>


        
      </>
  );
}

export default layout;