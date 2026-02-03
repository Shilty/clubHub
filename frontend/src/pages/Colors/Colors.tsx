import React from 'react';
import './Colors.css';

const Colors: React.FC = () => {
    const themeColors = [
        { name: 'Wood Brown', hex: '#8B5E3C' },
        { name: 'Light Beige', hex: '#F5F0E1' },
        { name: 'Accent Orange', hex: '#D98849' },
        { name: 'Text Dark', hex: '#3B2F2F' },
        { name: 'Text Light', hex: '#FFFFFF' },
        { name: 'Header/Footer', hex: '#6E4B3A' },
    ];

    return (
        <div className="colors-page">
            <h1>ClubHub Theme Colors</h1>
            <div className="colors-grid">
                {themeColors.map((color) => (
                    <div
                        className="color-box"
                        key={color.name}
                        style={{ backgroundColor: color.hex, color: color.hex === '#FFFFFF' ? '#000' : '#fff' }}
                    >
                        <div className="color-name">{color.name}</div>
                        <div className="color-hex">{color.hex}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Colors;
