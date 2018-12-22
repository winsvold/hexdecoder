import React from 'react';
import './lightness.css';
import hslToHex from 'hsl-to-hex';


function Lightness(props) {
    const hue = props.hsl[0];
    const saturation = props.hsl[1];
    let lightness = props.hsl[2];
    let hslString = "hsl("+ hue + "," + saturation + "%," + lightness + "%)";

    const onChange = event => {
        const hex = hslToHex(hue, saturation, event.target.value);
        props.setHexcode(hex.replace('#',''));
    };

    return (
        <div className="Lightness">
            <span>Lightness: </span>
            <input
                type="range"
                min="0" max="100"
                value={props.hsl[2]}
                onChange={onChange}
                step="1"
                className="slider"
                id="myRange"/>
            <svg height="100" width="100">
                <circle cx="50" cy="50" r="40" fill={hslString}/>
            </svg>
        </div>
    );
}

export default Lightness;