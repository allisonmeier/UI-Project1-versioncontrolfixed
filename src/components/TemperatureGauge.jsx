import "../css/TemperatureGauge.css"
import * as React from "react"
import Box from "@mui/material/Box"
import Slider from "@mui/material/Slider"
import { basicTemperatures } from "../InfoExports"

class TemperatureGauge extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      goalTemperature: 0,
      userInputTemperature: "500",
    }
  }

  setGoalTemperature = () => {
    const { userInputTemperature, goalTemperature } = this.state
    const goalTemp = parseInt(userInputTemperature, 10)

    if (!isNaN(goalTemp)) {
        const currentTemp = this.state.goalTemperature
        const stepsUntilGoalTemp = Math.abs(currentTemp - goalTemp)
        const timeUntilGoalTemp = 5000 / stepsUntilGoalTemp

        let temp = currentTemp
        let step = 1

        const interval = setInterval(() => {
            if (temp !== goalTemp) {
            temp = currentTemp < goalTemp ? currentTemp + step : currentTemp - step
            this.setState({ goalTemperature: temp })
            step++
            } else {
            clearInterval(interval)
            }
        }, timeUntilGoalTemp)
    }
}

handleGoalTempChange = (inputVal) => {
    this.setState({ userInputTemperature: inputVal.target.value })
}

render() {
    const LabeledTemperatures = basicTemperatures

    return (
        <Box sx={{ width: 300 }} className="temp-gauge-container">
            <Slider 
                aria-label="Custom marks"
                valueLabelDisplay="on"
                value={this.state.goalTemperature}
                getAriaValueText={(value) => `${value}°F`}
                step={5}
                marks={LabeledTemperatures}
                onChange={(e, value) => this.setState({ goalTemperature: value })}
                min={LabeledTemperatures[0].value}
                max={500}
            />
            <button onClick={this.setGoalTemperature}>
                Set goal temperature below: <b>{this.state.userInputTemperature}</b>°F
            </button>
            <input
                type="text"
                value={this.state.userInputTemperature}
                onChange={this.handleGoalTempChange}
            />
        </Box>
    )
  }
}

export default TemperatureGauge
