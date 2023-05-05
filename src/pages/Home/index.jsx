import { Box, useMediaQuery } from '@mui/material';
import Profile from '../../components/Profile';
import React, { useEffect } from 'react';
import Post from '../../components/Post';
import FriendList from '../../components/FriendList';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const isNotMobile = useMediaQuery('(min-width:1000px)');
	const navigat = useNavigate();
	const token = localStorage.getItem('token');
	const user = JSON.parse(localStorage.getItem('user'));

	useEffect(() => {
		if (!token || !user) {
			navigat('/');
		}
	}, [token, user, navigat]);
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
