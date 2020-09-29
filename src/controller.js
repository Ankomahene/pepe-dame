import { difference } from 'lodash';

export const checkAndAssignAllowedPositions = currentPos => {
	switch (currentPos) {
		case 'P1_POS1':
		case 'P1_POS2':
		case 'P1_POS3':
		case 'P2_POS1':
		case 'P2_POS2':
		case 'P2_POS3':
			return ['POS1', 'POS2', 'POS3', 'POS4', 'POS5', 'POS6', 'POS7', 'POS8', 'POS9'];

		case 'POS1':
			return ['POS2', 'POS4', 'POS5'];
		case 'POS2':
			return ['POS1', 'POS3', 'POS5'];
		case 'POS3':
			return ['POS2', 'POS5', 'POS6'];
		case 'POS4':
			return ['POS1', 'POS5', 'POS7'];
		case 'POS5':
			return ['POS1', 'POS2', 'POS3', 'POS4', 'POS6', 'POS3', 'POS7', 'POS8', 'POS9'];
		case 'POS6':
			return ['POS3', 'POS5', 'POS9'];
		case 'POS7':
			return ['POS4', 'POS5', 'POS8'];
		case 'POS8':
			return ['POS7', 'POS5', 'POS9'];
		case 'POS9':
			return ['POS8', 'POS5', 'POS6'];
		default:
			return [];
	}
};

export const trackWinner = trackerList => {
	if (
		difference(['POS2', 'POS3', 'POS1'], trackerList).length === 0 ||
		difference(['POS4', 'POS5', 'POS6'], trackerList).length === 0 ||
		difference(['POS7', 'POS8', 'POS9'], trackerList).length === 0 ||
		difference(['POS1', 'POS4', 'POS7'], trackerList).length === 0 ||
		difference(['POS2', 'POS5', 'POS8'], trackerList).length === 0 ||
		difference(['POS3', 'POS6', 'POS9'], trackerList).length === 0 ||
		difference(['POS1', 'POS5', 'POS9'], trackerList).length === 0 ||
		difference(['POS3', 'POS5', 'POS7'], trackerList).length === 0
	) {
		return true;
	} else {
		return false;
	}
};
