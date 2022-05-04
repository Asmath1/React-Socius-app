import React from 'react'
import './Search.css';
import Icon from "./../Assets/Images/leftIcon.svg";
import Close from "./../Assets/Images/closeBar.svg";
import Profile from "./../Assets/Images/profileimg.svg";

const Search = () => {
  return (
    <div className="main-container">

        <div className="top-section">
            <div className="back-button">
                <img src={Icon} alt="" />
            </div>
            <div className="s-bar">
                <input className='search-bar' type="text" />
                {/* <img  className='sIcon' src={search} alt="" /> */}
            </div>
        </div>

        <div className="heading">
            <h2>Recent</h2>
        </div>

        <div className="Bottom-section">
           
            <div className="bottom-part"> 
            <div className="dp-part">
            <img style={{ marginLeft:"50px"}} src={Profile} alt="" />
            </div>
            <div className="name-part">
            <h4>_prj_nair</h4>
            </div>
            <div>
            <img className='close' src={Close} alt="" />
            </div>
            </div>
        </div>

        <div className="Bottom-section">
           
            <div className="bottom-part"> 
            <div className="dp-part">
            <img style={{ marginLeft:"50px"}} src={Profile} alt="" />
            </div>
            <div className="name-part">
            <h4>_prj_nair</h4>
            </div>
            <div>
            <img className='close' src={Close} alt="" />
            </div>
            </div>
        </div>

        <div className="Bottom-section">
            
            <div className="bottom-part"> 
            <div className="dp-part">
            <img style={{ marginLeft:"50px"}} src={Profile} alt="" />
            </div>
            <div className="name-part">
            <h4>_prj_nair</h4>
            </div>
            <div>
            <img className='close' src={Close} alt="" />
            </div>
            </div>
        </div>

        <div className="Bottom-section">
            
            <div className="bottom-part"> 
            <div className="dp-part">
            <img style={{ marginLeft:"50px"}} src={Profile} alt="" />
            </div>
            <div className="name-part">
            <h4>_prj_nair</h4>
            </div>
            <div className='c-icon'>
            <img className='close' src={Close} alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Search