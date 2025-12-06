interface ReviewUser {
	id: number;
	name: string;
}

export interface Review {
	id: number;
	comment: string;
	rating: number;
	user: ReviewUser;
}

interface ReviewListProps {
	reviews: Review[];
}

const ReviewList = ({ reviews }: ReviewListProps) => {
	if (!reviews || reviews.length === 0) return null;

	return (
		<div className="space-y-4">
			{reviews.map((review) => (
				<div
					key={review.id}
					className="rounded-2xl border bg-white p-4 dark:bg-zinc-900"
				>
					<p className="text-sm text-gray-700 dark:text-gray-300">
						{review.comment}
					</p>

					<div className="mt-2 text-xs text-gray-500">
						Rating: {review.rating} ★ — {review.user.name}
					</div>
				</div>
			))}
		</div>
	);
};

export default ReviewList;
