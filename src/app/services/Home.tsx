import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface HotelImage {
	url: string;
}

interface Hotel {
	id: number;
	name: string;
	description: string;
	images?: HotelImage[];
}

const Home = () => {
	const [hotels, setHotels] = useState<Hotel[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_API_URL}/hotels`)
			.then((res) => res.json())
			.then((data) => {
				setHotels(data);
				setLoading(false);
			})
			.catch((err) => {
				console.error('Error cargando hoteles:', err);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return (
			<div className="grid min-h-screen place-content-center">
				<p className="text-lg text-gray-500">Cargando hoteles...</p>
			</div>
		);
	}

	return (
		<div className="space-y-12">
			{/* HERO */}
			<section className="rounded-3xl bg-white/80 p-10 shadow-xl backdrop-blur-xl border border-white/40 text-center">
				<h2 className="text-4xl font-semibold tracking-tight text-gray-900">
					Encuentra tu próximo destino
				</h2>
				<p className="mt-3 text-gray-500">
					Hoteles exclusivos, experiencias únicas.
				</p>
			</section>

			{/* LISTADO DE HOTELES */}
			<section className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{hotels.map((hotel) => {
					// ✅ IMAGEN 100% SEGURA DESDE TU API
					const imageUrl = hotel.images?.length
						? hotel.images[0].url.startsWith('http')
							? hotel.images[0].url
							: `${import.meta.env.VITE_API_URL}/${hotel.images[0].url}`
						: 'https://placehold.co/600x400?text=No+Image';

					return (
						<Link
							key={hotel.id}
							to={`/details/${hotel.id}`}
							className="group rounded-3xl bg-white/80 p-6 shadow-lg backdrop-blur-xl border border-white/40 hover:shadow-2xl transition"
						>
							{/* ✅ IMAGEN */}
							<img
								src={imageUrl}
								alt={hotel.name}
								className="h-40 w-full object-cover rounded-2xl mb-4"
							/>

							<h3 className="text-lg font-semibold text-gray-900 group-hover:underline">
								{hotel.name}
							</h3>

							<p className="text-sm text-gray-500 mt-1">{hotel.description}</p>

							<span className="inline-block mt-3 text-sm font-medium text-blue-600">
								Ver detalles →
							</span>
						</Link>
					);
				})}
			</section>
		</div>
	);
};

export default Home;
