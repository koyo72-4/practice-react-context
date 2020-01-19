import React from 'react';
import ColorContext from '../context/ColorContext';

export const ColorToggle = () => {
    return (
        <ColorContext.Consumer>
            {({ medium, toggleColor }) => (
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
            )}
        </ColorContext.Consumer>
    );
};
