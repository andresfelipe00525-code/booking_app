import { Navigate, Outlet } from 'react-router-dom';

const Public = () => {
	const isAuth = Boolean(localStorage.getItem('auth'));

	if (isAuth) {
		return <Navigate to="/" replace />;
	}

	return <Outlet />;
};

export default Public;
