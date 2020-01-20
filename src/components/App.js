import React, { useState } from 'react';
import { ColorToggle } from './ColorToggle';
import { SportToggle } from './SportToggle';
import { Container } from './Container';
import ColorContext, { purpleContext } from '../context/ColorContext';
import SportContext, { soccerContext } from '../context/SportContext';

export const App = () => {
	const [colorInfo, setColorInfo] = useState({ ...purpleContext });
	const [sportInfo, setSportInfo] = useState({ ...soccerContext });

	return (
		<ColorContext.Provider value={{ ...colorInfo, setColorInfo }}>
			<SportContext.Provider value={{ ...sportInfo, setSportInfo }}>
				<ColorToggle />
				<SportToggle />
				<div style={{margin: '20px'}}>
					<Container position="left" />
					<Container position="right" />
				</div>
			</SportContext.Provider>
		</ColorContext.Provider>
	);
};
