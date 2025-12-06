import { Link } from 'react-router';
import Logo from './Logo';

function Brand() {
	return (
		<Link
			to="/"
			className="
        flex
        items-center
        gap-3
        rounded-full
        bg-white/70
        px-4
        py-2
        shadow-[0_8px_24px_rgba(0,0,0,0.15)]
        backdrop-blur-xl
        transition
        active:scale-95
      "
		>
			<Logo className="h-10 w-10" />

			<span className="text-xl font-semibold tracking-tight text-gray-900">
				Booking
				<span className="ml-1 text-gray-500">App</span>
			</span>
		</Link>
	);
}

export default Brand;
