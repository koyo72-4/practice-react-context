import React from 'react';
import { Paragraphs } from './Paragraphs';
import ColorContext from '../context/ColorContext';
import '../css/global.css';

export const Container = ({ position }) => {
    return (
        <ColorContext.Consumer>
            {({ light, medium }) => (
                <div className={`float-${position} bg-${light} border-${medium}`}>
                    <Paragraphs />
                </div>
            )}
        </ColorContext.Consumer>
    );
};
