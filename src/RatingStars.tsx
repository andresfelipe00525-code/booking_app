import { useMemo } from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

interface RatingStarsProps {
	rating: number; // de 0 a 5
	size?: number; // tamaño opcional
}

const RatingStars = ({ rating, size = 16 }: RatingStarsProps) => {
	const stars = useMemo(() => {
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating - fullStars >= 0.5;
		const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

		return {
			fullStars,
			hasHalfStar,
			emptyStars,
		};
	}, [rating]);

	return (
		<div className="flex items-center gap-1">
			{/* ESTRELLAS LLENAS */}
			{[...Array(stars.fullStars)].map((_, i) => (
				<FaStar
					key={`full-${i}`}
					size={size}
					className="text-yellow-400 drop-shadow-sm"
				/>
			))}

			{/* MEDIA ESTRELLA */}
			{stars.hasHalfStar && (
				<FaStarHalfAlt size={size} className="text-yellow-400 drop-shadow-sm" />
			)}

			{/* ESTRELLAS VACÍAS */}
			{[...Array(stars.emptyStars)].map((_, i) => (
				<FaRegStar key={`empty-${i}`} size={size} className="text-gray-300" />
			))}
		</div>
	);
};

export default RatingStars;
