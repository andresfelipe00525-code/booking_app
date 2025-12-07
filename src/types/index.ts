// ✅ IMÁGENES DEL HOTEL
export interface HotelImage {
	id: number;
	url: string;
	hotelId: number;
}

// ✅ CIUDAD
export interface City {
	id: number;
	name: string;
	country: string;
	countryId: string;
}

// ✅ HOTEL COMPLETO (SEGÚN TU API REAL)
export interface Hotel {
	id: number;
	name: string;
	description: string;
	price: string;
	address: string;
	lat: string;
	lon: string;
	rating: string | null;
	images?: HotelImage[];
	city?: City;
}

export interface HotelCardProps {
	hotel: Hotel;
}

export interface ReviewForm {
	rating: number;
	comment: string;
}
