import RatingStars from '../../RatingStars';
import { IoLocationOutline } from 'react-icons/io5';

interface HeroProps {
	name: string;
	city: string;
	image: string;
	rating: number;
	price: number;
}

const Hero = ({ name, city, image, rating, price }: HeroProps) => {
	return (
		<section className="relative mb-10 h-[420px] w-full overflow-hidden rounded-3xl shadow-2xl">
			{/* IMAGEN */}
			<img
				src={image}
				alt={name}
				className="absolute inset-0 h-full w-full object-cover"
			/>

			{/* OVERLAY */}
			<div className="absolute inset-0 bg-black/40" />

			{/* CONTENIDO */}
			<div className="relative z-10 flex h-full flex-col justify-end p-8 text-white">
				{/* PRECIO */}
				<span className="mb-4 w-fit rounded-full bg-white/90 px-4 py-1 text-sm font-semibold text-black shadow-lg backdrop-blur-md">
					${price} / noche
				</span>

				{/* TÍTULO */}
				<h1 className="text-3xl font-semibold tracking-tight drop-shadow-xl">
					{name}
				</h1>

				{/* CIUDAD */}
				<div className="mt-1 flex items-center gap-1 text-sm text-white/90">
					<IoLocationOutline size={16} />
					<span>{city}</span>
				</div>

				{/* RATING */}
				<div className="mt-3 flex items-center gap-2">
					<RatingStars rating={rating} size={16} />
					<span className="text-sm font-medium">{rating.toFixed(1)}</span>
				</div>
			</div>
		</section>
	);
};

export default Hero;
