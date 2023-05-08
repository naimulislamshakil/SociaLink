import {
	LocationOnOutlined,
	ManageAccountsOutlined,
	WorkOutlineOutlined,
} from '@mui/icons-material';
import { Box, Divider, Typography, useTheme } from '@mui/material';
import FlexBetween from '../../components/FlexBeyween';
import UserImage from '../../components/UserImage';
import WidgetWrapper from '../../components/WidgetWrapper';
import React from 'react';
import { tokens } from '../../theme';
import { useSelector } from 'react-redux';

const OwnProfile = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const singleUser = useSelector((state) => state.singleUser);

	return (
		<WidgetWrapper bgcolor={colors.grey[900]}>
			{/* FIRST ROW */}
			<FlexBetween gap="0.5rem" pb="1.1rem">
				<FlexBetween gap="1rem">
					<UserImage image={singleUser.picturePath} />
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
							{singleUser.firstName} {singleUser.lastName}
						</Typography>
						<Typography color={colors.grey[100]}>
							{singleUser.friends.length} friends
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
						{singleUser.location}
					</Typography>
				</Box>
				<Box display="flex" alignItems="center" gap="1rem">
					<WorkOutlineOutlined
						fontSize="large"
						sx={{ color: colors.grey[100] }}
					/>
					<Typography color={colors.grey[100]}>
						{singleUser.occupation}
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
						{singleUser.viewedProfile}
					</Typography>
				</FlexBetween>
				<FlexBetween>
					<Typography color={colors.grey[100]}>
						Impressions of your post
					</Typography>
					<Typography color={colors.grey[100]} fontWeight="500">
						{singleUser.impressions}
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
								{singleUser.twiter}
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
								{singleUser.linkedin}
							</Typography>
						</Box>
					</FlexBetween>
				</FlexBetween>
			</Box>
		</WidgetWrapper>
	);
};

export default OwnProfile;
