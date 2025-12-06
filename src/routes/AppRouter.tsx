import { Routes, Route } from 'react-router-dom';

import Protected from './Protected';
import Public from './Public';

// Layouts
import MainLayouts from '../layouts/MainLayouts';
import AuthLayouts from '../layouts/AuthLayouts';

// Pages
import Home from '../app/services/Home';
import Details from '../app/services/Details';
import Login from '../app/services/Login';
import Register from '../app/services/Register';
import Reservations from '../app/services/Reservations';
const AppRouter = () => {
	return (
		<Routes>
			{/* RUTAS PÚBLICAS */}
			<Route element={<Public />}>
				<Route element={<AuthLayouts />}>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Route>
			</Route>

			{/* RUTAS PROTEGIDAS */}
			<Route element={<Protected />}>
				<Route element={<MainLayouts />}>
					<Route path="/" element={<Home />} />
					<Route path="/details/:id" element={<Details />} />
					<Route path="/reservations" element={<Reservations />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default AppRouter;
