import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
	return (
		<main className="min-h-screen from-[#f5f5f7] to-[#e5e5ea]">
			<header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/40">
				<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
					<h1 className="text-xl font-semibold tracking-tight text-gray-900">
						BookingApp
					</h1>

					<nav className="flex gap-6 text-sm font-medium text-gray-600">
						<a href="/" className="hover:text-black transition">
							Inicio
						</a>
						<a href="/reservations" className="hover:text-black transition">
							Reservas
						</a>
						<a href="/login" className="hover:text-black transition">
							Login
						</a>
					</nav>
				</div>
			</header>

			<section className="max-w-7xl mx-auto px-6 py-10">
				<Outlet />
			</section>
		</main>
	);
};

export default MainLayouts;
