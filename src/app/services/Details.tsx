import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Hotel {
	id: number;
	name: string;
	description: string;
	price?: number;
	image?: string;
	images?: string[];
}

const Details = () => {
	const { id } = useParams();
	const [hotel, setHotel] = useState<Hotel | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!id) return;

		fetch(`${import.meta.env.VITE_API_URL}/hotels/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setHotel(data);
				setLoading(false);
			})
			.catch((err) => {
				console.error('Error cargando hotel:', err);
				setLoading(false);
			});
	}, [id]);

	if (loading) {
		return (
			<div className="grid min-h-screen place-content-center">
				<p className="text-lg text-gray-500">Cargando hotel...</p>
			</div>
		);
	}

	if (!hotel) {
		return (
			<div className="grid min-h-screen place-content-center">
				<p className="text-lg text-red-500">Hotel no encontrado</p>
			</div>
		);
	}

	// ✅ IMAGEN SEGURA DESDE .ENV
	const imageUrl = hotel.image
		? `${import.meta.env.VITE_API_URL}/${hotel.image}`
		: hotel.images?.length
		? `${import.meta.env.VITE_API_URL}/${hotel.images[0]}`
		: 'https://placehold.co/1200x600?text=No+Image';

	return (
		<div className="space-y-10">
			{/* ✅ IMAGEN PRINCIPAL */}
			<div className="overflow-hidden rounded-3xl shadow-xl">
				<img
					src={imageUrl}
					alt={hotel.name}
					className="h-[360px] w-full object-cover"
				/>
			</div>

			{/* ✅ INFORMACIÓN */}
			<div className="rounded-3xl bg-white/90 p-8 shadow-xl backdrop-blur-xl border border-white/40 space-y-4">
				<h1 className="text-3xl font-semibold tracking-tight text-gray-900">
					{hotel.name}
				</h1>

				<p className="text-gray-600 text-sm leading-relaxed">
					{hotel.description}
				</p>

				{hotel.price && (
					<p className="text-xl font-semibold text-gray-900">${hotel.price}</p>
				)}

				<div className="flex gap-4 pt-4">
					<button className="rounded-full bg-black px-6 py-2 text-sm font-medium text-white hover:bg-gray-800 transition">
						Reservar ahora
					</button>

					<button className="rounded-full border border-gray-300 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
						Guardar
					</button>
				</div>
			</div>
		</div>
	);
};

export default Details;
