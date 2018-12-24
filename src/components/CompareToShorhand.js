import React from 'react';
import './compareToShorthand.css';

function CompareToShothand(props) {
    const hash = props.hex !== '' ? '#' : '';
    return (
        <div className="compareShorthand">
            <div style={{backgroundColor: `#${props.hex}`}}>{hash + props.hex}</div>
            <div style={{backgroundColor: `#${props.shorthand}`}}>{hash + props.shorthand}</div>
        </div>
    );
}

export default CompareToShothand;