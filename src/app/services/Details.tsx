import { useParams } from 'react-router-dom';

const Details = () => {
	const { id } = useParams();

	return (
		<div className="space-y-10">
			<div className=" rounded-3xl  from-gray-300 to-gray-400 shadow-xl" />

			<div className="rounded-3xl bg-white/90 p-8 shadow-xl backdrop-blur-xl border border-white/40 space-y-4">
				<h1 className="text-3xl font-semibold tracking-tight text-gray-900">
					Hotel Premium {id}
				</h1>

				<p className="text-gray-600 text-sm leading-relaxed">
					Este hotel ofrece una experiencia de lujo con vista al océano,
					habitaciones climatizadas, piscina infinita y restaurantes gourmet.
				</p>

				<div className="flex gap-4 pt-4">
					<button className="rounded-full bg-black px-6 py-2 text-sm font-medium text-white hover:bg-gray-800 transition">
						Reservar ahora
					</button>

					<button className="rounded-full border border-gray-300 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
						Guardar
					</button>
				</div>
			</div>
		</div>
	);
};

export default Details;
