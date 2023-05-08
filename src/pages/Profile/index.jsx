import { Box, useMediaQuery } from '@mui/material';
import OwnProfile from 'pages/OwnProfile';
import OwnCreatePost from 'pages/OwnProfile/OwnCreatePost';
import OwnFriendList from 'pages/OwnProfile/OwnFriendList';
import OwnPost from 'pages/OwnProfile/OwnPost';
import React from 'react';

import { useParams } from 'react-router-dom';

const Profile = () => {
	const { id } = useParams();
	const isNonMobileScreens = useMediaQuery('(min-width:1000px)');
	return (
		<Box>
			<Box
				width="100%"
				padding="2rem 6%"
				display={isNonMobileScreens ? 'flex' : 'block'}
				gap="2rem"
				justifyContent="center"
			>
				<Box flexBasis={isNonMobileScreens ? '26%' : undefined}>
					<OwnProfile id={id} />
					<Box m="2rem 0" />
					<OwnFriendList />
				</Box>

				<Box
					flexBasis={isNonMobileScreens ? '42%' : undefined}
					mt={isNonMobileScreens ? undefined : '2rem'}
				>
					<OwnCreatePost />
					<Box m="2rem 0" />
					<OwnPost />
				</Box>
			</Box>
		</Box>
	);
};

export default Profile;
