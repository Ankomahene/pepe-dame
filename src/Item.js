import React, { useContext } from 'react';
import { useDrag } from 'react-dnd';
import { AppContext } from './context/appContext';
import { checkAndAssignAllowedPositions } from './controller';
import ItemTypes from './types';

const Item = ({ id, player, current_pos }) => {
	const { players, dispatchAllowedPositons, lastMoved } = useContext(AppContext);

	const [{ isDragging }, item] = useDrag({
		item: { id, type: ItemTypes.CARD, player, current_pos },
		collect: monitor => ({
			isDragging: monitor.isDragging()
		}),
		begin: monitor => {
			dispatchAllowedPositons({
				type: 'ADD_ALLOWED_POSITIONS',
				allowed: checkAndAssignAllowedPositions(current_pos)
			});
		},

		end: () => {
			dispatchAllowedPositons({ type: 'REMOVE_ALLOWED_POSITIONS' });
		}
	});

	return (
		<div
			ref={lastMoved !== player ? item : null}
			style={{
				opacity: isDragging ? 0 : 1,
				cursor: isDragging ? 'pointer' : 'grab',
				backgroundColor: players[player].color
			}}
			className={`item ${player}-item ${players[player].shape} text-light font-weight-bold`}
		>
			{players[player].initials}
		</div>
	);
};

export default Item;
