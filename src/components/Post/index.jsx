import { Box, Divider, IconButton, Typography, useTheme } from '@mui/material';
import axios from 'axios';
import WidgetWrapper from '../WidgetWrapper';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../../Store/Slices/UserSlices';
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
	const posts = useSelector((state) => state.post?.post);
	const token = useSelector((state) => state.token);
	const loggedInUserId = useSelector((state) => state.user.user._id);

	useEffect(() => {
		const getAllUsers = async () => {
			const res = await axios.get('http://localhost:5000/api/v1/getUsers', {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Basic ${token}`,
				},
			});

			dispatch(
				getPost({
					post: res.data.result,
				})
			);
		};

		getAllUsers();
	}, [dispatch, token]);

	const patchLike = () => {};
	return (
		<Box>
			<MyPost />

			{posts.map((post) => (
				<WidgetWrapper key={post._id} bgcolor={colors.grey[900]} m="2rem 0">
					<Friend
						friendId={post.userId}
						name={`${post.firstName} ${post.lastName}`}
						subtitle={post.location}
						userPicturePath={post.userPicturePath}
					/>
					<Typography color={colors.grey[100]} sx={{ mt: '1rem' }}>
						{post.description}
					</Typography>

					{post.image && (
						<img
							width="100%"
							height="auto"
							alt="post"
							style={{ borderRadius: '0.75rem', marginTop: '0.75rem' }}
							src={post.image}
						/>
					)}

					<FlexBetween mt="0.25rem">
						<FlexBetween gap="1rem">
							<FlexBetween gap="0.3rem">
								<IconButton onClick={patchLike}>
									{post.likes?.filter((id) => id === post.userId) ? (
										<FavoriteOutlined sx={{ color: '#FF0000' }} />
									) : (
										<FavoriteBorderOutlined />
									)}
								</IconButton>
								<Typography>{post.likes?.length}</Typography>
							</FlexBetween>

							<FlexBetween gap="0.3rem">
								<IconButton onClick={() => setIsComments(!isComments)}>
									<ChatBubbleOutlineOutlined />
								</IconButton>
								<Typography>{post.comments.length}</Typography>
							</FlexBetween>
						</FlexBetween>

						<IconButton>
							<ShareOutlined />
						</IconButton>
					</FlexBetween>
					{isComments && (
						<Box mt="0.5rem">
							{post.comments.map((comment, i) => (
								<Box key={`${post.firstName}-${i}`}>
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
					)}
				</WidgetWrapper>
			))}
		</Box>
	);
};

export default Post;

// eslint-disable-next-line no-lone-blocks
{
	/* 
				
				
				 */
}
