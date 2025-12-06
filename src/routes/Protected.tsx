import { Navigate, Outlet } from 'react-router-dom';

const Protected = () => {
	const isAuth = Boolean(localStorage.getItem('auth'));

	if (!isAuth) {
		return <Navigate to="/login" replace />;
	}

	return <Outlet />;
};

export default Protected;
