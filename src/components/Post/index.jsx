import { Box, useTheme } from '@mui/material';
import axios from 'axios';
import WidgetWrapper from '../WidgetWrapper';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '../../Store/Slices/UserSlices';
import { tokens } from '../../theme';
import MyPost from './MyPost';

const Post = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [isComments, setIsComments] = useState(false);
	const dispatch = useDispatch();
	const users = useSelector((state) => state.users);
	const token = useSelector((state) => state.token);
	const isLiked = Boolean(likes[loggedInUserId]);
	const likeCount = Object.keys(likes).length;

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
	return (
		<Box>
			<MyPost />

			<WidgetWrapper bgcolor={colors.grey[900]} m="2rem 0">
				<Friend
					friendId={postUserId}
					name={name}
					subtitle={location}
					userPicturePath={userPicturePath}
				/>
				<Typography color={main} sx={{ mt: '1rem' }}>
					{description}
				</Typography>
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
									<FavoriteOutlined sx={{ color: primary }} />
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
								<Typography sx={{ color: main, m: '0.5rem 0', pl: '1rem' }}>
									{comment}
								</Typography>
							</Box>
						))}
						<Divider />
					</Box>
				)}
			</WidgetWrapper>
		</Box>
	);
};

export default Post;
