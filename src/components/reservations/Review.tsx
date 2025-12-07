import { useState } from 'react';
import useApiFetch from '../../hooks/useApiFetch';
import ReviewRating from './ReviewRating';
import toast from 'react-hot-toast';

interface ReviewForm {
	rating: number;
	comment: string;
}

interface ReviewProps {
	hotelId: number;
	closeModal: () => void;
}

const initialState: ReviewForm = {
	rating: 0,
	comment: '',
};

const Review = ({ hotelId, closeModal }: ReviewProps) => {
	const [, fetchReview] = useApiFetch();
	const [review, setReview] = useState<ReviewForm>(initialState);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async () => {
		const { comment, rating } = review;

		if (!comment.trim() || rating === 0) {
			setError('Please complete all fields');
			setTimeout(() => setError(null), 3000);
			return;
		}

		try {
			setLoading(true);

			await fetchReview({
				url: '/reviews',
				method: 'POST',
				data: {
					...review,
					hotelId,
				},
			});

			toast.success('Review submitted successfully');
			setReview(initialState);
			closeModal();
		} catch (err) {
			console.error(err);
			toast.error('Something went wrong');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="w-80 space-y-4 rounded-3xl bg-white/80 p-6 shadow-xl backdrop-blur-xl">
			<h2 className="text-center text-2xl font-semibold text-gray-900">
				Leave a Review
			</h2>

			<ReviewRating setReview={setReview} />

			<textarea
				className="w-full resize-none rounded-2xl border border-gray-200 bg-white/70 p-3 text-sm text-gray-800 shadow-inner outline-none transition focus:border-black/30 focus:ring-2 focus:ring-black/10"
				placeholder="Share your experience..."
				rows={4}
				value={review.comment}
				onChange={(e) => setReview({ ...review, comment: e.target.value })}
			/>

			{error && (
				<p className="rounded-xl bg-red-500/10 p-2 text-center text-sm text-red-600">
					{error}
				</p>
			)}

			<div className="flex justify-end">
				<button
					onClick={handleSubmit}
					disabled={loading}
					className="rounded-full bg-black px-6 py-2 text-sm font-medium text-white shadow-md transition hover:scale-105 hover:bg-black/90 disabled:opacity-50"
				>
					{loading ? 'Sending...' : 'Submit'}
				</button>
			</div>
		</div>
	);
};

export default Review;
