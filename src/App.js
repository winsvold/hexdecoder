import React, {useState} from 'react';
import './App.css';
import HexInput from './components/HexInput';
import BarChart from './components/BarChart';
import convert from 'color-convert';
import HSLWheel from "./components/HSLWheel";
import LightnessAndSaturation from "./components/LightnessAndSaturation";
import getShorthand from "./components/Shorthand";

function App() {
    const [hexCode, setHexcode] = useState('');
    const hsl = convert.hex.hsl(hexCode);
    const rgb = convert.hex.rgb(hexCode);
    const shorthand = getShorthand(hexCode);
    return (
        <div className="App">
            <HexInput hexCode={hexCode} setHexcode={setHexcode}/>
            <div>
                <p>hue: {hsl[0]} saturation: {hsl[1]} lightness: {hsl[2]}</p>
                <p>shorthand: #{shorthand}</p>
            </div>
            <div class="oneline">
                <BarChart rgb={rgb}/>
                <HSLWheel hexCode={hexCode}/>
            </div>
            <LightnessAndSaturation hsl={hsl} setHexcode={setHexcode}/>
        </div>
    );
}

export default App;
