import { Link } from 'react-router-dom';
import type { HotelCardProps } from '@/types';
import RatingStars from '../../RatingStars';

const HotelCard = ({ hotel }: HotelCardProps) => {
	const imageUrl =
		hotel.images?.length && hotel.images[0]?.url
			? hotel.images[0].url.replace('http://', 'https://')
			: null;

	return (
		<Link
			to={`/details/${hotel.id}`}
			className="group relative block overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
		>
			<div className="relative aspect-[1.4] overflow-hidden">
				{imageUrl ? (
					<img
						src={imageUrl}
						alt={hotel.name}
						className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
					/>
				) : (
					<div className="flex h-full w-full items-center justify-center bg-gray-200 text-sm text-gray-500">
						Sin imagen
					</div>
				)}

				<span className="absolute right-3 top-3 rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
					${hotel.price}
				</span>
			</div>

			<div className="space-y-2 p-5">
				<h3 className="line-clamp-1 text-lg font-semibold text-gray-900">
					{hotel.name}
				</h3>

				<p className="text-sm text-gray-500">{hotel.city?.name}</p>

				<div className="flex items-center justify-between pt-2">
					<RatingStars rating={Number(hotel.rating) || 0} size={14} />

					<span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-900">
						Ver
					</span>
				</div>
			</div>
		</Link>
	);
};

export default HotelCard;
