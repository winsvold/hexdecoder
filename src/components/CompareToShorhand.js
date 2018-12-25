import React from 'react';
import './compareToShorthand.css';

function CompareToShothand(props) {
    const hash = props.hex !== '' ? '#' : '';
    let color = "FFF";
    if(props.hsl[1] > 50 ||props.hsl[2] > 50){
        color = "000";
    }
    return (
        <div className="compareShorthand" >
            <div style={{backgroundColor: `#${props.hex}`, color: `#${color}`}}>{hash + props.hex}</div>
            <div style={{backgroundColor: `#${props.shorthand}`, color: `#${color}`}}>{hash + props.shorthand}</div>
        </div>
    );
}

export default CompareToShothand;