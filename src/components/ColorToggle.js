import React, { useContext } from 'react';
import ColorContext, { purpleContext, greenContext } from '../context/ColorContext';

export const ColorToggle = () => {
    const { medium, setColorInfo } = useContext(ColorContext);

    const toggleColor = () => {
        setColorInfo(
            medium === 'purple'
                ? { ...greenContext, setColorInfo }
                : { ...purpleContext, setColorInfo }
        );
    };

    return (
        <div style={{margin: '20px'}}>
            <label htmlFor="color-select">What is your favorite color? </label>
            <select
                id="color-select"
                value={medium}
                onChange={toggleColor}
            >
                <option value="purple">purple</option>
                <option value="green">green</option>
            </select>
        </div>
    );
};
