import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// LOGIN FAKE (luego lo cambiamos por API real)
		localStorage.setItem('auth', 'true');
		navigate('/');
	};

	return (
		<div className="w-full max-w-md rounded-3xl bg-white/90 p-8 shadow-xl backdrop-blur-xl border border-white/40">
			<div className="mb-8 text-center">
				<h1 className="text-3xl font-semibold tracking-tight text-gray-900">
					Iniciar sesión
				</h1>
				<p className="mt-2 text-sm text-gray-500">
					Bienvenido de nuevo a BookingApp
				</p>
			</div>

			<form onSubmit={handleSubmit} className="space-y-5">
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
					Entrar
				</button>
			</form>

			<div className="mt-6 text-center text-sm text-gray-500">
				¿No tienes cuenta?{' '}
				<Link to="/register" className="text-black font-medium hover:underline">
					Regístrate
				</Link>
			</div>
		</div>
	);
};

export default Login;
