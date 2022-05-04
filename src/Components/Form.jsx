import React from 'react'
import "./Form.css";
import logo from "./../Assets/Images/logo.png";

const Form = () => {
  return (
    <div className='container'>
        <main>
            <div className='left-section'>
                <div className='login-form'>   
                 <div className="App-logo">               
                    <img src={logo} alt="" />
                    <div className='line'> </div>
                    <div> <h1 id='heading'>SOCIUS</h1> </div>               
                    </div>
                    <input type="text" placeholder='username'/>
                    <input type="text" placeholder='password'/>
                    <button>Log In</button>
                    <p>"connect people around"</p>
                </div>
            </div>

            <div className='right-section'>
                <div className='signUp-form'>
                    <h2>Sign Up</h2>
                        <div className='name-section'>
                            <input type="text" placeholder='First Name'/>
                            <input type="text" placeholder='Last Name'/>
                        </div>
                        <div className='page-division'>
                            <label for="dob">Date of Birth:</label>
                            <input type="date" placeholder=''/>                        
                        </div>
                        <div className='page-division'>
                            <label for="email">E-mail:</label>
                            <input type="email" placeholder=''/>                        
                        </div>
                        <div className='page-division'>
                            <label for="phone">Phone-Number:</label>
                            <input type="number" placeholder=''/>                        
                        </div>
                        <div className='page-division'>
                            <label for="state">State:</label>
                            <input type="text" placeholder=''/>                        
                        </div>
                        <div className='page-division'>
                            <label for="city">City:</label>
                            <input type="text" placeholder=''/>                        
                        </div>
                        <button>Sign-Up</button>

                </div>
            </div>
        </main>
    </div>
  )
}

export default Form