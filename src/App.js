import React, {useState} from 'react';
import './App.css';
import HexInput from './components/HexInput';
import BarChart from './components/BarChart';
import convert from 'color-convert';
import HSLWheel from "./components/HSLWheel";
import LightnessAndSaturation from "./components/LightnessAndSaturation";
import getShorthand from "./components/Shorthand";
import Dangeros from "./dangeros/Dangeros";
import CompareToShothand from "./components/CompareToShorhand";

function App() {
    const [hsl, setHsl] = useState([0, 50, 50]);
    const [hex, setHex] = useState('');
    const rgb = convert.hsl.rgb(hsl);
    const shorthand = getShorthand(hex);
    return (
        <div className="App">
            <Dangeros hex={hex}/>
            <CompareToShothand hex={hex} shorthand={shorthand} hsl={hsl}/>
            <div className="oneline">
                <HexInput hex={hex} setHex={setHex} setHsl={setHsl}/>
                <div>
                    <p>hue: {hsl[0]} saturation: {hsl[1]} lightness: {hsl[2]}</p>
                    <p>shorthand: #{shorthand}</p>
                </div>
            </div>
            <div className="oneline">
                <BarChart rgb={rgb}/>
                <HSLWheel hsl={hsl} setHsl={setHsl} setHex={setHex}/>
            </div>
            <LightnessAndSaturation hsl={hsl} setHex={setHex} setHsl={setHsl}/>
        </div>
    );
}

export default App;
