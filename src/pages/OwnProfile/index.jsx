import {
	LocationOnOutlined,
	ManageAccountsOutlined,
	WorkOutlineOutlined,
} from '@mui/icons-material';
import { Box, Divider, Typography, useTheme } from '@mui/material';
import FlexBetween from '../../components/FlexBeyween';
import UserImage from '../../components/UserImage';
import WidgetWrapper from '../../components/WidgetWrapper';
import React, { useEffect } from 'react';
import { tokens } from '../../theme';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { singleUser } from 'Store/Slices/UserSlices';

const OwnProfile = ({ id }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const singleUse = useSelector((state) => state.singleUser);
	const token = useSelector((state) => state.token);
	const dispatch = useDispatch();

	useEffect(() => {
		const getSingleUser = async () => {
			const res = await axios.get(
				`https://socialinkagfha.onrender.com/getSingleUser/${id}`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Basic ${token}`,
					},
				}
			);

			console.log(`https://socialinkagfha.onrender.com/getSingleUser/${id}`);

			dispatch(
				singleUser({
					singleUser: res.data.singleUser,
					singlePost: res.data.singlePost,
				})
			);
		};
		getSingleUser();
	}, [dispatch, id, singleUse, token]);

	return (
		<WidgetWrapper bgcolor={colors.grey[900]}>
			{/* FIRST ROW */}
			<FlexBetween gap="0.5rem" pb="1.1rem">
				<FlexBetween gap="1rem">
					<UserImage image={singleUse?.picturePath} />
					<Box>
						<Typography
							variant="h4"
							color={colors.grey[100]}
							fontWeight="500"
							sx={{
								'&:hover': {
									color: colors.grey[100],
									cursor: 'pointer',
								},
							}}
						>
							{singleUse?.firstName} {singleUse?.lastName}
						</Typography>
						<Typography color={colors.grey[100]}>
							{singleUse?.friends?.length} friends
						</Typography>
					</Box>
				</FlexBetween>
				<ManageAccountsOutlined />
			</FlexBetween>

			<Divider />

			{/* SECOND ROW */}
			<Box p="1rem 0">
				<Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
					<LocationOnOutlined
						fontSize="large"
						sx={{ color: colors.grey[100] }}
					/>
					<Typography color={colors.grey[100]}>
						{singleUse?.location}
					</Typography>
				</Box>
				<Box display="flex" alignItems="center" gap="1rem">
					<WorkOutlineOutlined
						fontSize="large"
						sx={{ color: colors.grey[100] }}
					/>
					<Typography color={colors.grey[100]}>
						{singleUse?.occupation}
					</Typography>
				</Box>
			</Box>

			<Divider />

			{/* THIRD ROW */}
			<Box p="1rem 0">
				<FlexBetween mb="0.5rem">
					<Typography color={colors.grey[100]}>
						Who's viewed your profile
					</Typography>
					<Typography color={colors.grey[100]} fontWeight="500">
						{singleUse?.viewedProfile}
					</Typography>
				</FlexBetween>
				<FlexBetween>
					<Typography color={colors.grey[100]}>
						Impressions of your post
					</Typography>
					<Typography color={colors.grey[100]} fontWeight="500">
						{singleUse?.impressions}
					</Typography>
				</FlexBetween>
			</Box>

			<Divider />

			{/* FOURTH ROW */}
			<Box p="1rem 0">
				<Typography
					fontSize="1rem"
					color={colors.grey[100]}
					fontWeight="500"
					mb="1rem"
				>
					Social Profiles
				</Typography>

				<FlexBetween gap="1rem" mb="0.5rem">
					<FlexBetween gap="3rem">
						<img src="https://i.ibb.co/nwDFdfb/twitter.png" alt="twitter" />

						<Box>
							<Typography color={colors.grey[100]} fontWeight="500">
								Twitter
							</Typography>
							<Typography color={colors.grey[100]}>
								{singleUse?.twiter}
							</Typography>
						</Box>
					</FlexBetween>
				</FlexBetween>

				<FlexBetween gap="3rem">
					<FlexBetween gap="3rem">
						<img src="https://i.ibb.co/LzyMNKP/linkedin.png" alt="linkedin" />
						<Box>
							<Typography color={colors.grey[100]} fontWeight="500">
								Linkedin
							</Typography>
							<Typography color={colors.grey[100]}>
								{singleUse?.linkedin}
							</Typography>
						</Box>
					</FlexBetween>
				</FlexBetween>
			</Box>
		</WidgetWrapper>
	);
};

export default OwnProfile;
