import React from 'react'
import './Otp.css';
import image from "./../Assets/Images/messageicon.svg";
import button from "./../Assets/Images/Next-Button.svg";

const Otp = () => {
  return (
    <div className='container'>
        <main>
            <div className='left-section'>
                <h2>ENTER OTP</h2>
                <div className="otp">
                    <input className='otp-section' type="text" maxLength={1} />
                    <input className='otp-section' type="text" maxLength={1}/>
                    <input className='otp-section' type="text" maxLength={1}/>
                    <input className='otp-section' type="text" maxLength={1}/>
                </div>

                <div className='message'>
                    <div className='left-message'>
                    <p1>Didn't receive the OTP?</p1>
                </div>
                <div className='right-message'>
                    <p1> RESEND OTP</p1>
                </div>
                </div>
                <div className='next-button' style={{margin:"auto"}}> 
                    <img src={button} alt="" />
                </div>
                
            </div>

            <div className='right-section'>
                <div className='image'>
                    <img src={image} alt="" />
                </div>
                <p> We have sent an OTP to your registered Phone number</p>

            </div>
        </main>
    </div>
  )
}

export default Otp