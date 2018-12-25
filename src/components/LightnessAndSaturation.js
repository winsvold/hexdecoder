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
        const hex = convert.hsl.hex(hue, event.target.value, lightness);
        props.setHex(hex);
        props.setHsl([hue, event.target.value, lightness]);
    };

    const getLightnessText= () => {
        if (lightness < 5 ){
            return 'Black';
        } else if (lightness < 33.33 ){
            return 'Dark';
        } else if (lightness < 66.66 ){
            return 'Middle';
        } else if (lightness < 98 ){
            return 'Light';
        }  else {
            return 'White';
        }
    };


    const getSaturationText= () => {
        if (saturation < 10 ){
            return 'Grey';
        } else if (saturation < 40 ){
            return 'Muted';
        }  else if (saturation < 70 ){
            return 'Washed';
        }  else {
            return 'Saturated';
        }
    };

    return (
        <div className="LightnessAndSaturation">
            <span id="L__header">Lightness: </span>
            <input
                id="L__slider"
                type="range"
                min="0" max="100"
                value={props.hsl[2]}
                onChange={onChangeLightness}
                step="1"
                className="slider"/>
            <svg height="60" width="60" id="L__circle">
                <circle cx="30" cy="30" r="30" fill={hslString}/>
            </svg>
            <div id="L__text">{getLightnessText()}</div>
            <span id="S__header">Saturation: </span>
            <input
                id="S__slider"
                type="range"
                min="0" max="100"
                value={props.hsl[1]}
                onChange={onChangeSaturation}
                step="1"
                className="slider"/>
            <svg height="60" width="60" id="S__circle">
                <circle cx="30" cy="30" r="30" fill={hslString}/>
            </svg>
            <div id="S__text">{getSaturationText()}</div>
        </div>
    );
}

export default LightnessAndSaturation;