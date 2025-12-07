// ✅ IMÁGENES
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

// ✅ HOTEL COMPLETO (EL REAL DE TU API)
export interface Hotel {
	id: number;
	name: string;
	description: string;
	price: string;
	address: string;
	lat: string;
	lon: string;
	rating: string | null;
	images: HotelImage[];
	city: City;
}

// ✅ PROPS DE HOTEL CARD
export interface HotelCardProps {
	hotel: Hotel;
}

// ✅ PROPS DE HOTEL LIST
export interface HotelListProps {
	hotels: Hotel[];
}
