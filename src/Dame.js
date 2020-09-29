import React, { useContext, useEffect, useState } from 'react';
import useSound from 'use-sound';
import { AppContext } from './context/appContext';
import { isEmpty } from 'lodash';
import Config from './Config';
import GamePage from './GamePage';
import Loader from './Loader';
import bell from './sounds/start.mp3';
import { positionsDefaultData } from './data';
import chime from './sounds/chime.mp3';

const Dame = () => {
	const [playChime] = useSound(chime, { volume: 0.2 });
	const { winner, dispatchData, dispatchWinner, dispatchPlayers, dispatchLastMoved } = useContext(AppContext);
	const [isOnConfigPage, setIsOnConfigPage] = useState(true);
	const [isModalActive, setIsModalActive] = useState(true);
	const [isWinnerModalActive, setIsWinnerModalActive] = useState(false);
	const [setNew, confirmSetNew] = useState(false);
	const [playStartSound] = useSound(bell, { volume: 0.4 });

	const handleReload = () => {
		dispatchData({ type: 'RELOAD_POS', defaultPosData: positionsDefaultData });
		dispatchWinner({ type: 'RESET' });
		dispatchPlayers({ type: 'RESET' });
		dispatchLastMoved({ type: 'RESET' });
		playStartSound();
	};

	const handleGameStart = () => {
		setIsModalActive(false);
		playStartSound();
	};

	const handlePlayAgain = () => {
		setIsWinnerModalActive(false);
		handleReload();
	};

	const handleNewPlayers = () => {
		setIsWinnerModalActive(false);
		confirmSetNew(false);
		handleReload();
		setIsOnConfigPage(true);
	};

	useEffect(
		() => {
			if (!isEmpty(winner)) {
				playChime();
				setIsWinnerModalActive(true);
			}
		},
		[winner, playChime]
	);

	return (
		<div className="App">
			<div className="mb-3 text-light text-center">
				<h1>
					<span className="text-warning">TURNTABL</span> PEPE-DAME
				</h1>
				<div>
					<small>
						Designed By: <span className="text-warning">Shadrack Ankomahene</span>
					</small>
				</div>
			</div>

			<div className="mainContainer">
				{isOnConfigPage ? (
					<div className="animate__animated animate__slideInRight">
						<Config />
						<div className="bg-light text-center mt-3 py-1 border">
							<button
								onClick={() => {
									setIsOnConfigPage(false);
								}}
								className="btn btn-primary"
							>
								Continue <i className="fas fa-arrow-right" />
							</button>
						</div>
					</div>
				) : (
					<div className="animate__animated animate__fadeIn">
						<GamePage />
						<div className="text-center py-2">
							<button
								onClick={() => {
									setIsOnConfigPage(true);
								}}
								className="btn btn-info mx-2"
							>
								Edit <i className="fas fa-pencil-alt" />
							</button>
							<button onClick={() => confirmSetNew(true)} className="btn btn-warning mx-2">
								New <i className="fas fa-user-plus" />
							</button>
							<button onClick={handleReload} className="btn btn-danger mx-2">
								Reload <i className="fas fa-sync" />
							</button>
						</div>
					</div>
				)}
			</div>

			{!isOnConfigPage && (
				<Loader isActive={isModalActive}>
					<h2 className="text-success">Ready to Start?</h2>
					<p>click on start</p>
					<button onClick={handleGameStart} className="btn btn-primary">
						Start
					</button>
				</Loader>
			)}

			{!isEmpty(winner) && (
				<Loader isActive={isWinnerModalActive}>
					<h2>
						{winner.name} <span className="text-success">HAS WON!!</span>
					</h2>
					<div className="mt-5">
						<button onClick={handleNewPlayers} className="btn btn-info mx-2 btn-sm">
							New Players<i className="fas fa-user-plus" />
						</button>
						<button onClick={handlePlayAgain} className="btn btn-primary btn-sm">
							Play Again
						</button>
					</div>
				</Loader>
			)}

			{setNew && (
				<Loader isActive={setNew}>
					<h2>Progress will reset</h2>
					<div>Are you sure you want to continue?</div>
					<div className="mt-5">
						<button onClick={handleNewPlayers} className="btn btn-info mx-2 btn-sm">
							Yes<i className="fas fa-user-plus" />
						</button>
						<button onClick={() => confirmSetNew(false)} className="btn btn-primary btn-sm">
							Cancel
						</button>
					</div>
				</Loader>
			)}
		</div>
	);
};

export default Dame;
