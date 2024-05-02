import './index.css'
import Button from '@mui/material/Button';
import ControlledCarousel from './components/RecipeCarousel';
import Timer from './components/Timer';
import TemperatureGauge from './components/TemperatureGauge';
import RecipeDisplay from './components/RecipeDisplay';

function App() {
    return(
      <div className="container">
        <div className="header">
            <p className="project-title">Project 1: Smart Cookbook</p>
            <p className="my-name">Allison Meier</p>
            <div className="external-links">
              <a href="" target="_blank" rel="noopener noreferrer">
                Github Repo
              </a>
              <a href="https://allisonmeier01.wixsite.com/website/user-interface" target="_blank" rel="noopener noreferrer">
                Link to Write-Up
              </a>  
            </div>
        </div>

      <TemperatureGauge />

   

      {console.log("temp gauge checkpoint")}

      <RecipeDisplay/>

      {console.log("recipe display checkpoint")}
        
      </div>

    

    )

  }


export default App;
