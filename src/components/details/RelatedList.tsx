import { useEffect } from 'react';
import RelatedCard from './RelatedCard';
import useApiFetch from '@/hooks/useApiFetch';

export interface RelatedHotel {
	id: number;
	name: string;
	city: string;
	image: string;
	price: number;
	rating: number;
}

interface RelatedListProps {
	cityId: number;
}

const RelatedList = ({ cityId }: RelatedListProps) => {
	const [hotels, fetchHotels] = useApiFetch<RelatedHotel[]>();

	useEffect(() => {
		if (!cityId) return;

		fetchHotels({
			url: `/hotels?cityId=${cityId}`,
			method: 'GET',
		});
	}, [cityId, fetchHotels]);

	// ✅ ahora hotels SIEMPRE es un array
	if (hotels.length === 0) return null;

	return (
		<section className="mt-16">
			<div className="mb-6 flex items-center justify-between">
				<h2 className="text-2xl font-semibold tracking-tight text-gray-900">
					Hoteles relacionados
				</h2>

				<span className="rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
					{hotels.length}
				</span>
			</div>

			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{hotels.map((hotel) => (
					<RelatedCard
						key={hotel.id}
						id={hotel.id}
						name={hotel.name}
						city={hotel.city}
						image={hotel.image}
						price={hotel.price}
						rating={hotel.rating}
					/>
				))}
			</div>
		</section>
	);
};

export default RelatedList;
