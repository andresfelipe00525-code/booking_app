import { FaRegStar, FaStarHalfStroke, FaStar } from 'react-icons/fa6';

interface RatingStarsProps {
	rating: number;
	setRating?: (value: number) => void;
	readOnly?: boolean;
}

const RatingStars = ({
	rating,
	setRating,
	readOnly = false,
}: RatingStarsProps) => {
	const numericRating = Number(rating) || 0;

	const renderStar = (index: number) => {
		if (numericRating >= index + 1) {
			return <FaStar className="text-[#FFD60A]" />;
		}

		if (numericRating >= index + 0.5) {
			return <FaStarHalfStroke className="text-[#FFD60A]" />;
		}

		return <FaRegStar className="text-[#FFD60A]" />;
	};

	return (
		<div
			className="
        flex items-center gap-1 
        px-3 py-1.5 rounded-2xl 
        bg-white/70 backdrop-blur-md 
        shadow-[0_2px_6px_rgba(0,0,0,0.08)]
        border border-white/40
      "
		>
			<span className="flex items-center text-[18px]">
				{Array.from({ length: 5 }).map((_, index) => (
					<button
						key={`star-${index}`}
						type="button"
						disabled={readOnly}
						onClick={() => setRating?.(index + 1)}
						className="cursor-pointer disabled:cursor-default hover:scale-110 transition-transform"
					>
						{renderStar(index)}
					</button>
				))}
			</span>

			<span className="ml-1 text-[15px] font-medium text-gray-700">
				{numericRating.toFixed(1)}
			</span>
		</div>
	);
};

export default RatingStars;
