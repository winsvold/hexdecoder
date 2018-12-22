import React from 'react';
import './barchart.css';

class BarChart extends React.Component {

    calculateBarValue = (color) => {
        const percent = Math.floor(color/255*100);
        return 101 - percent;
    };

    render() {
        const BarR = document.getElementById('Bar-r');
        const BarG = document.getElementById('Bar-g');
        const BarB = document.getElementById('Bar-b');

        const r  = this.calculateBarValue(this.props.rgb[0]);
        const g  = this.calculateBarValue(this.props.rgb[1]);
        const b  = this.calculateBarValue(this.props.rgb[2]);

        if(BarR) {
            BarR.style.setProperty('grid-row-start', r)
        }
        if(BarG) {
            BarG.style.setProperty('grid-row-start', g)
        }
        if(BarB) {
            BarB.style.setProperty('grid-row-start', b)
        }
        return (
            <div className="BarChart">
                <div id="Bar-r"></div>
                <div id="Bar-g"></div>
                <div id="Bar-b"></div>
            </div>
        )
    }
}

export default BarChart;