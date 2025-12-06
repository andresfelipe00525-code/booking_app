import { useEffect } from 'react';
import type { ReactNode } from 'react';

interface ModalProps {
	openModal: boolean;
	closeModal: () => void;
	children: ReactNode;
}

const Modal = ({ openModal, closeModal, children }: ModalProps) => {
	useEffect(() => {
		if (openModal) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [openModal]);

	if (!openModal) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			{/* BACKDROP */}
			<div
				onClick={closeModal}
				className="absolute inset-0 bg-black/30 backdrop-blur-md transition-opacity"
			/>

			{/* MODAL CARD */}
			<div className="relative w-full max-w-md mx-4 rounded-3xl bg-white/90 p-6 shadow-2xl backdrop-blur-xl border border-white/40 animate-scale-in">
				{/* HEADER */}
				<div className="flex items-center justify-between mb-4">
					<h3 className="text-lg font-semibold text-gray-900">Detalle</h3>

					<button
						onClick={closeModal}
						className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
					>
						✕
					</button>
				</div>

				{/* CONTENT */}
				<div className="text-sm text-gray-700">{children}</div>
			</div>
		</div>
	);
};

export default Modal;
