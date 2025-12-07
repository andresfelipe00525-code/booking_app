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

// ✅ LA FUNCIÓN VA FUERA DEL JSX
const getImageUrl = (url?: string) => {
	if (!url) return 'https://placehold.co/600x400?text=No+Image';

	if (url.startsWith('http')) {
		return url; // ✅ NO forzar https
	}

	return `${import.meta.env.VITE_API_URL}/${url.replace(/^\/+/, '')}`;
};

const RelatedCard = ({
	id,
	name,
	city,
	image,
	price,
	rating,
}: RelatedCardProps) => {
	// ✅ IMAGEN CORREGIDA
	const imageUrl = getImageUrl(image);

	return (
		<Link
			to={`/details/${id}`}
			className="group relative block overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
		>
			{/* ✅ IMAGEN */}
			<div className="relative aspect-[1.4] overflow-hidden">
				<img
					src={imageUrl}
					alt={name}
					className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
				/>

				{/* ✅ PRICE TAG */}
				<span className="absolute right-3 top-3 rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
					${price}
				</span>
			</div>

			{/* ✅ CONTENIDO */}
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
