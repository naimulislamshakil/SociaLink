import React from 'react';
import { Box, Typography } from '@mui/material';
import Copyright from '../Copyright';

const Footer = () => {
	return (
		<Box>
			<Typography variant="h2" fontWeight="bold" textAlign="center" mt={8}>
				SOCIALINK
			</Typography>
			<Copyright sx={{ mt: 2, mb: 4 }} />
		</Box>
	);
};

export default Footer;
