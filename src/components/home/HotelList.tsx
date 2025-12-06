import type { HotelListProps } from '@/types';
import HotelCard from './HotelCard';

const HotelList = ({ hotels }: HotelListProps) => {
	if (!Array.isArray(hotels) || hotels.length === 0) return null;

	return (
		<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{hotels.map((hotel) => (
				<HotelCard key={hotel.id} hotel={hotel} />
			))}
		</div>
	);
};

export default HotelList;
