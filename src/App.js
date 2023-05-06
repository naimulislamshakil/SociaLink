import Footer from './pages/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './pages/Navbar';
import Profile from './pages/Profile';
import Register from './pages/Register';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { userParsist } from './Store/Slices/UserSlices';

function App() {
	const [theme, colorMode] = useMode();
	const token = useSelector((state) => state.token);
	const dispatch = useDispatch();

	useEffect(() => {
		const parsist = async () => {
			const res = await axios.get('http://localhost:5000/api/v1/auth/me', {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Basic ${token}`,
				},
			});

			dispatch(
				userParsist({
					user: res?.data?.user,
				})
			);
		};

		parsist();
	}, [dispatch, token]);
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className="app">
					<Navbar />
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/feed" element={<Home />} />
						<Route path="/profile/:id" element={<Profile />} />
						<Route path="/register" element={<Register />} />
					</Routes>
					<Footer />
				</div>
				<ToastContainer />
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
