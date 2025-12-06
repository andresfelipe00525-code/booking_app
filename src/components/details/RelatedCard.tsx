import { Link } from 'react-router-dom';
import RatingStars from '../../RatingStars';

interface RelatedCardProps {
	id: number;
	name: string;
	city: string;
	image: string;
	price: number;
	rating: number;
}

const RelatedCard = ({
	id,
	name,
	city,
	image,
	price,
	rating,
}: RelatedCardProps) => {
	return (
		<Link
			to={`/details/${id}`}
			className="group relative block overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
		>
			{/* IMAGEN */}
			<div className="relative h-52 w-full overflow-hidden">
				<img
					src={image}
					alt={name}
					className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
				/>

				{/* PRICE TAG */}
				<span className="absolute right-3 top-3 rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
					${price}
				</span>
			</div>

			{/* CONTENIDO */}
			<div className="space-y-2 p-5">
				<h3 className="line-clamp-1 text-lg font-semibold text-gray-900">
					{name}
				</h3>

				<p className="text-sm text-gray-500">{city}</p>

				<div className="flex items-center justify-between pt-2">
					<RatingStars rating={rating} size={14} />

					<span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-900">
						Ver
					</span>
				</div>
			</div>
		</Link>
	);
};

export default RelatedCard;
