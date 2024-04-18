import * as React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider' //https://mui.com/material-ui/react-slider/

const LabeledTemperatures = [
        {
            value: 32,
            label: '32°F'
        },
        {
            value: 100,
            label: '100°F'
        },
        {
            value: 0,
            label: '0°F'
        }
    ]

export default function TemperatureGauge() {
    
    return(
        <Box sx={{width: 300}}>
            <Slider
                aria-label='Custom marks'
                defaultValue={32}
                getAriaValueText={(value) => {return `${value}°F`}}
                step={10}
                valueLabelDisplay='auto'
                marks={LabeledTemperatures}
            />
        </Box>
    )

}

function setGoalTemperature() {

}
