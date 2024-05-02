import React from 'react'
import './App.css'
import TemperatureGauge from './components/TemperatureGauge';
import RecipeDisplay from './components/RecipeDisplay';
import UserProfiles from './components/UserProfiles';
import { Component } from 'react';

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
                <a href="https://allisonmeier01.wixsite.com/website/user-interface" target="_blank" rel="noopener noreferrer">
                  Link to Write-Up
                </a>  
              </div>
          </div>
          <div className='content-wrapper'>
            <TemperatureGauge /> {console.log("temp gauge checkpoint")}
            <RecipeDisplay/> {console.log("recipe display checkpoint")}
            <UserProfiles/> {console.log("recipe display checkpoint")}
          </div>
        </div>
      )
    }
  }


export default App
