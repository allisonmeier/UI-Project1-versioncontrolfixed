import * as React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider' //https://mui.com/material-ui/react-slider/
import {basicTemperatures} from '../InfoExports'

class TemperatureGauge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goalTemperature: 350,
            userInputTemperature: '500',
        }
    }

    setGoalTemperature = () => {
        const {userInputTemperature} = this.state
        const goalTemp = parseInt(userInputTemperature, 10) // fyi, 10 just means it's a decimal-based number

        // check and make sure input is actually a number
        if (!isNaN(goalTemp)) {
            this.setState({ goalTemperature: goalTemp })

            const currentTemp = this.state.goalTemperature
            const stepsUntilGoalTemp = Math.abs(currentTemp - goalTemp)

            // fyi, this should take 5 seconds just for the sake of convenience
            const timeUntilGoalTemp = 5000 / stepsUntilGoalTemp

            for (let i = 1; i <= stepsUntilGoalTemp; i++) {
                setTimeout(() => {
                    this.setState((prevState) => ({
                        goalTemperature: prevState.goalTemperature < goalTemp ? prevState.goalTemperature + 50 : prevState.goalTemperature - 50,
                    }))
                }, i * timeUntilGoalTemp)
            }
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
                    aria-label='Custom marks'
                    defaultValue={0}
                    getAriaValueText={(value) => `${value}°F`}
                    step={5}
                    valueLabelDisplay='auto'
                    marks={LabeledTemperatures}
                    onChange={(inputVal, value) => this.setState({ goalTemperature: value })}
                />
                <input
                    type="text"
                    value={this.state.userInputTemperature}
                    onChange={this.handleGoalTempChange}
                />
                <button onClick={() => this.setGoalTemperature(350)}>
                    Set goal temperature to {this.state.goalTemperature}°F
                </button>
            </Box>
        )
    }
}


export default TemperatureGauge
