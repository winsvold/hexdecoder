import React from 'react';
import './hslwheel.css';
import convert from 'color-convert';


function HSLWheel(props) {
  const hue = props.hsl[0];
  const needlestyle = {
    transform: `rotate(${hue - 90}deg) translateX(6em) `
  };
  const setHue = h => () => {
      props.setHsl([h, props.hsl[1], props.hsl[2]]);
      console.log(props.hsl, convert.hsl.hex(60,0, 0));
      props.setHex(convert.hsl.hex(props.hsl[0], props.hsl[1], props.hsl[2]));
  };
  return (
    <ul className="hslwheel">
      <div className="needle" style={needlestyle}/>
      <li className="red" onClick={setHue(0)}><span>Red</span></li>
      <li className="orange" onClick={setHue(30)}><span>Orange</span></li>
      <li className="yellow" onClick={setHue(60)}><span>Yellow</span></li>
      <li className="chartreuse" onClick={setHue(90)}><span>Chart-reuse</span></li>
      <li className="green" onClick={setHue(120)}><span>Green</span></li>
      <li className="springgreen" onClick={setHue(150)}><span>Spring Green</span></li>
      <li className="cyan" onClick={setHue(180)}><span>Cyan</span></li>
      <li className="azure" onClick={setHue(210)}><span>Azure</span></li>
      <li className="blue" onClick={setHue(240)}><span>Blue</span></li>
      <li className="purple" onClick={setHue(270)}><span>Purple</span></li>
      <li className="magenta" onClick={setHue(300)}><span>Magenta</span></li>
      <li className="rose" onClick={setHue(330)}><span>Rose</span></li>
    </ul>
  );
}

export default HSLWheel;