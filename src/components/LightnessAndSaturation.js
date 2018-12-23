import React from 'react';
import './lightnessAndSaturation.css';
import convert from 'color-convert';


function LightnessAndSaturation(props) {
    const hue = props.hsl[0];
    const saturation = props.hsl[1];
    const lightness = props.hsl[2];
    let hslString = "hsl("+ hue + "," + saturation + "%," + lightness + "%)";

    const onChangeLightness = event => {
        props.setHsl([hue, saturation, event.target.value]);
        const hex = convert.hsl.hex(hue, saturation, event.target.value);
        props.setHex(hex);
    };

    const onChangeSaturation = event => {
        const hex = convert.hsl.hex(hue, saturation, event.target.value);
        props.setHex(hex);
        props.setHsl([hue, event.target.value, lightness]);
    };

    const getLightnessText= () => {
        if (lightness < 33.33 ){
            return 'Dark';
        } else if (lightness < 66.66 ){
            return 'Middle';
        }  else {
            return 'Light';
        }
    };


    const getSaturationText= () => {
        if (saturation < 25 ){
            return 'Grey';
        } else if (saturation < 50 ){
            return 'Muted';
        }  else if (saturation < 75 ){
            return 'Washed';
        }  else {
            return 'Saturated';
        }
    };

    return (
        <div className="LightnessAndSaturation">
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
            <div>{getLightnessText()}</div>
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
            <div>{getSaturationText()}</div>
        </div>
    );
}

export default LightnessAndSaturation;