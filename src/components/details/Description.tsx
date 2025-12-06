import RatingStars from '../../RatingStars';
import { IoLocationOutline } from 'react-icons/io5';

interface DescriptionProps {
	rating: number;
	address: string;
	description: string;
}

const Description = ({ rating, address, description }: DescriptionProps) => {
	return (
		<section className="mt-10 rounded-3xl bg-white/80 p-6 shadow-xl backdrop-blur-xl border border-white/50">
			{/* HEADER */}
			<div className="mb-4 flex items-center justify-between">
				<div>
					<h2 className="text-xl font-semibold tracking-tight text-gray-900">
						Información del hotel
					</h2>

					<div className="mt-1 flex items-center gap-1 text-gray-500 text-sm">
						<IoLocationOutline size={16} />
						<span>{address}</span>
					</div>
				</div>

				<div className="flex items-center gap-2">
					<RatingStars rating={rating} size={16} />
					<span className="text-sm font-medium text-gray-700">
						{rating.toFixed(1)}
					</span>
				</div>
			</div>

			{/* DIVIDER */}
			<div className="my-4 h-px w-full bg-gray-200" />

			{/* DESCRIPTION */}
			<p className="text-sm leading-relaxed text-gray-600">{description}</p>
		</section>
	);
};

export default Description;
