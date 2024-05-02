import "../UserProfiles.css"
import * as React from 'react'
import {userProfiles} from '../InfoExports'
import { FaUser } from 'react-icons/fa'

class UserProfiles extends React.Component { 
    constructor(props) {
        super();
        this.state = {
            allUserProfiles: userProfiles,
            currentUserProfile: userProfiles.user1,
        }
    }

    handleProfileChange = (selectedProfile) => {
        this.setState({currentUserProfile: selectedProfile})
        console.log(selectedProfile)
    }

    render = () => {

        const { currentUserProfile, allUserProfiles } = this.state

        return (
            <div className="profile-container">
                <div className="profile-selecter">
                    {Object.keys(allUserProfiles).map((userKey) => (
                        <div 
                            key={userKey} 
                            className={`profile-icon-${userKey} profile-icon`}
                            onClick={() => this.handleProfileChange(allUserProfiles[userKey])}
                        >
                            <FaUser size={24} /> {/* Person icon */}
                        </div>
                    ))}
                </div>

                <div className="profile-display">
                    <p className="user-name">
                        Welcome, {currentUserProfile.name}!
                    </p>



                </div>

            </div>

        )

    }


}

export default UserProfiles
