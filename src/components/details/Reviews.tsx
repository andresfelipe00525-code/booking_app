import RatingStars from '../../RatingStars';

interface Review {
	id: number;
	user: string;
	avatar?: string;
	rating: number;
	comment: string;
	date: string;
}

interface ReviewsProps {
	reviews: Review[];
}

const Reviews = ({ reviews }: ReviewsProps) => {
	if (!reviews?.length) {
		return (
			<section className="mt-16">
				<h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900">
					Opiniones
				</h2>
				<p className="text-sm text-gray-500">
					Este hotel aún no tiene reseñas.
				</p>
			</section>
		);
	}

	return (
		<section className="mt-16">
			{/* HEADER */}
			<div className="mb-6 flex items-center justify-between">
				<h2 className="text-2xl font-semibold tracking-tight text-gray-900">
					Opiniones
				</h2>

				<span className="rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
					{reviews.length}
				</span>
			</div>

			{/* LISTA */}
			<div className="space-y-4">
				{reviews.map((review) => (
					<div
						key={review.id}
						className="rounded-3xl bg-white/90 p-5 shadow-lg backdrop-blur-xl border border-white/40"
					>
						{/* USER */}
						<div className="flex items-center gap-3">
							{review.avatar ? (
								<img
									src={review.avatar}
									alt={review.user}
									className="h-10 w-10 rounded-full object-cover"
								/>
							) : (
								<div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
									{review.user.charAt(0).toUpperCase()}
								</div>
							)}

							<div className="flex-1">
								<p className="text-sm font-semibold text-gray-900">
									{review.user}
								</p>
								<p className="text-xs text-gray-400">{review.date}</p>
							</div>

							<RatingStars rating={review.rating} size={14} />
						</div>

						{/* COMMENT */}
						<p className="mt-3 text-sm leading-relaxed text-gray-600">
							{review.comment}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Reviews;
