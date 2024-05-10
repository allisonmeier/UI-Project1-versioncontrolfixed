import "../UserProfiles.css"
import * as React from 'react'
import { userProfiles, dummyRecipes, allPossibleIngredients } from '../InfoExports'

class UserProfiles extends React.Component {
    constructor(props) {
        super()
        this.state = {
            allUserProfiles: userProfiles,
            currentUserProfile: userProfiles.user1,
        }
    }

    handleProfileChange = (selectedProfile) => {
        this.setState({ currentUserProfile: selectedProfile })
        //console.log(this.state.currentUserProfile.name)
    }

    handleIngredientUpdates = (selection) => {
        const { value: justClicked } = selection.target
        const { currentUserProfile } = this.state

        // not in list? add it
        if (!currentUserProfile.ingredients.includes(justClicked)) {
            currentUserProfile.ingredients.push(justClicked)
        } 
        // item already in list & list is just 1 item? empty it
        // TODO: NOT WORKING CURRENTLY
        else if (currentUserProfile.ingredients.length == 1) {
            currentUserProfile.ingredients.length = 0
        }
        // item already in list & list > 1 item? remove it
        else if (currentUserProfile.ingredients.length > 1) {
            currentUserProfile.ingredients = currentUserProfile.ingredients.filter(item => item !== justClicked)
        }
    
        this.setState(prevState => ({
            currentUserProfile: {
                ...prevState.currentUserProfile,
                user: {
                    ...prevState.currentUserProfile.user,
                    ingredients: currentUserProfile.ingredients
                }
            }
        }), () => {
            console.log("Just clicked:", justClicked)
            console.log("Updated ingredients AT END:", currentUserProfile.ingredients)
        })
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
                                value={currentUserProfile.ingredients}
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
                                    {currentUserProfile.ingredients.map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfiles
