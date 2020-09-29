import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

ReactDOM.render(
	<React.StrictMode>
		<DndProvider backend={HTML5Backend}>
			<App />
		</DndProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
