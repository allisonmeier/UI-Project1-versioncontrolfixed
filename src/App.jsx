import './App.css'
import Button from '@mui/material/Button';
import ControlledCarousel from './components/RecipeCarousel';
import Timer from './components/Timer';
import TemperatureGauge from './components/TemperatureGauge';
import RecipeDisplay from './components/RecipeDisplay';

function App() {
    return(
      <div className="container">
        <div className="header">
            <p>Project 1: Smart Cookbook</p>
            <p>Allison Meier</p>
        </div>

      <TemperatureGauge />

   

      <p>ARRIVED HERE</p>
        
      </div>

    

    )

  }


export default App;
