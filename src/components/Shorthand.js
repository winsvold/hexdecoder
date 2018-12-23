import './lightnessAndSaturation.css';

export default function getShorthand(hex) {
    let result = '';
    if(hex && hex.length === 6) {
        result = hex.charAt(0) + hex.charAt(2) + hex.charAt(4);
        result = result.toUpperCase();
    }
    return (
        result
    );
}
