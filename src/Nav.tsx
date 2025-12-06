import useAuth from '@/app/context/auth';
import { Link } from 'react-router-dom';

const Nav = () => {
	const { isAuth, logout } = useAuth();

	return (
		<nav className="sticky top-0 z-50 w-full bg-white/75 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
			<div className="mx-auto flex max-w-5xl items-center justify-center gap-4 px-6 py-4">
				{isAuth ? (
					<>
						<Link
							to="/reservations"
							className="rounded-full px-5 py-2.5 text-sm font-medium text-gray-900 bg-gray-100 shadow-inner transition-all duration-300 hover:bg-gray-200 active:scale-[0.97]"
						>
							Reservations
						</Link>

						<button
							onClick={logout}
							className="rounded-full px-6 py-2.5 text-sm font-semibold text-white bg-black shadow-lg transition-all duration-300 hover:opacity-90 active:scale-[0.97]"
						>
							Logout
						</button>
					</>
				) : (
					<>
						<Link
							to="/login"
							className="rounded-full px-6 py-2.5 text-sm font-medium text-gray-900 bg-gray-100 shadow-inner transition-all duration-300 hover:bg-gray-200 active:scale-[0.97]"
						>
							Login
						</Link>

						<Link
							to="/register"
							className="rounded-full px-6 py-2.5 text-sm font-semibold text-white bg-black shadow-lg transition-all duration-300 hover:opacity-90 active:scale-[0.97]"
						>
							Sign up
						</Link>
					</>
				)}
			</div>
		</nav>
	);
};

export default Nav;
