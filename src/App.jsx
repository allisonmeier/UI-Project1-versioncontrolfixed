import React from 'react'
import './css/App.css'
import TemperatureGauge from './components/TemperatureGauge';
import RecipeDisplay from './components/RecipeDisplay';
import UserProfiles from './components/UserProfiles';
import RecipeSelector from './components/RecipeSelector';

class App extends React.Component {

    render() {

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
              <RecipeSelector/>
            </div>
            <div className="middle-column">
              <RecipeDisplay />
            </div>
            <div className="right-column">
              <UserProfiles />
            </div>
          </div>
        </div>
      )
    }
  }


export default App
