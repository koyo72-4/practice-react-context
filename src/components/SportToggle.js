import React, { useContext } from 'react';
import SportContext, { soccerContext, baseballContext } from '../context/SportContext';

export const SportToggle = () => {
    const { name, setSportInfo } = useContext(SportContext);

    const toggleSport = () => {
        setSportInfo(
            name === 'soccer'
                ? { ...baseballContext, setSportInfo }
                : { ...soccerContext, setSportInfo }
        );
    };

    return (
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
    );
};
