import './Profile.css';
import Home from "./../Assets/Images/hm.svg";
import DP from "./../Assets/Images/dp.svg";
import Cam from "./../Assets/Images/camera.svg";
import Settings from "./../Assets/Images/settings.svg";
import Msg from "./../Assets/Images/message.svg";
import Post from "./../Assets/Images/post.svg";
import Search from "./../Assets/Images/search.svg";
import Notification from "./../Assets/Images/notif.svg";
import pic1 from "./../Assets/Images/post1.png";
import pic2 from "./../Assets/Images/post2.png";
import pic3 from "./../Assets/Images/post3.png";



const Profile=() => {
    return(
        <div className="profile-container">
            <div className="settings-icon" >
            <img src={Settings} alt="" />
            <p1>Settings</p1>
            </div>
            <div className="circle">
            <img className="dp" src={DP} alt="" />
            
            <img className="dp-cam" src={Cam} alt="" />
           
            </div>
            <p1 className="username-heading">USERNAME</p1>

            <div className="follow">

                <div className="followers">
                    <p1>Followers</p1>
                </div>

                <div className="line-in-between">

                </div>
                
                <div className="following">
                    <p1>Following</p1>
                </div>
            </div>
            <div className='photo-section'>
            <img className="photo" src={pic1} alt="" /> 
            <img className="photo" src={pic2} alt="" /> 
            <img className="photo" src={pic3} alt="" /> 
            </div>

            
               <div className='f-icons'> 
               <div className='icon'>
                <img src={Home} alt="" />
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
export default Profile
