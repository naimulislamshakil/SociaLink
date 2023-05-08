import {
	AttachFileOutlined,
	DeleteOutlined,
	EditOutlined,
	GifBoxOutlined,
	ImageOutlined,
	MicOutlined,
	MoreHorizOutlined,
} from '@mui/icons-material';
import {
	Box,
	Button,
	Divider,
	IconButton,
	InputBase,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import axios from 'axios';
import FlexBetween from '../../components/FlexBeyween';
import UserImage from '../../components/UserImage';
import WidgetWrapper from '../../components/WidgetWrapper';
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getPost } from 'Store/Slices/UserSlices';
import { tokens } from '../../theme';

const OwnCreatePost = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const singleUser = useSelector((state) => state.singleUser);
	const isNotMobile = useMediaQuery('(min-width:1000px)');
	const dispatch = useDispatch();
	const token = useSelector((state) => state.token);
	const [isImage, setIsImage] = useState(false);
	const [image, setImage] = useState(null);
	const [post, setPost] = useState('');

	const imageBB = 'aca65d68a0810361f2d2ced87f951d28';

	const handlePost = async () => {
		let formData = new FormData();
		formData.append('image', image);
		const url = `https://api.imgbb.com/1/upload?key=${imageBB}`;

		fetch(url, {
			method: 'POST',
			body: formData,
		})
			.then((res) => res.json())
			.then(async (data) => {
				const userPost = {
					userId: singleUser._id,
					userPicturePath: singleUser.picturePath,
					firstName: singleUser.firstName,
					lastName: singleUser.lastName,
					location: singleUser.location,
					image: data?.data?.url,
					description: post,
				};

				const res = await axios.post(
					'https://sociallink-d3e40prko-naimulislamshakil.vercel.app/api/v1/createPost',
					userPost,
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							Authorization: `Basic ${token}`,
						},
					}
				);

				if (res.data.status === 'Success') {
					toast.success(res.data.message);
					dispatch(
						getPost({
							post: res.data.result,
						})
					);
					setImage(null);
					setPost('');
				} else {
					toast.error(res.data.message);
					setImage(null);
					setPost('');
				}
			});
	};
	return (
		<WidgetWrapper bgcolor={colors.grey[900]}>
			<FlexBetween gap="1.5rem">
				<UserImage image={singleUser.picturePath} />
				<InputBase
					placeholder="What's on your mind..."
					onChange={(e) => setPost(e.target.value)}
					value={post}
					sx={{
						width: '100%',
						backgroundColor: colors.grey[800],
						borderRadius: '2rem',
						padding: '1rem 2rem',
					}}
				/>
			</FlexBetween>
			{isImage && (
				<Box
					border={`1px solid ${colors.grey[100]}`}
					borderRadius="5px"
					mt="1rem"
					p="1rem"
				>
					<Dropzone
						acceptedFiles=".jpg,.jpeg,.png"
						multiple={false}
						onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
					>
						{({ getRootProps, getInputProps }) => (
							<FlexBetween>
								<Box
									{...getRootProps()}
									border={`2px dashed ${colors.grey[100]}`}
									p="1rem"
									width="100%"
									sx={{ '&:hover': { cursor: 'pointer' } }}
								>
									<input {...getInputProps()} />
									{!image ? (
										<p>Add Image Here</p>
									) : (
										<FlexBetween>
											<Typography>{image.name}</Typography>
											<EditOutlined />
										</FlexBetween>
									)}
								</Box>
								{image && (
									<IconButton
										onClick={() => setImage(null)}
										sx={{ width: '15%' }}
									>
										<DeleteOutlined />
									</IconButton>
								)}
							</FlexBetween>
						)}
					</Dropzone>
				</Box>
			)}

			<Divider sx={{ margin: '1.25rem 0' }} />

			<FlexBetween>
				<FlexBetween gap="0.25rem" onClick={() => setIsImage(!isImage)}>
					<ImageOutlined sx={{ color: colors.grey[100] }} />
					<Typography
						color={colors.grey[100]}
						sx={{ '&:hover': { cursor: 'pointer', color: colors.grey[100] } }}
					>
						Image
					</Typography>
				</FlexBetween>

				{isNotMobile ? (
					<>
						<FlexBetween gap="0.25rem">
							<GifBoxOutlined sx={{ color: colors.grey[100] }} />
							<Typography color={colors.grey[100]}>Clip</Typography>
						</FlexBetween>

						<FlexBetween gap="0.25rem">
							<AttachFileOutlined sx={{ color: colors.grey[100] }} />
							<Typography color={colors.grey[100]}>Attachment</Typography>
						</FlexBetween>

						<FlexBetween gap="0.25rem">
							<MicOutlined sx={{ color: colors.grey[100] }} />
							<Typography color={colors.grey[100]}>Audio</Typography>
						</FlexBetween>
					</>
				) : (
					<FlexBetween gap="0.25rem">
						<MoreHorizOutlined sx={{ color: colors.grey[100] }} />
					</FlexBetween>
				)}

				<Button
					disabled={!post}
					onClick={handlePost}
					sx={{
						color: colors.grey[100],
						backgroundColor: colors.greenAccent[500],
						borderRadius: '3rem',
					}}
				>
					POST
				</Button>
			</FlexBetween>
		</WidgetWrapper>
	);
};

export default OwnCreatePost;
