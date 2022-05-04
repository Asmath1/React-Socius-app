import "./Settings.css"
const Settings = () => {
    return(
        <div className="settings-container">
            <div className="settings-container-box">
                <div className="heading">
                    <h3>Settings</h3>
                </div>
                
                <div className="settings-content">
                    <button className="settings-content-button">Edit Profile</button>
                    <button className="settings-content-button">Privacy and Security</button>
                    <button className="settings-content-button">Blocked Accounts</button>
                    <button className="settings-content-button">Privacy Policy and Community Guidance</button>
                    <button className="settings-content-button">Log Out</button>
                   
                </div>    
            </div> 
        </div>
    )
}
export default Settings
