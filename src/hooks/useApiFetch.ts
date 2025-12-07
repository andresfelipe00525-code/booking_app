import { useState, useCallback } from 'react';
import api from '../app/services/api';

/* ✅ Definimos el tipo aquí mismo para evitar errores en Vercel */
interface ApiRequestOptions {
	url: string;
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
	data?: any;
	headers?: Record<string, string>;
}

function useApiFetch<T = any>() {
	const [data, setData] = useState<T>([] as T);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const fetchApi = useCallback(
		async ({ url, method = 'GET', data, headers = {} }: ApiRequestOptions) => {
			try {
				setLoading(true);
				setError(null);

				const response = await api({
					url,
					method,
					data, // ✅ AXIOS usa "data", no "body"
					headers,
				});

				setData(response.data);
				return response.data;
			} catch (err: any) {
				setError(err?.message || 'Unexpected error');
				throw err;
			} finally {
				setLoading(false);
			}
		},
		[],
	);

	return [data, fetchApi, loading, error] as const;
}

export default useApiFetch;
