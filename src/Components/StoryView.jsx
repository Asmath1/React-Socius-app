import React from 'react'
import './StoryView.css';
import Profile from "./../Assets/Images/profileimg.svg";
import EyeView from "./../Assets/Images/Vectoreyeview.svg";
import Bin from "./../Assets/Images/Vectorbin.svg";

const StoryView = () => {
  return (
    <div className="main-container">

        <div className="top-section">
            <div className='eyeIcon'>
                <img src={EyeView} alt="" />
            </div>
                <h2>100</h2>
            
            <div className='bin'>
                <img src={Bin} alt="" />
            </div>
        </div>
        
        <div className="bottom-section">
            <div className="dp-part">
            <img style={{ marginLeft:"50px"}} src={Profile} alt="" />
            </div>
            <div className="name-part">
            <h4>User 1</h4>
            </div>

            <div className="dp-part">
            <img style={{ marginLeft:"50px"}} src={Profile} alt="" />
            </div>
            <div className="name-part">
            <h4>User 2</h4>
            </div>

            <div className="dp-part">
            <img style={{ marginLeft:"50px"}} src={Profile} alt="" />
            </div>
            <div className="name-part">
            <h4>User 3</h4>
            </div>

            <div className="dp-part">
            <img style={{ marginLeft:"50px"}} src={Profile} alt="" />
            </div>
            <div className="name-part">
            <h4>User 4</h4>
            </div>

            <div className="dp-part">
            <img style={{ marginLeft:"50px"}} src={Profile} alt="" />
            </div>
            <div className="name-part">
            <h4>User 5</h4>
            </div>

            <div className="dp-part">
            <img style={{ marginLeft:"50px"}} src={Profile} alt="" />
            </div>
            <div className="name-part">
            <h4>User 6</h4>
            </div>

            <div className="dp-part">
            <img style={{ marginLeft:"50px"}} src={Profile} alt="" />
            </div>
            <div className="name-part">
            <h4>User 7</h4>
            </div>
        </div>
        
    </div>
  )
}

export default StoryView