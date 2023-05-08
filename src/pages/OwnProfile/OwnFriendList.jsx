import { Box, Typography, useTheme } from '@mui/material';
import WidgetWrapper from '../../components/WidgetWrapper';
import React from 'react';
import { tokens } from '../../theme';
import Friend from '../../components/Friend';
import { useSelector } from 'react-redux';

const OwnFriendList = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const friends = useSelector((state) => state.singleUser.friends);

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
				{friends.map((friend, i) => (
					<Friend
						key={i}
						friendId={friend.id}
						name={`${friend.firstName} ${friend.lastName}`}
						subtitle={friend.occupation}
						userPicturePath={friend.picturePath}
						list="list"
					/>
				))}
			</Box>
		</WidgetWrapper>
	);
};

export default OwnFriendList;
