import React from 'react';
import SportContext from '../context/SportContext';

export const SportToggle = () => {
    return (
        <SportContext.Consumer>
            {({ name, toggleSport }) => (
                <div style={{margin: '20px'}}>
                    <label htmlFor="sport-select">What is your favorite sport? </label>
                    <select
                        id="sport-select"
                        value={name}
                        onChange={toggleSport}
                    >
                        <option value="soccer">soccer</option>
                        <option value="baseball">baseball</option>
                    </select>
                </div>
            )}
        </SportContext.Consumer>
    );
};
