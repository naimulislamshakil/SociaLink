import { PersonAddOutlined, PersonRemoveOutlined } from '@mui/icons-material';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userParsist } from '../Store/Slices/UserSlices';
import { tokens } from '../theme';
import FlexBetween from './FlexBeyween';
import UserImage from './UserImage';

const Friend = ({ friendId, name, subtitle, userPicturePath, list = '' }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const friends = useSelector((state) => state.user.friends);
	const { _id } = useSelector((state) => state.user);
	const token = useSelector((state) => state.token);

	const isFriend = friends.find((friend) => friend.id === friendId);

	const patchFriend = async () => {
		const res = await axios.get(
			`https://socialinkagfha.onrender.com/addFriend/${friendId}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Basic ${token}`,
				},
			}
		);

		if (res.data.status === 'Success') {
			toast.success(res.data.message);
			dispatch(
				userParsist({
					user: res.data.user,
				})
			);
		} else {
			toast.error(res.data.message);
		}
	};

	const profile = () => {
		navigate(`/profile/${friendId}`);
	};

	const deleteFriend = async () => {
		const res = await axios.get(
			`https://socialinkagfha.onrender.com/removeFriend/${friendId}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Basic ${token}`,
				},
			}
		);
		if (res.data.status === 'Success') {
			toast.success(res.data.message);
			dispatch(
				userParsist({
					user: res.data.user,
				})
			);
		} else {
			toast.error(res.data.message);
		}
	};

	return (
		<FlexBetween>
			<FlexBetween gap="1rem">
				<UserImage image={userPicturePath} size="55px" />
				<Box onClick={() => profile()}>
					<Typography
						color={colors.grey[100]}
						variant="h5"
						fontWeight="500"
						sx={{
							'&:hover': {
								color: colors.grey[100],
								cursor: 'pointer',
							},
						}}
					>
						{name}
					</Typography>
					<Typography color={colors.grey[100]} fontSize="0.75rem">
						{subtitle}
					</Typography>
				</Box>
			</FlexBetween>
			<IconButton
				onClick={list === 'list' ? () => deleteFriend() : () => patchFriend()}
				sx={{ backgroundColor: colors.grey[900], p: '0.6rem' }}
			>
				{_id !== friendId ? (
					list === 'list' ? (
						<PersonRemoveOutlined sx={{ color: colors.grey[100] }} />
					) : (
						!isFriend && <PersonAddOutlined sx={{ color: colors.grey[100] }} />
					)
				) : (
					''
				)}
			</IconButton>
		</FlexBetween>
	);
};

export default Friend;
