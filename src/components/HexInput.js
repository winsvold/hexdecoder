import React from 'react';
import './hexinputcss.css';

function Inputfelt(props) {
  const onchange = event => {
    props.setHexcode(event.target.value.slice(0, 6).replace(/[^0-9A-Fa-f]+/, ''));
  };
  return (
    <div className="Input__flex">
      <span className="Input__label">#</span>
      <input value={props.hexCode} spellCheck={false} type="text" onChange={onchange} className="Input__field"/>
    </div>
  );
}

export default Inputfelt;