import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import Profile from '../../components/Profile';
import React from 'react';
import Post from '../../components/Post';
import FriendList from '../../components/FriendList';

const Home = () => {
	const isMobile = useMediaQuery('(min-width:600px)');
	return (
		<Box>
			<Box
				width="100%"
				padding="2rem 6%"
				display={isMobile ? 'flex' : 'block'}
				gap="0.5rem"
				justifyContent="space-between"
			>
				<Grid md={4}>
					<Profile />
				</Grid>
				<Grid md={4}>
					<Post />
				</Grid>
				<Grid md={4}>
					<FriendList />
				</Grid>
			</Box>
		</Box>
	);
};

export default Home;
