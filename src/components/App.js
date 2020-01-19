import React from 'react';
import { ColorToggle } from './ColorToggle';
import { SportToggle } from './SportToggle';
import { Container } from './Container';
import ColorContext, { purpleContext, greenContext } from '../context/ColorContext';
import SportContext, { soccerContext, baseballContext } from '../context/SportContext';

export default class App extends React.Component {
	state = {
		colorInfo: {
			...purpleContext,
			toggleColor: () => {
				this.setState(prevState =>
					prevState.colorInfo.medium === 'purple'
						? { colorInfo: { ...prevState.colorInfo, ...greenContext } }
						: { colorInfo: { ...prevState.colorInfo, ...purpleContext } }
				);
			}
		},
		sportInfo: {
			...soccerContext,
			toggleSport: () => {
				this.setState(prevState =>
					prevState.sportInfo.name === 'soccer'
						? { sportInfo: { ...prevState.sportInfo, ...baseballContext } }
						: { sportInfo: { ...prevState.sportInfo, ...soccerContext } }
				);
			}
		}
	};

	render() {
		return (
			<ColorContext.Provider value={this.state.colorInfo}>
				<SportContext.Provider value={this.state.sportInfo}>
					<ColorToggle />
					<SportToggle />
					<div style={{margin: '20px'}}>
						<Container position="left" />
						<Container position="right" />
					</div>
				</SportContext.Provider>
			</ColorContext.Provider>
		);
	}
}
