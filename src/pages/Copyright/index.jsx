import { Typography, useTheme } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';

function Copyright(props) {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{'Copyright © '}
			{new Date().getFullYear()}
			{' Naimul Islam. All rights reserved.'}
		</Typography>
	);
}

export default Copyright;
