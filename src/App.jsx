import React from 'react'
import './css/App.css'
import TemperatureGauge from './components/TemperatureGauge';
import RecipeDisplay from './components/RecipeDisplay';
import UserProfiles from './components/UserProfiles';
import RecipeSelector from './components/RecipeSelector';
import { dummyRecipes } from './InfoExports';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        selectedRecipe: null, 
        selectedUserProfile: null
    }
  }

  handleSelectUserProfile = (userProfile) => {
    this.setState({ selectedUserProfile: userProfile });
  }

  handleRecipeSelect = (recipe) => {
    this.setState({ selectedRecipe: recipe })
  }

    render() {
      const { selectedRecipe, selectedUserProfile } = this.state

      return (
        <div className="app-container">
          <div className="header">
              <p className="project-title">Project 1: Smart Cookbook</p>
              <p className="my-name">Allison Meier</p>
              <div className="external-links">
                <a href="https://github.com/allisonmeier/UI-Project1" target="_blank" rel="noopener noreferrer">
                  Github Repo
                </a>
                &nbsp;&nbsp;&nbsp; {/* add some space, stop sticking together */}
                <a href="https://allisonmeier01.wixsite.com/website/user-interface" target="_blank" rel="noopener noreferrer">
                  Link to Write-Up
                </a>  
              </div>
          </div>
          <div className='content-wrapper'>
            <div className="left-column">
              <TemperatureGauge />
              <RecipeSelector 
                recipes={dummyRecipes} 
                onSelectRecipe={this.handleRecipeSelect}
                selectedUserProfile={selectedUserProfile}
               />
            </div>
            <div className="middle-column">
              <RecipeDisplay currentRecipe={selectedRecipe} />
            </div>
            <div className="right-column">
              <UserProfiles onSelectUserProfile={this.handleSelectUserProfile} />
            </div>
          </div>
        </div>
      )
    }
  }


export default App
