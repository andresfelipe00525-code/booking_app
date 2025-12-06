import type { City } from '@/types';

interface FilterProps {
	cities: City[];
	onChange: (cityId: number) => void;
}

const Filter = ({ cities, onChange }: FilterProps) => {
	return (
		<div className="w-full">
			<select
				onChange={(e) => onChange(Number(e.target.value))}
				className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm focus:border-black focus:outline-none"
			>
				<option value={0}>Todas las ciudades</option>

				{cities.map((city) => (
					<option key={city.id} value={city.id}>
						{city.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default Filter;
