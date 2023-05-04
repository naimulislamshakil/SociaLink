import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import Profile from '../../components/Profile';
import React from 'react';
import Post from '../../components/Post';
import FriendList from '../../components/FriendList';

const Home = () => {
	const isNotMobile = useMediaQuery('(min-width:1000px)');
	return (
		<Box>
			<Box
				width="100%"
				padding="2rem 6%"
				display={isNotMobile ? 'flex' : 'block'}
				gap="0.5rem"
				justifyContent="space-between"
			>
				<Box flexBasis={isNotMobile ? '26%' : undefined}>
					<Profile />
				</Box>
				<Box
					flexBasis={isNotMobile ? '42%' : undefined}
					mt={isNotMobile ? undefined : '2rem'}
				>
					<Post />
				</Box>
				{isNotMobile && (
					<Box flexBasis="26%">
						<FriendList />
					</Box>
				)}
			</Box>
		</Box>
	);
};

export default Home;
