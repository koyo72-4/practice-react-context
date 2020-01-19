import React from 'react';

export const purpleContext = {
    light: 'thistle',
    medium: 'purple',
    dark: 'rebeccapurple'
};

export const greenContext = {
    light: 'greenyellow',
    medium: 'green',
    dark: 'darkgreen'
};

const ColorContext = React.createContext();
ColorContext.displayName = 'Color';
export default ColorContext;
