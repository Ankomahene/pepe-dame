import React from 'react';

const Loader = ({ isActive, children }) => {
	return (
		<div className={isActive ? 'loader-active' : 'loader-not-active'}>
			<div className="d-flex justify-content-center align-items-center h-100">
				<div className="text-center bg-light p-5 rounded shadow">{children}</div>
			</div>
		</div>
	);
};

export default Loader;
