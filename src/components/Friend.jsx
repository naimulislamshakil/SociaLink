import { PersonAddOutlined, PersonRemoveOutlined } from '@mui/icons-material';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { tokens } from '../theme';
import FlexBetween from './FlexBeyween';
import UserImage from './UserImage';

const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const friends = useSelector((state) => state.user.friends);
	const token = useSelector((state) => state.token);

	const isFriend = friends.find((friend) => friend._id === friendId);

	const patchFriend = () => {};
	const profile = () => {
		navigate(`/profile/${friendId}`);
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
				onClick={() => patchFriend()}
				sx={{ backgroundColor: colors.grey[900], p: '0.6rem' }}
			>
				{isFriend ? (
					<PersonRemoveOutlined sx={{ color: colors.grey[100] }} />
				) : (
					<PersonAddOutlined sx={{ color: colors.grey[100] }} />
				)}
			</IconButton>
		</FlexBetween>
	);
};

export default Friend;
