import React from 'react';
import './lightnessAndSaturation.css';


function LightnessAndSaturation(props) {
    const hue = props.hsl[0];
    const saturation = props.hsl[1];
    const lightness = props.hsl[2];
    let hslString = "hsl("+ hue + "," + saturation + "%," + lightness + "%)";

    const onChangeLightness = event => {
        const hsl = [hue, saturation, event.target.value];
        props.setHsl(hsl);
    };

    const onChangeSaturation = event => {
        const hsl = [hue, event.target.value, lightness];
        props.setHsl(hsl);
    };

    return (
        <div  className="LightnessAndSaturation">
            <div className="Lightness">
                <span>Lightness: </span>
                <input
                    type="range"
                    min="0" max="100"
                    value={props.hsl[2]}
                    onChange={onChangeLightness}
                    step="1"
                    className="slider"/>
                <svg height="100" width="100">
                    <circle cx="50" cy="50" r="30" fill={hslString}/>
                </svg>
            </div>
            <div className="Saturation">
                <span>Saturation: </span>
                <input
                    type="range"
                    min="0" max="100"
                    value={props.hsl[1]}
                    onChange={onChangeSaturation}
                    step="1"
                    className="slider"/>
                <svg height="100" width="100">
                    <circle cx="50" cy="50" r="30" fill={hslString}/>
                </svg>
            </div>
        </div>
    );
}

export default LightnessAndSaturation;