import React from 'react';
import './hexinputcss.css';
import convert from "color-convert";

function Inputfelt(props) {

    const onchange = event => {
        const input = event.target.value.slice(0, 6).replace(/[^0-9A-Fa-f]+/, '')
        props.setHsl(convert.hex.hsl(input));
        props.setHex(input);
    };
    return (
    <div className="Input__flex">
      <span className="Input__label">#</span>
      <input value={props.hex} spellCheck={false} type="text" onChange={onchange} className="Input__field"/>
    </div>
    );
}

export default Inputfelt;