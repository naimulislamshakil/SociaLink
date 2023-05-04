import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const Loading = () => {
	return (
		<Box
			display="flex"
			height="100vh"
			justifyContent="center"
			alignItems="center"
		>
			<CircularProgress color="secondary" />
		</Box>
	);
};

export default Loading;
