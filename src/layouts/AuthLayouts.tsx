import { Outlet } from 'react-router-dom';

const AuthLayouts = () => {
	return (
		<main className="min-h-screen from-[#f5f5f7] to-[#e5e5ea] flex items-center justify-center">
			<Outlet />
		</main>
	);
};

export default AuthLayouts;
