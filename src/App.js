import React, {useState} from 'react';
import './App.css';
import HexInput from './components/HexInput';
import BarChart from './components/BarChart';
import hexToHsl from 'hex-to-hsl';

function App() {
    const [hexCode, setHexcode] = useState('');
    const hsl = hexToHsl(hexCode);
    console.log(hsl);
    return (
        <div className="App">
            <HexInput hexCode={hexCode} setHexcode={setHexcode}/>
            <p>hue: {hsl[0]} saturation: {hsl[1]} lightness: {hsl[2]}</p>
            <BarChart/>
        </div>
     );
}

export default App;
