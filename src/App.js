import Footer from './pages/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './pages/Navbar';
import Profile from './pages/Profile';
import Register from './pages/Register';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	const [theme, colorMode] = useMode();
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
