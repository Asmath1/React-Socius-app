import React from 'react'
import './Chat.css';
import Profile from "./../Assets/Images/profileimg.svg";
import Icon from "./../Assets/Images/leftIcon.svg";
import Search from "./../Assets/Images/searchBar.svg";
import Cam from "./../Assets/Images/camera-icon.svg";

const Chat = () => {
  return (
    <div className="main-container">
        <div className="top-section">
            <div className="back-button">
                <img src={Icon} alt="" />
            </div>
            <div className="s-bar">
                <input className='search-bar' type="text" />
                <img  className='sIcon' src={Search} alt="" />
            </div>
        </div>

        <div className="bottom-section">

            <div className="bottom-part"> 
            <div className="dp-part">
            <img style={{ marginLeft:"100px"}} src={Profile} alt="" />
            </div>
            <div className="name-part">
            <h4>_prj_nair</h4>
            <h3>typing...</h3>
            </div>
            <div className='camera'>
            <img  src={Cam} alt="" />
            </div>
            </div>
            
            
            <div className="bottom-part">
            <div className="dp-part">
            <img style={{ marginLeft:"100px"}} src={Profile} alt="" />
            </div>
            <div className="name-part">
            <h4>_prj_nair5</h4>
            <h5>Send 2 hr ago</h5>
            </div>
            <div className='camera'>
            <img  src={Cam} alt="" />
            </div>
            </div>

            <div className="bottom-part">
            <div className="dp-part">
            <img style={{ marginLeft:"100px"}} src={Profile} alt="" />
            </div>
            <div className="name-part">
            <h4>_prj_nair</h4>
            </div>
            <div className='camera'>
            <img  src={Cam} alt="" />
            </div>
            </div>

            <div className="bottom-part">
            <div className="dp-part">
            <img style={{ marginLeft:"100px"}} src={Profile} alt="" />
            </div>
            <div className="name-part">
            <h4>_prj_nair</h4>
            </div>
            <div className='camera'>
            <img  src={Cam} alt="" />
            </div>
            </div>

            <div className="bottom-part">
            <div className="dp-part">
            <img style={{ marginLeft:"100px"}} src={Profile} alt="" />
            </div>
            <div className="name-part">
            <h4>_prj_nair</h4>
            </div>
            <div className='camera'>
            <img  src={Cam} alt="" />
            </div>
            </div>
           
            
        </div>


    </div>
    
  )
}

export default Chat