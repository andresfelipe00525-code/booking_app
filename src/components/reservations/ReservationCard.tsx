// src/components/reservations/ReservationCard.tsx
import { FaTrash, FaStar } from 'react-icons/fa';

export interface Reservation {
	id: number;
	hotelName?: string;
	date?: string;
	rating?: number;
}

interface Props {
	reservation: Reservation;
	onDelete: (id: number) => void;
	onRate: (id: number, rating: number) => void;
}

const ReservationCard = ({ reservation, onDelete, onRate }: Props) => {
	const { id, hotelName = 'Hotel', date = 'N/A', rating = 0 } = reservation;

	return (
		<article className="rounded-2xl bg-white/80 p-4 shadow-md">
			<h4 className="font-semibold">{hotelName}</h4>
			<p className="text-sm text-gray-500">{date}</p>

			<div className="mt-3 flex justify-between items-center">
				<div className="flex gap-1">
					{[1, 2, 3, 4, 5].map((v) => (
						<button key={v} onClick={() => onRate(id, v)}>
							<FaStar
								className={v <= rating ? 'text-yellow-400' : 'text-gray-300'}
							/>
						</button>
					))}
				</div>

				<button onClick={() => onDelete(id)}>
					<FaTrash className="text-red-500" />
				</button>
			</div>
		</article>
	);
};

export default ReservationCard;
