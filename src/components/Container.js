import React, { useContext } from 'react';
import { Paragraphs } from './Paragraphs';
import ColorContext from '../context/ColorContext';
import '../css/global.css';

export const Container = ({ position }) => {
    const { light, medium } = useContext(ColorContext);
    return (
        <div className={`float-${position} bg-${light} border-${medium}`}>
            <Paragraphs />
        </div>
    );
};
