import React, { useContext, useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { AppContext } from './context/appContext';

const Config = () => {
	return (
		<div>
			<div className="row">
				<div className="col-5 mx-auto border-right">
					<PlayerConfig title="Player 1" player="P1" defaultColor="#f56512" />
				</div>
				<div className="col-5 mx-auto ">
					<PlayerConfig title="Player 2" player="P2" defaultColor="#8f12f5" />
				</div>
			</div>
		</div>
	);
};

export default Config;

const PlayerConfig = ({ player, title, defaultColor }) => {
	const { players, dispatchPlayers } = useContext(AppContext);

	const [name, setName] = useState(players[player].name);
	const [team, setTeam] = useState(players[player].team);
	const [initials, setInitials] = useState(players[player].initials);
	const [shape, setShape] = useState(players[player].shape);
	const [color, setColor] = useState(players[player].color);
	const [isSaved, setIsSaved] = useState(false);
	const [hasNotChanged, setHasNotChanged] = useState(false);

	const handleAddColor = color => {
		setColor(color);
	};

	const handleAddPlayerInfo = () => {
		const playerInfo = {};
		if (name !== players[player].name) playerInfo.name = name;
		if (team !== players[player].team) playerInfo.team = team;
		if (initials !== players[player].initials) playerInfo.initials = initials;
		if (shape !== players[player].shape) playerInfo.shape = shape;
		if (color !== players[player].color) playerInfo.color = color;

		if (!isEmpty(playerInfo)) {
			dispatchPlayers({ type: 'ADD_INFO', player, info: playerInfo });
			setIsSaved(true);
		} else {
			setHasNotChanged(true);
		}
	};

	useEffect(
		() => {
			if (isSaved) {
				setTimeout(() => {
					setIsSaved(false);
				}, 2000);
			}
		},
		[isSaved]
	);

	useEffect(
		() => {
			if (hasNotChanged) {
				setTimeout(() => {
					setHasNotChanged(false);
				}, 2000);
			}
		},
		[hasNotChanged]
	);

	return (
		<div>
			<h4 className="my-2 text-center">{title}</h4>
			<form>
				<div className="form-group">
					<input
						value={name}
						onChange={e => setName(e.target.value)}
						type="text"
						className="form-control"
						id="playerName"
						placeholder="player name"
					/>
				</div>
				<div className="form-group">
					<input
						value={team}
						onChange={e => setTeam(e.target.value)}
						type="text"
						className="form-control"
						id="teamName"
						placeholder="Team Name"
					/>
				</div>
				<div className="form-group">
					<input
						value={initials}
						onChange={e => setInitials(e.target.value)}
						type="text"
						className="form-control"
						id="initials"
						placeholder="initials Eg. P1, T1, SA"
					/>
				</div>
				<div className="form-group">
					<select value={shape} onChange={e => setShape(e.target.value)} className="form-control" id="shape">
						<option>---choose shape---</option>
						<option value="circle">circle</option>
						<option value="square">square</option>
					</select>
				</div>
			</form>

			<div className="colors mt-3">
				<div className="d-flex align-items-center">
					<h5>Choose Color</h5>
					<div style={{ backgroundColor: color || defaultColor }} className="chosen-color mx-2 rounded" />
				</div>
				<button
					onClick={e => handleAddColor(e.target.name)}
					className="color m-1"
					name="#432818"
					style={{ backgroundColor: '#432818' }}
				/>
				<button
					onClick={e => handleAddColor(e.target.name)}
					className="color m-1"
					name="#370617"
					style={{ backgroundColor: '#370617' }}
				/>
				<button
					onClick={e => handleAddColor(e.target.name)}
					className="color m-1"
					name="#6a040f"
					style={{ backgroundColor: '#6a040f' }}
				/>
				<button
					onClick={e => handleAddColor(e.target.name)}
					className="color m-1"
					name="#e63946"
					style={{ backgroundColor: '#e63946' }}
				/>
				<button
					onClick={e => handleAddColor(e.target.name)}
					className="color m-1"
					name="#e5383b"
					style={{ backgroundColor: '#e5383b' }}
				/>
				<button
					onClick={e => handleAddColor(e.target.name)}
					className="color m-1"
					name="#f77f00"
					style={{ backgroundColor: '#f77f00' }}
				/>
				<button
					onClick={e => handleAddColor(e.target.name)}
					className="color m-1"
					name="#f72585"
					style={{ backgroundColor: '#f72585' }}
				/>
				<button
					onClick={e => handleAddColor(e.target.name)}
					className="color m-1"
					name="#bc00dd"
					style={{ backgroundColor: '#bc00dd' }}
				/>
				<button
					onClick={e => handleAddColor(e.target.name)}
					className="color m-1"
					name="#7400b8"
					style={{ backgroundColor: '#7400b8' }}
				/>
				<button
					onClick={e => handleAddColor(e.target.name)}
					className="color m-1"
					name="#1d3557"
					style={{ backgroundColor: '#1d3557' }}
				/>
				<button
					onClick={e => handleAddColor(e.target.name)}
					className="color m-1"
					name="#0353a4"
					style={{ backgroundColor: '#0353a4' }}
				/>
				<button
					onClick={e => handleAddColor(e.target.name)}
					className="color m-1"
					name="#143601"
					style={{ backgroundColor: '#143601' }}
				/>
				<button
					onClick={e => handleAddColor(e.target.name)}
					className="color m-1"
					name="#007f5f"
					style={{ backgroundColor: '#007f5f' }}
				/>
				<button
					onClick={e => handleAddColor(e.target.name)}
					className="color m-1"
					name="#2b9348"
					style={{ backgroundColor: '#2b9348' }}
				/>
				<button
					onClick={e => handleAddColor(e.target.name)}
					className="color m-1"
					name="#0b090a"
					style={{ backgroundColor: '#0b090a' }}
				/>
				<button
					onClick={e => handleAddColor(e.target.name)}
					className="color m-1"
					name="#5e6472"
					style={{ backgroundColor: '#5e6472' }}
				/>
			</div>

			<div className="d-flex justify-content-between align-items-center mt-5">
				<button onClick={handleAddPlayerInfo} className="btn btn-success w-25">
					Save
				</button>

				{hasNotChanged && (
					<div className="alert alert-warning mb-0" role="alert">
						No update to save
					</div>
				)}

				{isSaved && (
					<div className="alert alert-success mb-0" role="alert">
						{title} Info Updated...
					</div>
				)}
			</div>
		</div>
	);
};
