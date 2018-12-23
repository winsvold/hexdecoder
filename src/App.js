import React, {useState} from 'react';
import './App.css';
import HexInput from './components/HexInput';
import BarChart from './components/BarChart';
import convert from 'color-convert';
import HSLWheel from "./components/HSLWheel";
import LightnessAndSaturation from "./components/LightnessAndSaturation";
import getShorthand from "./components/Shorthand";

function App() {
    const [hsl, setHsl] = useState([0, 0, 0]);
    const hex = convert.hsl.hex(hsl);
    const rgb = convert.hsl.rgb(hsl);
    const shorthand = getShorthand(hex);
    const setHex = h => setHsl(convert.hex.hsl(h));
    return (
        <div className="App">
            <HexInput hexCode={hex} setHexcode={setHex}/>
            <div>
                <p>hue: {hsl[0]} saturation: {hsl[1]} lightness: {hsl[2]}</p>
                <p>shorthand: #{shorthand}</p>
            </div>
            <div class="oneline">
                <BarChart rgb={rgb}/>
                <HSLWheel hsl={hsl} setHsl={setHsl}/>
            </div>
            <LightnessAndSaturation hsl={hsl} setHsl={setHsl}/>
        </div>
    );
}

export default App;
