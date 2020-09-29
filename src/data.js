import { v4 as uuidv4 } from 'uuid';

export const playersDefaultData = {
	P1: {
		name: 'Player 1',
		team: 'Team 1',
		initials: 'P1',
		color: '#f56512',
		shape: 'circle',
		positions: []
	},
	P2: {
		name: 'Player 2',
		team: 'Team 2',
		initials: 'P2',
		color: '#8f12f5',
		shape: 'square',
		positions: []
	}
};

export const positionsDefaultData = {
	P1_POS1: { id: uuidv4(), player: 'P1' },
	P1_POS2: { id: uuidv4(), player: 'P1' },
	P1_POS3: { id: uuidv4(), player: 'P1' },
	P2_POS1: { id: uuidv4(), player: 'P2' },
	P2_POS2: { id: uuidv4(), player: 'P2' },
	P2_POS3: { id: uuidv4(), player: 'P2' },
	POS1: {},
	POS2: {},
	POS3: {},
	POS4: {},
	POS5: {},
	POS6: {},
	POS7: {},
	POS8: {},
	POS9: {}
};
