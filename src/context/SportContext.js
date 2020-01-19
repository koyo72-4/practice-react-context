import React from 'react';

export const soccerContext = {
    name: 'soccer',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/1000px-Soccerball.svg.png'
};

export const baseballContext = {
    name: 'baseball',
    image: 'https://upload.wikimedia.org/wikipedia/en/1/1e/Baseball_%28crop%29.jpg'
};

const SportContext = React.createContext();
SportContext.displayName = 'Sport';
export default SportContext;
