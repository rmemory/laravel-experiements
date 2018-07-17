import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({ message }) => (
	<h2>
		{`Loading ${message}...`}
	</h2>
);

Loader.propTypes = {
	message: PropTypes.string.isRequired,
};

export default Loader;
