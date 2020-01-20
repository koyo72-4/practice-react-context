import React, { useContext } from 'react';
import ColorContext from '../context/ColorContext';

export const HighlightedText = ({ children }) => {
    const { medium } = useContext(ColorContext);
    return (
        <em className={`text-${medium}`}>
            {children}
        </em>
    );
};
