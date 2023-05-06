import { Box, Divider, IconButton, Typography, useTheme } from '@mui/material';
import axios from 'axios';
import WidgetWrapper from '../WidgetWrapper';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '../../Store/Slices/UserSlices';
import { tokens } from '../../theme';
import MyPost from './MyPost';
import Friend from '../Friend';
import FlexBetween from '../FlexBeyween';
import {
	ChatBubbleOutlineOutlined,
	FavoriteBorderOutlined,
	FavoriteOutlined,
	ShareOutlined,
} from '@mui/icons-material';

const Post = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [isComments, setIsComments] = useState(false);
	const dispatch = useDispatch();
	const users = useSelector((state) => state.users.users);
	const token = useSelector((state) => state.token);
	// const isLiked = Boolean(likes[loggedInUserId]);
	// const likeCount = Object.keys(likes).length;

	useEffect(() => {
		const getAllUsers = async () => {
			const res = await axios.get('http://localhost:5000/api/v1/getUsers', {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Basic ${token}`,
				},
			});

			dispatch(
				getAllUser({
					users: res.data.result,
				})
			);
		};

		getAllUsers();
	}, [dispatch, token]);

	console.log(users);

	const patchLike = () => {};
	return (
		<Box>
			<MyPost />

			{/* <WidgetWrapper bgcolor={colors.grey[900]} m="2rem 0">
				{users.map((user) => (
					<>
						<Friend
							friendId={user._id}
							name={`${user.firstName} ${user.lastName}`}
							subtitle={user.location}
							userPicturePath={user.picturePath}
							friends={user.friends}
						/>
						<Typography>{}</Typography>
					</>
				))}
			</WidgetWrapper> */}
		</Box>
	);
};

export default Post;

// eslint-disable-next-line no-lone-blocks
{
	/* 
				
				{picturePath && (
					<img
						width="100%"
						height="auto"
						alt="post"
						style={{ borderRadius: '0.75rem', marginTop: '0.75rem' }}
						src={`http://localhost:3001/assets/${picturePath}`}
					/>
				)}
				<FlexBetween mt="0.25rem">
					<FlexBetween gap="1rem">
						<FlexBetween gap="0.3rem">
							<IconButton onClick={patchLike}>
								{isLiked ? (
									<FavoriteOutlined sx={{ color: colors.grey[100] }} />
								) : (
									<FavoriteBorderOutlined />
								)}
							</IconButton>
							<Typography>{likeCount}</Typography>
						</FlexBetween>

						<FlexBetween gap="0.3rem">
							<IconButton onClick={() => setIsComments(!isComments)}>
								<ChatBubbleOutlineOutlined />
							</IconButton>
							<Typography>{comments.length}</Typography>
						</FlexBetween>
					</FlexBetween>

					<IconButton>
						<ShareOutlined />
					</IconButton>
				</FlexBetween>
				{isComments && (
					<Box mt="0.5rem">
						{comments.map((comment, i) => (
							<Box key={`${name}-${i}`}>
								<Divider />
								<Typography
									sx={{ color: colors.grey[100], m: '0.5rem 0', pl: '1rem' }}
								>
									{comment}
								</Typography>
							</Box>
						))}
						<Divider />
					</Box>
				)} */
}
