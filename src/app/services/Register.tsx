import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// REGISTRO FAKE
		localStorage.setItem('auth', 'true');
		navigate('/');
	};

	return (
		<div className="w-full max-w-md rounded-3xl bg-white/90 p-8 shadow-xl backdrop-blur-xl border border-white/40">
			<div className="mb-8 text-center">
				<h1 className="text-3xl font-semibold tracking-tight text-gray-900">
					Crear cuenta
				</h1>
				<p className="mt-2 text-sm text-gray-500">
					Únete a BookingApp en segundos
				</p>
			</div>

			<form onSubmit={handleSubmit} className="space-y-5">
				<input
					type="text"
					placeholder="Tu nombre"
					className="w-full rounded-xl border px-4 py-2 text-sm"
					required
				/>

				<input
					type="email"
					placeholder="correo@ejemplo.com"
					className="w-full rounded-xl border px-4 py-2 text-sm"
					required
				/>

				<input
					type="password"
					placeholder="••••••••"
					className="w-full rounded-xl border px-4 py-2 text-sm"
					required
				/>

				<button
					type="submit"
					className="w-full rounded-full bg-black py-2 text-sm font-medium text-white hover:bg-gray-800 transition"
				>
					Crear cuenta
				</button>
			</form>

			<div className="mt-6 text-center text-sm text-gray-500">
				¿Ya tienes cuenta?{' '}
				<Link to="/login" className="text-black font-medium hover:underline">
					Inicia sesión
				</Link>
			</div>
		</div>
	);
};

export default Register;
