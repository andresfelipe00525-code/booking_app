import { useState, useCallback } from 'react';
import type { ApiRequestOptions } from '../types';
import api from '../app/services/api';

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
					data, // ✅ AXIOS USA data, NO body
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
