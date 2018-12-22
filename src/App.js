import React, {useState} from 'react';
import './App.css';
import HexInput from './components/HexInput';
import BarChart from './components/BarChart';
import hexToHsl from 'hex-to-hsl';
import hexToRgb from 'hex-to-rgb';
import HSLWheel from "./components/HSLWheel";
import Lightness from "./components/Lightness";
import getShorthand from "./components/Shorthand";

function App() {
    const [hexCode, setHexcode] = useState('');
    const hsl = hexToHsl(hexCode);
    const rgb = hexToRgb(hexCode);
    const shorthand = getShorthand(hexCode);
    return (
        <div className="App">
            <HexInput hexCode={hexCode} setHexcode={setHexcode}/>
            <div>
                <p>hue: {hsl[0]} saturation: {hsl[1]} lightness: {hsl[2]}</p>
                <p>shorthand: #{shorthand}</p>
            </div>
            <BarChart rgb={rgb}/>
            <HSLWheel hexCode={hexCode}/>
            <Lightness hsl={hsl} setHexcode={setHexcode}/>
        </div>
     );
}

export default App;
