import React, { useContext } from 'react';
import SportContext from '../context/SportContext';

export const Image = () => {
    const { name, image } = useContext(SportContext);
    return (
        <img
            src={image}
            alt={`a ${name}${name === 'soccer' ? ' ball' : ''}`}
            style={{width: '60px', height: 'auto'}}
        />
    );
};
