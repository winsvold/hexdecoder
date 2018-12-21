import React from 'react';
import './hslwheel.css';
import hexToHsl from "hex-to-hsl";

function HSLWheel(props) {
  const hue = hexToHsl(props.hexCode)[0];
  const needlestyle = {
    transform: `rotate(${hue - 90}deg) translateX(6em) `
  };
  return (
    <ul className="hslwheel">
      <div className="needle" style={needlestyle}/>
      <li className="red"><span>Red</span></li>
      <li className="orange"><span>Orange</span></li>
      <li className="yellow"><span>Yellow</span></li>
      <li className="chartreuse"><span>Chartreuse</span></li>
      <li className="green"><span>Green</span></li>
      <li className="springgreen"><span>Spring Green</span></li>
      <li className="cyan"><span>Cyan</span></li>
      <li className="azure"><span>Azure</span></li>
      <li className="blue"><span>Blue</span></li>
      <li className="purple"><span>Purple</span></li>
      <li className="magenta"><span>Magenta</span></li>
      <li className="rose"><span>Rose</span></li>
    </ul>
  );
}

export default HSLWheel;