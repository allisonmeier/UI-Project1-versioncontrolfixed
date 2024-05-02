import "../UserProfiles.css"
import * as React from 'react'
import {userProfiles, dummyRecipes, allPossibleIngredients} from '../InfoExports'
import { FaUser } from 'react-icons/fa'

class UserProfiles extends React.Component { 
    constructor(props) {
        super();
        this.state = {
            allUserProfiles: userProfiles,
            currentUserProfile: userProfiles.user1,
            selectedIngredients: [], // this is what the user has selected as available
        }
    }

    handleProfileChange = (selectedProfile) => {
        this.setState({currentUserProfile: selectedProfile})
    }

    handleIngredientUpdates = (selection) => {
        const { value } = selection.target;
        const { currentUserProfile } = this.state;

        // ACT LIKE AN ARRAY IF YOU'RE AN ARRAY PLEASE!!!
        const selectedIngredients = Array.isArray(value) ? value : [value]
    
        // now hold the stuff I tell you to hold >:(
        const updatedIngredients = [...this.state.selectedIngredients, ...selectedIngredients]

        this.setState({selectedIngredients: updatedIngredients})
    
        this.setState(prevState => ({
            currentUserProfile: {
                ...currentUserProfile,
                currentIngredients: updatedIngredients
            }
        }))
    
        console.log(this.state.selectedIngredients)
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
                            <FaUser size={24} /> {/* fyi, this is all the person-shaped icons */}
                        </div>
                    ))}
                </div>

                <div className="profile-display">
                    <p className="user-name">
                        Welcome, {currentUserProfile.name}!
                    </p>
                    <div className="user-info">
                        <p>
                            <i>Maximum Recipe Difficulty: {currentUserProfile.skillLevel}</i>
                        </p>
                        <p>
                            <i>Dietary Restriction(s): {currentUserProfile.dietaryRestrictions.length > 0 ? currentUserProfile.dietaryRestrictions.join(", ") : "None"}</i>
                        </p>
                        <div className="ingredient-dropdown">
                            <p>What do you have?</p>
                            <select
                                multiple
                                value={currentUserProfile.currentIngredients}
                                onChange={this.handleIngredientUpdates}
                            >
                                {allPossibleIngredients.map((ingredient, index) => (
                                    <option key={index} value={ingredient}>
                                        {ingredient}
                                    </option>
                                ))}
                            </select>
                            <div>
                                <p>Current Selection:</p>
                                <ul>
                                    {this.state.selectedIngredients.map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
}

export default UserProfiles
