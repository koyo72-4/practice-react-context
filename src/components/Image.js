import React from 'react';
import SportContext from '../context/SportContext';

export const Image = () => {
    return (
        <SportContext.Consumer>
            {({ name, image }) => (
                <img
                    src={image}
                    alt={`a ${name}${name === 'soccer' ? ' ball' : ''}`}
                    style={{width: '60px', height: 'auto'}}
                />
            )}
        </SportContext.Consumer>
    );
};
