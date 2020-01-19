import React from 'react';
import ColorContext from '../context/ColorContext';

export const HighlightedText = ({ children }) => {
    return (
        <ColorContext.Consumer>
            {({ medium }) => (
                <em className={`text-${medium}`}>
                    {children}
                </em>
            )}
        </ColorContext.Consumer>
    );
};
