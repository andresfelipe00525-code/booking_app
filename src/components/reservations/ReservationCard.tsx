import { Link } from 'react-router-dom';
import { MdDeleteOutline } from 'react-icons/md';
import { FaRegStar } from 'react-icons/fa';

interface ReservationCardProps {
	id: number;
	hotelId: number;
	hotelName: string;
	city: string;
	image: string;
	date: string;
	price: number;
	onDelete: (id: number) => void;
	onRate: (id: number) => void;
}

const ReservationCard = ({
	id,
	hotelId,
	hotelName,
	city,
	image,
	date,
	price,
	onDelete,
	onRate,
}: ReservationCardProps) => {
	return (
		<div className="group flex items-center gap-4 overflow-hidden rounded-3xl bg-white/90 p-4 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl backdrop-blur-xl border border-white/40">
			{/* IMAGEN */}
			<Link
				to={`/details/${hotelId}`}
				className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl"
			>
				<img
					src={image}
					alt={hotelName}
					className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
				/>
			</Link>

			{/* INFO */}
			<div className="flex flex-1 flex-col gap-1">
				<h3 className="line-clamp-1 text-base font-semibold text-gray-900">
					{hotelName}
				</h3>

				<p className="text-sm text-gray-500">{city}</p>

				<p className="text-xs text-gray-400">Reserva: {date}</p>

				<span className="mt-1 inline-block w-fit rounded-full bg-black px-3 py-0.5 text-xs font-medium text-white">
					${price}
				</span>
			</div>

			{/* ACTIONS */}
			<div className="flex flex-col items-end gap-3">
				<button
					onClick={() => onRate(hotelId)}
					className="flex items-center justify-center rounded-full bg-gray-100 p-2 hover:bg-gray-200 transition"
				>
					<FaRegStar size={14} />
				</button>

				<button
					onClick={() => onDelete(id)}
					className="flex items-center justify-center rounded-full bg-red-50 p-2 text-red-500 hover:bg-red-100 transition"
				>
					<MdDeleteOutline size={18} />
				</button>
			</div>
		</div>
	);
};

export default ReservationCard;
