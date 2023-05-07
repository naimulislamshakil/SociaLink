import WidgetWrapper from '../WidgetWrapper';
import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import { useSelector } from 'react-redux';
import Friend from '../Friend';

const FriendList = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const friends = useSelector((state) => state.user?.friends);
	return (
		<WidgetWrapper bgcolor={colors.grey[900]}>
			<Typography
				color={colors.grey[100]}
				variant="h5"
				fontWeight="500"
				sx={{ mb: '1.5rem' }}
			>
				Friend List
			</Typography>
			<Box display="flex" flexDirection="column" gap="1.5rem">
				{friends.map((friend) => (
					<Friend
						key={friend._id}
						friendId={friend._id}
						name={`${friend.firstName} ${friend.lastName}`}
						subtitle={friend.occupation}
						userPicturePath={friend.picturePath}
					/>
				))}
			</Box>
		</WidgetWrapper>
	);
};

export default FriendList;
