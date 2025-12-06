import RatingStars from '../../RatingStars';

interface User {
	firstName: string;
	lastName: string;
}

interface Review {
	user: User;
	rating: number;
	comment: string;
}

interface ReviewCardProps {
	review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
	return (
		<div
			className="
        w-full
        p-5
        rounded-2xl
        bg-white/80
        backdrop-blur-xl
        shadow-md
        border
        border-gray-100
        transition-all
        hover:shadow-xl
        dark:bg-zinc-900/70
        dark:border-zinc-800
      "
		>
			<div className="flex items-center justify-between mb-3">
				<h2 className="text-sm font-semibold capitalize text-gray-900 dark:text-white">
					{review.user.firstName} {review.user.lastName}
				</h2>

				<span className="text-xs text-gray-400 dark:text-gray-500">
					Verified Guest
				</span>
			</div>

			<div className="flex items-center gap-2 mb-3">
				<RatingStars rating={review.rating} />
				<span className="text-xs font-medium text-gray-600 dark:text-gray-400">
					{review.rating}
				</span>
			</div>

			<p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
				{review.comment}
			</p>
		</div>
	);
};

export default ReviewCard;
