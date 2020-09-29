import React, { useReducer } from 'react';
import './App.css';
import { AppContext } from './context/appContext';
import {
	allowedPositionsReducer,
	hasAWinnerReducer,
	playersReducer,
	posReducer,
	lastMovedReducer
} from './reducer/reducer';
import Dame from './Dame';
import { playersDefaultData, positionsDefaultData } from './data';

function App() {
	const [data, dispatchData] = useReducer(posReducer, positionsDefaultData);
	const [allowedPositions, dispatchAllowedPositons] = useReducer(allowedPositionsReducer, []);
	const [players, dispatchPlayers] = useReducer(playersReducer, playersDefaultData);
	const [winner, dispatchWinner] = useReducer(hasAWinnerReducer, {});
	const [lastMoved, dispatchLastMoved] = useReducer(lastMovedReducer, '');

	return (
		<AppContext.Provider
			value={{
				data,
				dispatchData,
				players,
				allowedPositions,
				dispatchAllowedPositons,
				dispatchPlayers,
				winner,
				dispatchWinner,
				lastMoved,
				dispatchLastMoved
			}}
		>
			<Dame />
		</AppContext.Provider>
	);
}

export default App;
