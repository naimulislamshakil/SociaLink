import {
	Avatar,
	Box,
	Button,
	Checkbox,
	Container,
	FormControlLabel,
	Grid,
	TextField,
	Typography,
	useTheme,
} from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { tokens } from '../../theme';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { singUpAction } from '../../Redux/Action/index';
import { toast } from 'react-toastify';
import Loading from '../Loading';

const Register = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const dispatch = useDispatch();
	const { loading, message, error } = useSelector((state) => state.singUp);
	const navigator = useNavigate();

	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues,
			validationSchema: userSchema,
			onSubmit: (values) => {
				dispatch(singUpAction(values));
			},
		});

	if (loading) {
		<Loading />;
	}

	if (message.status === 'Failed') {
		toast.error(message.message);
	}

	if (message.status === 'Success') {
		navigator('/');
	}

	if (error === 'Request failed with status code 404') {
		toast.error('User Alrady Exgist');
	}

	return (
		<Container component="main" maxWidth="xs">
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign Up
				</Typography>
				<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						color="secondary"
						fullWidth
						id="text"
						value={values.firstName}
						onBlur={handleBlur}
						onChange={handleChange}
						label="First Name"
						name="firstName"
						error={!!touched.firstName && !!errors.firstName}
						helperText={touched.firstName && errors.firstName}
						autoComplete="text"
						autoFocus
					/>

					<TextField
						margin="normal"
						required
						color="secondary"
						fullWidth
						id="text"
						value={values.lastName}
						onBlur={handleBlur}
						onChange={handleChange}
						label="Last Name"
						name="lastName"
						error={!!touched.lastName && !!errors.lastName}
						helperText={touched.lastName && errors.lastName}
						autoComplete="text"
						autoFocus
					/>

					<TextField
						margin="normal"
						required
						color="secondary"
						fullWidth
						id="email"
						value={values.email}
						onBlur={handleBlur}
						onChange={handleChange}
						label="Email Address"
						name="email"
						error={!!touched.email && !!errors.email}
						helperText={touched.email && errors.email}
						autoComplete="email"
						autoFocus
					/>
					<TextField
						margin="normal"
						required
						color="secondary"
						fullWidth
						name="password"
						value={values.password}
						onBlur={handleBlur}
						onChange={handleChange}
						label="Password"
						type="password"
						id="password"
						error={!!touched.password && !!errors.password}
						helperText={touched.password && errors.password}
						autoComplete="current-password"
					/>
					<FormControlLabel
						control={
							<Checkbox value="remember" style={{ color: colors.grey[100] }} />
						}
						label="Remember me"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
						style={{
							color: colors.grey[100],
							background: colors.greenAccent[500],
						}}
					>
						Sign Up
					</Button>
					<Grid container>
						<Grid item textAlign="center">
							<Link
								to="/"
								variant="body2"
								style={{ color: colors.grey[100], textAlign: 'center' }}
							>
								{'Alrady have an account? Sign In'}
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
};

const initialValues = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
};

const regularExpression =
	/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

const userSchema = yup.object().shape({
	firstName: yup.string().required('Required'),
	lastName: yup.string().required('Required'),
	email: yup.string().email('Invalid Email').required('Required'),
	password: yup
		.string()
		.matches(regularExpression, 'Password Not Valid')
		.required('Required'),
});

export default Register;
