import React, { useContext } from 'react';
import Field from './Field';
import Item from './Item';
import { isEmpty } from 'lodash';
import { AppContext } from './context/appContext';

const GamePage = () => {
	const { data, players, lastMoved } = useContext(AppContext);

	return (
		<div className="row">
			<div className="col-3 position-relative">
				{lastMoved === 'P2' && (
					<div className="bg-success p-2 rounded position-absolute ml-5 mt-2 text-light">
						<small> Your turn to move </small>
					</div>
				)}
				<div className="player">
					<h4
						className="P1 p-2 rounded font-weight-bold border-bottom border-secondary"
						style={{ color: players.P1.color }}
					>
						{players.P1.name}
					</h4>
					<div className="mb-3 py-1 px-3 rounded text-muted">
						<small>{players.P1.team}</small>
					</div>
					<div className="item-field my-1">
						{isEmpty(data.P1_POS1) ? (
							undefined
						) : (
							<Item id={data.P1_POS1.id} player={data.P1_POS1.player} current_pos="P1_POS1" />
						)}
					</div>
					<div className="item-field my-1">
						{isEmpty(data.P1_POS2) ? (
							undefined
						) : (
							<Item id={data.P1_POS2.id} player={data.P1_POS2.player} current_pos="P1_POS2" />
						)}
					</div>
					<div className="item-field my-1">
						{isEmpty(data.P1_POS3) ? (
							undefined
						) : (
							<Item id={data.P1_POS3.id} player={data.P1_POS3.player} current_pos="P1_POS3" />
						)}
					</div>
				</div>
			</div>
			<div className="col-6 board-container">
				<img src="/bg.png" width="75%" alt="" />
				<div className="board">
					<div className="board-row">
						<Field pos="POS1" />
						<Field pos="POS2" />
						<Field pos="POS3" />
					</div>
					<div className="board-row">
						<Field pos="POS4" />
						<Field pos="POS5" />
						<Field pos="POS6" />
					</div>
					<div className="board-row">
						<Field pos="POS7" />
						<Field pos="POS8" />
						<Field pos="POS9" />
					</div>
				</div>
			</div>
			<div className="col-3 position-relative">
				{lastMoved === 'P1' && (
					<div className="bg-success p-2 rounded position-absolute ml-5 mt-2 text-light">
						<small> Your turn to move </small>
					</div>
				)}
				<div className="player">
					<h4
						className="P1 p-2 rounded font-weight-bold border-bottom border-secondary"
						style={{ color: players.P2.color }}
					>
						{players.P2.name}
					</h4>
					<div className="mb-3 py-1 px-3 rounded text-muted">
						<small>{players.P2.team}</small>
					</div>
					<div className="item-field my-1">
						{isEmpty(data.P2_POS1) ? (
							undefined
						) : (
							<Item id={data.P2_POS1.id} player={data.P2_POS1.player} current_pos="P2_POS1" />
						)}
					</div>
					<div className="item-field my-1">
						{isEmpty(data.P2_POS2) ? (
							undefined
						) : (
							<Item id={data.P2_POS2.id} player={data.P2_POS2.player} current_pos="P2_POS2" />
						)}
					</div>
					<div className="item-field my-1">
						{isEmpty(data.P2_POS3) ? (
							undefined
						) : (
							<Item id={data.P2_POS3.id} player={data.P2_POS3.player} current_pos="P2_POS3" />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default GamePage;
