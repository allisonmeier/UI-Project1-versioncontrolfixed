import "../RecipeDisplay.css"
import * as React from 'react'
import { IconButton } from "@mui/material";
import {dummyRecipes, dietaryRestrictions} from '../InfoExports'

class RecipeDisplay extends React.Component { 
    constructor(props) {
        super();
        this.state = {
            currentRecipe: dummyRecipes[0],
            currentRecipeStep: 1,
            dietaryDescriptors: [],
        }
    }

    // filter and return only the recipes that relate to what we're looking for 
    getFilteredRecipes = () => {
        // later on, this will hopefully help with filtering
        const recipes = dummyRecipes
        return recipes[0]
    }

    // handle clicking "previous step" button
    handlePreviousRecipeStep = () => {
        this.setState(prevState => ({
            currentRecipeStep: Math.max(prevState.currentRecipeStep - 1, 1) // don't go below 1 >:(
        }))
    }

    // handle clicking "next step" button
    handleNextRecipeStep = () => {
        const currentRecipe = this.state.currentRecipe
        const totalSteps = currentRecipe.steps.length
        this.setState(prevState => ({
            currentRecipeStep: Math.min(prevState.currentRecipeStep + 1, totalSteps) // don't go beyond # of steps
        }))
    }

    showDifficultyLevelStars = () => {
        const currentRecipe = this.state.currentRecipe
        const difficulty = currentRecipe.difficulty

        if (difficulty === 'Easy') {
            return (
                <div>
                    <span>Difficulty Level: Easy</span>
                    <div>
                        <span className="star-green">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                    </div>
                </div>
            )
        } else if (difficulty === 'Moderate') {
            return (
                <div>
                <span>Difficulty Level: Moderate</span>
                    <div>
                        <span className="star-yellow">&#9733;</span>
                        <span className="star-yellow">&#9733;</span>
                        <span className="star">&#9733;</span>
                    </div>
                </div>
            )
        } else if (difficulty === 'Difficult') {
            return (
                <div>
                    <span>Difficulty Level: Difficult</span>
                    <div>
                        <span className="star-red">&#9733;</span>
                        <span className="star-red">&#9733;</span>
                        <span className="star-red">&#9733;</span>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <span>Difficulty Level: Unknown</span>
                    <div>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                    </div>
                </div>
            )
        }
    }
    
    render = () => {
    //console.log(getFilteredRecipes())

    return (
        <div className="recipe-container">
            <div className="recipe-container-header">
                <p className='recipe-title'>
                    {this.state.currentRecipe.title}
                </p>
                <p className='recipe-description'>
                    <i>{this.state.currentRecipe.description}</i>
                </p>
                <div className='recipe-difficulty'>
                    <div className='recipe-difficulty-stars'>
                        {this.showDifficultyLevelStars()}
                    </div>
                </div>
            </div>

            <div className="recipe-container-body">
                <p className='recipe-steps-subheader'>
                    Steps: 
                </p>
                <ol className="recipe-steps" start={1}>
                    {this.state.currentRecipe.steps.map((step, index) => (
                        <li key={index} className={this.state.currentRecipeStep === index + 1 ? 'highlighted' : ''}>
                            {step}
                        </li>
                    ))}
                </ol>
                <div className="recipe-step-navigation">
                    <button onClick={this.handlePreviousRecipeStep}>
                        &#8592;
                    </button> {/* left arrow */}
                    <span>
                        Step {this.state.currentRecipeStep}
                    </span>
                    <button onClick={this.handleNextRecipeStep}>
                        &#8594;
                    </button> {/* right arrow */}
                </div>
            </div>
        </div>
    )

}}

export default RecipeDisplay

