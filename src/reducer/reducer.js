import { uniq } from 'lodash';

export const posReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TO_POS':
			return { ...state, [action.pos]: action.posData };
		case 'REMOVE_FROM_POS':
			return { ...state, [action.pos]: {} };
		case 'RELOAD_POS':
			return action.defaultPosData;
		default:
			return state;
	}
};

export const allowedPositionsReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_ALLOWED_POSITIONS':
			return action.allowed;
		case 'REMOVE_ALLOWED_POSITIONS':
			return [];
		default:
			return state;
	}
};

export const playersReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_INFO':
			Object.keys(action.info).map(key => (state[action.player][key] = action.info[key]));
			return state;

		case 'ADD_POSITION':
			let currentPositions = [];
			if (state[action.player].positions.includes(action.prevPos)) {
				currentPositions = state[action.player].positions.filter(pos => pos !== action.prevPos);
				currentPositions.push(action.curPos);
				state[action.player].positions = uniq(currentPositions);
			} else {
				state[action.player].positions.push(action.curPos);
			}
			state[action.player].positions = uniq(state[action.player].positions);
			return state;
		case 'RESET':
			state.P1.positions = [];
			state.P2.positions = [];
			return state;

		default:
			return state;
	}
};

export const hasAWinnerReducer = (state, action) => {
	switch (action.type) {
		case 'HAS_WINNER':
			return action.winner;
		case 'RESET':
			return {};
		default:
			return state;
	}
};

export const lastMovedReducer = (state, action) => {
	switch (action.type) {
		case 'MOVED_BY':
			return (state = action.player);
		case 'RESET':
			return (state = '');
		default:
			return state;
	}
};
