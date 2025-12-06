import type { FormEvent } from 'react';

interface LoginFormProps {
	onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
	return (
		<form onSubmit={onSubmit} className="space-y-5">
			<div>
				<label className="block text-sm font-medium text-gray-700 mb-1">
					Email
				</label>
				<input
					type="email"
					placeholder="correo@ejemplo.com"
					className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black"
					required
				/>
			</div>

			<div>
				<label className="block text-sm font-medium text-gray-700 mb-1">
					Contraseña
				</label>
				<input
					type="password"
					placeholder="••••••••"
					className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black"
					required
				/>
			</div>

			<button
				type="submit"
				className="w-full rounded-full bg-black py-2 text-sm font-medium text-white hover:bg-gray-800 transition"
			>
				Entrar
			</button>
		</form>
	);
};

export default LoginForm;
