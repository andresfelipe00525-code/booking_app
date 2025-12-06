import type { ReservationListProps } from '../../types';
import ReservationCard from './ReservationCard';

const ReservationsList = ({
	reservations,
	onDelete,
	onRate,
}: ReservationListProps) => {
	if (!reservations.length) {
		return (
			<div className="flex h-40 items-center justify-center rounded-3xl bg-white/80 text-gray-500 shadow-md backdrop-blur-xl">
				No reservations found.
			</div>
		);
	}

	return (
		<div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
			{reservations.map((reservation) => (
				<div
					key={reservation.id}
					className="transition-transform duration-300 hover:-translate-y-1"
				>
					<ReservationCard
						reservation={reservation}
						onDelete={onDelete}
						onRate={onRate}
					/>
				</div>
			))}
		</div>
	);
};

export default ReservationsList;
