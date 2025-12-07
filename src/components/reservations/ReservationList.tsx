import ReservationCard from './ReservationCard';

export interface Reservation {
	id: number;
	hotelName?: string;
	date?: string;
	rating?: number;
}

interface ReservationsListProps {
	reservations: Reservation[];
	onDelete: (id: number) => void;
	onRate: (id: number, rating: number) => void;
}

const ReservationsList = ({
	reservations,
	onDelete,
	onRate,
}: ReservationsListProps) => {
	if (!reservations || reservations.length === 0) {
		return (
			<div className="flex h-40 items-center justify-center rounded-3xl bg-white/80 text-gray-500 shadow-md backdrop-blur-xl">
				No reservation found.
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
