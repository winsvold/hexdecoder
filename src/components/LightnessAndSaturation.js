import React from 'react';
import './lightnessAndSaturation.css';
import convert from 'color-convert';


function LightnessAndSaturation(props) {
    const hue = props.hsl[0];
    const saturation = props.hsl[1];
    const lightness = props.hsl[2];
    let hslString = "hsl("+ hue + "," + saturation + "%," + lightness + "%)";

    const onChangeLightness = event => {
        const hex = convert.hsl.hex(hue, saturation, event.target.value);
        props.setHexcode(hex);
    };

    const onChangeSaturation = event => {
        const hex = convert.hsl.hex(hue, event.target.value, lightness);
        props.setHexcode(hex);
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