import Footer from './pages/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './pages/Navbar';
import Profile from './pages/Profile';
import Register from './pages/Register';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
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
	);
}

export default App;
