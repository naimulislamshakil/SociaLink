import { Box, useMediaQuery } from '@mui/material';
import axios from 'axios';
import OwnProfile from 'pages/OwnProfile';
import OwnCreatePost from 'pages/OwnProfile/OwnCreatePost';
import OwnFriendList from 'pages/OwnProfile/OwnFriendList';
import OwnPost from 'pages/OwnProfile/OwnPost';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { singleUser } from '../../Store/Slices/UserSlices';

const Profile = () => {
	const { id } = useParams();
	const token = useSelector((state) => state.token);
	const dispatch = useDispatch();
	const isNonMobileScreens = useMediaQuery('(min-width:1000px)');

	const getSingleUser = async () => {
		const res = await axios.get(
			`https://socialinkagfha.onrender.com/api/v1/getSingleUser/${id}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Basic ${token}`,
				},
			}
		);

		dispatch(
			singleUser({
				singleUser: res.data.singleUser,
				singlePost: res.data.singlePost,
			})
		);
	};

	useEffect(() => {
		getSingleUser();
	}, [id, token]);
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
					<OwnProfile />
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
