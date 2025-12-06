import { useState } from 'react';

interface Reservation {
	id: number;
	hotel: string;
	date: string;
	status: 'active' | 'completed' | 'cancelled';
}

const mockReservations: Reservation[] = [
	{
		id: 1,
		hotel: 'Hotel Premium Ocean',
		date: '2025-01-20',
		status: 'active',
	},
	{
		id: 2,
		hotel: 'Mountain Resort',
		date: '2024-12-10',
		status: 'completed',
	},
	{
		id: 3,
		hotel: 'City Luxury Suites',
		date: '2024-11-02',
		status: 'cancelled',
	},
];

const Reservations = () => {
	const [reservations, setReservations] =
		useState<Reservation[]>(mockReservations);

	const handleDelete = (id: number) => {
		setReservations((prev) => prev.filter((item) => item.id !== id));
	};

	return (
		<div className="space-y-10">
			{/* HEADER */}
			<div className="text-center">
				<h1 className="text-4xl font-semibold tracking-tight text-gray-900">
					Mis Reservas
				</h1>
				<p className="mt-2 text-gray-500">
					Gestiona fácilmente todas tus reservas
				</p>
			</div>

			{/* LISTA */}
			<div className="space-y-6">
				{reservations.map((reservation) => (
					<div
						key={reservation.id}
						className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-3xl bg-white/90 p-6 shadow-lg backdrop-blur-xl border border-white/40"
					>
						{/* INFO */}
						<div>
							<h3 className="text-lg font-semibold text-gray-900">
								{reservation.hotel}
							</h3>
							<p className="text-sm text-gray-500">Fecha: {reservation.date}</p>

							<span
								className={`inline-block mt-2 rounded-full px-3 py-1 text-xs font-medium ${
									reservation.status === 'active'
										? 'bg-green-100 text-green-700'
										: reservation.status === 'completed'
										? 'bg-blue-100 text-blue-700'
										: 'bg-red-100 text-red-700'
								}`}
							>
								{reservation.status === 'active'
									? 'Activa'
									: reservation.status === 'completed'
									? 'Completada'
									: 'Cancelada'}
							</span>
						</div>

						{/* ACTIONS */}
						<div className="flex gap-3">
							<button className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
								Ver detalles
							</button>

							<button
								onClick={() => handleDelete(reservation.id)}
								className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white hover:bg-gray-800 transition"
							>
								Eliminar
							</button>
						</div>
					</div>
				))}
			</div>

			{/* EMPTY STATE */}
			{!reservations.length && (
				<div className="text-center rounded-3xl bg-white/80 p-10 shadow-md backdrop-blur-xl border border-white/40">
					<p className="text-gray-500">No tienes reservas aún</p>
				</div>
			)}
		</div>
	);
};

export default Reservations;
