import "../css/RecipeSelector.css"
import React from 'react'
import { dummyRecipes } from '../InfoExports'

class RecipeSelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedRecipe: null

        }
    }

    getFilteredRecipes = () => {
        const { selectedUserProfile } = this.props
        if (!selectedUserProfile) return dummyRecipes
        const userDietaryRestrictions = selectedUserProfile.dietaryRestrictions || []
        return dummyRecipes.filter(recipe =>
            userDietaryRestrictions.every(restriction => recipe.dietaryDescriptors.includes(restriction))
        )
    }

    render() {
        const { onSelectRecipe } = this.props
        const recipes = this.getFilteredRecipes()

        return (
            <div className="selector-container">
                <div className="selector-container-header">
                    <p className='selector-title'>
                        Recipe Selector
                    </p>
                    <p className='selector-filter-container'>
                        Filtered by User
                    </p>
                    <div className="filters">
                        {/* dummy */}
                    </div>
                    <p className='selector-instructions'>
                        Select a recipe from the list below:
                    </p>
                </div>
                <div className="selector-container-body">
                    <ul className="recipe-list">
                        {recipes.map((recipe, index) => (
                            <li key={index} className='recipe-row' onClick={() => onSelectRecipe(recipe)}>
                                <div className="recipe-info">
                                    <span className="column-contents">
                                        <b>{recipe.title}</b>
                                    </span>
                                    &nbsp;&nbsp;&nbsp;
                                    <span className="column-contents">
                                        <i>{recipe.difficulty}</i>
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default RecipeSelector
