import "../css/RecipeSelector.css"
import React, { useState } from 'react'
import { dummyRecipes } from '../InfoExports'


class RecipeSelector extends React.Component { 
    constructor(props) {
        super();
        this.state = {
            dummy: "dummy",
        }
    }

    handleRecipeSelect = (selected) => {
        return // dummy
    }

    render() {

        return (
            <div className="selector-container">
                <div className="selector-container-header">
                    <p className='selector-title'>
                        Recipe Selector
                    </p>
                    <p className='selector-filter'>
                        Filter by: 
                    </p>
                    <p className='selector-instructions'>
                        <i>Select a recipe from the list below:</i>
                    </p>
                </div>

                <div className="selector-container-body">


                </div>

            </div>
        )
    }

}

export default RecipeSelector
