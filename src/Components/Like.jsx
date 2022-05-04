import React from 'react'
import './Like.css';
import Profile from "./../Assets/Images/profileimg.svg";
import LikeIcon from "./../Assets/Images/Vectorlike.svg";

const Like = () => {
  return (
    <div className="main-container">

        <div className="top-section">
          <h2>Likes</h2>
          <img src={LikeIcon} alt="" />
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

export default Like