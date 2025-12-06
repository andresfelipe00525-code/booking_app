import AppRouter from '@/routes/AppRouter';
import { Toaster } from 'react-hot-toast';

const App = () => {
	return (
		<>
			<AppRouter />

			{/* Notifications */}
			<Toaster
				position="top-right"
				toastOptions={{
					duration: 3000,
					style: {
						borderRadius: '12px',
					},
				}}
			/>
		</>
	);
};

export default App;
