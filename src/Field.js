import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';
import { AppContext } from './context/appContext';
import Item from './Item';
import ItemTypes from './types';
import { isEmpty } from 'lodash';
import { checkAndAssignAllowedPositions, trackWinner } from './controller';
import beep from './sounds/buzz.mp3';
import useSound from 'use-sound';

const Field = ({ pos }) => {
	const {
		data,
		players,
		dispatchData,
		allowedPositions,
		dispatchPlayers,
		dispatchWinner,
		dispatchLastMoved
	} = useContext(AppContext);
	const [play] = useSound(beep, { volume: 0.2 });

	const [, field] = useDrop({
		accept: [ItemTypes.CARD],
		collect: monitor => ({
			highlighted: monitor.canDrop(),
			hovered: monitor.isOver()
		}),
		drop: (item, monitor) => {
			const alllowed = checkAndAssignAllowedPositions(item.current_pos).includes(pos);
			if (alllowed) {
				if (isEmpty(data[pos])) {
					dispatchData({ type: 'ADD_TO_POS', pos: pos, posData: { id: item.id, player: item.player } });
					dispatchData({ type: 'REMOVE_FROM_POS', pos: item.current_pos });
					dispatchPlayers({
						type: 'ADD_POSITION',
						prevPos: item.current_pos,
						curPos: pos,
						player: item.player
					});

					if (trackWinner(players[item.player].positions)) {
						dispatchWinner({ type: 'HAS_WINNER', winner: players[item.player] });
					}

					dispatchLastMoved({ type: 'MOVED_BY', player: item.player });
				}
			} else {
				play();
			}
		}
	});

	return (
		<div
			ref={field}
			className="field"
			style={{
				backgroundColor: allowedPositions.includes(pos) && isEmpty(data[pos]) ? '#11ff00' : null
			}}
		>
			{!isEmpty(data[pos]) && <Item id={data[pos].id} player={data[pos].player} current_pos={pos} />}
		</div>
	);
};

export default Field;
