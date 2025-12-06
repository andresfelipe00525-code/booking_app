/* =========================
 ✅ REVIEW
========================= */
export interface ReviewForm {
	rating: number;
	comment: string;
}

export interface ReviewRatingProps {
	setReview: React.Dispatch<React.SetStateAction<ReviewForm>>;
}

/* =========================
 ✅ RESERVATION
========================= */
export interface Reservation {
	id: number;
	hotelId: number;
	checkIn: string;
	checkOut: string;
	guests: number;
}

export interface ReservationListProps {
	reservations: Reservation[];
	onDelete: (id: number) => void;
	onRate: (hotelId: number) => void;
}

/* =========================
 ✅ API
========================= */
export interface ApiRequestOptions {
	url: string;
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
	data?: any;
	headers?: Record<string, string>;
}

/* =========================
 ✅ HOTEL
========================= */
export interface Hotel {
	id: number;
	name: string;
	city: string;
	image: string;
	price: number;
	rating: number;
}

export interface HotelCardProps {
	hotel: Hotel;
}

export interface HotelListProps {
	hotels: Hotel[];
}
export interface City {
	id: number;
	name: string;
}
