import { useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import { cn } from '@/utils/cn';

interface ReviewForm {
	rating: number;
	comment: string;
}

interface ReviewRatingProps {
	setReview: React.Dispatch<React.SetStateAction<ReviewForm>>;
}

const ReviewRating = ({ setReview }: ReviewRatingProps) => {
	const [rating, setRating] = useState<number>(0);
	const [hover, setHover] = useState<number>(0);

	const handleSelect = (value: number) => {
		setRating(value);

		setReview((prev) => ({
			...prev,
			rating: value,
		}));
	};

	return (
		<div className="flex items-center justify-center gap-3 rounded-2xl bg-white/70 p-3 shadow-inner backdrop-blur-md">
			{[...Array(5)].map((_, index) => {
				const value = index + 1;
				const active = (hover || rating) >= value;

				return (
					<button
						key={value}
						type="button"
						onClick={() => handleSelect(value)}
						onMouseEnter={() => setHover(value)}
						onMouseLeave={() => setHover(0)}
						className={cn(
							'group rounded-full p-1 transition-all duration-300',
							active && 'scale-110',
						)}
					>
						<FaStar
							className={cn(
								'text-3xl transition-all duration-300',
								active
									? 'text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.6)]'
									: 'text-gray-300 group-hover:text-gray-400',
							)}
						/>
					</button>
				);
			})}
		</div>
	);
};

export default ReviewRating;
