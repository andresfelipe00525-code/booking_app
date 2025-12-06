interface MapProps {
	lat?: number | string;
	lon?: number | string;
}

const Map = ({ lat, lon }: MapProps) => {
	const zoom = 16;

	const isValidLocation =
		lat !== undefined && lon !== undefined && lat !== null && lon !== null;

	if (!isValidLocation) {
		return (
			<div
				className="
          aspect-square 
          w-full 
          rounded-3xl 
          bg-white/70 
          dark:bg-black/40
          backdrop-blur-xl
          shadow-lg 
          flex 
          items-center 
          justify-center
        "
			>
				<p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
					Location not available
				</p>
			</div>
		);
	}

	return (
		<div
			className="
        relative
        aspect-square 
        w-full 
        overflow-hidden 
        rounded-3xl 
        shadow-xl
        ring-1 
        ring-black/5
        dark:ring-white/10
      "
		>
			{/* Overlay iOS */}
			<div className="absolute inset-0 z-10 pointer-events-none bg-black/5 dark:bg-black/20" />

			<iframe
				src={`https://maps.google.com/maps?q=${lat},${lon}&z=${zoom}&output=embed`}
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
				allowFullScreen
				className="
          w-full 
          h-full 
          border-0
          transition-transform 
          duration-300 
          hover:scale-[1.01]
        "
			/>
		</div>
	);
};

export default Map;
