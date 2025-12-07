interface GalleryProps {
	images?: string[];
}

const Gallery = ({ images }: GalleryProps) => {
	if (!images?.length) {
		return (
			<div className="flex h-48 items-center justify-center rounded-3xl bg-white/80 shadow-md backdrop-blur-xl border border-white/40">
				<p className="text-sm text-gray-500">No hay imágenes disponibles</p>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
			{images.map((img, index) => {
				// ✅ Forzamos HTTPS
				const safeImage = img.replace('http://', 'https://');

				return (
					<div
						key={index}
						className="h-40 rounded-2xl bg-gray-200 shadow-md bg-cover bg-center"
						style={{ backgroundImage: `url(${safeImage})` }}
					/>
				);
			})}
		</div>
	);
};

export default Gallery;
