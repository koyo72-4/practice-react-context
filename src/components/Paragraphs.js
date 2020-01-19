import React from 'react';
import { HighlightedText } from './HighlightedText';
import { Image } from './Image';
import ColorContext from '../context/ColorContext';
import SportContext from '../context/SportContext';

export const Paragraphs = () => {
    return (
        <ColorContext.Consumer>
            {({ dark }) => (
                <SportContext.Consumer>
                    {({ name }) => (
                        <>
                            <p className={`text-${dark}`}>
                                <span>Here is some </span>
                                <HighlightedText>
                                    gorgeous
                                </HighlightedText>
                                <span> text.</span>
                            </p>
                            <p className={`text-${dark}`}>
                                <span>My favorite sport is </span>
                                <HighlightedText>
                                    {`${name}.`}
                                </HighlightedText>
                            </p>
                            <Image />
                        </>
                    )}
                </SportContext.Consumer>
            )}
        </ColorContext.Consumer>
    );
};
