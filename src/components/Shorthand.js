import './lightnessAndSaturation.css';

export default function getShorthand(hex) {
    if (!hex) {
        return '';
    }
    if(hex.length === 6 ) {
        const result = hex.charAt(0) + hex.charAt(2) + hex.charAt(4);
        return result.toUpperCase();
    }
    if(hex.length === 3 ) {
        return hex;
    }
    return '';
}
