import React from 'react'
import './Home.css';
import Msg from "./../Assets/Images/message.svg";
import Post from "./../Assets/Images/post.svg";
import Search from "./../Assets/Images/search.svg";
import Notification from "./../Assets/Images/notif.svg";
import home from "./../Assets/Images/hm.svg";
import Profile from "./../Assets/Images/profileimg.svg";
import Story from "./../Assets/Images/stories.png";
import pic from "./../Assets/Images/post3.png";
const Home = () => {
  return (
    <div className="profile-container">
        <div className="story-section">
            <div className="story-container">
            <img src={Profile} alt="" />
            <img className="story" src={Story} alt="" 
            style={{
                position:"absolute",
                width: "30px",
                height: "30px",
                margin: "90px",
                top: "60px",
                left:"20px"
            }}/>
              <p>Your story</p>
            </div>
            <div className="story-container">
            <img src={Profile} alt="" />
            <p>_prj_nair</p>
            </div>
            <div className="story-container">
            <img src={Profile} alt="" />
            <p>Azmath_khalid</p>
            </div>
            <div className="story-container">
            <img src={Profile} alt="" />
            <p>_Bharath_17</p>
            </div>
            <div className="story-container">
            <img src={Profile} alt="" />
            <p>Archana12</p>
            </div>
            <div className="story-container">
            <img src={Profile} alt="" />
            <p>_kuttoos_prj</p>
            </div>
        </div>


        <div className="post-section">

            <div className="post-container">
            <img src={pic} alt="" />
            <img  id="prof-pic" src={Profile} alt="" />
            {/* <img className="post" src={Post} alt=""/> */}
            </div>

            <div className="line"></div>

            <div className="online-container">
                <h3>Online</h3>
            <img src={Profile} alt="" />
            <p>Azmath_khalid</p>
            {/* <img className="online" src={Msg} alt=""/> */}
            </div>
        </div>

        <div className='f-icons'> 
               <div className='icon'>
                <img src={home} alt="" />
                <p>Home</p>
                </div>
                <div className='icon'>
                <img src={Msg} alt="" />
                <p>Message</p>
                </div>
                <div className='icon'>
                <img src={Post} alt="" />
                <p>Post</p>
                </div>
                <div className='icon'>
                <img src={Search} alt="" />
                <p>Search</p>
                </div>
                <div className='icon'>
                <img src={Notification} alt="" />
                <p>Notification</p>
                </div>
                </div>

    </div>
  )
}

export default Home