import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface AuthContextType {
	isAuth: boolean;
	login: (token: string) => void;
	logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [isAuth, setIsAuth] = useState(false);

	const login = (token: string) => {
		localStorage.setItem('token', token);
		setIsAuth(true);
	};

	const logout = () => {
		localStorage.removeItem('token');
		setIsAuth(false);
	};

	return (
		<AuthContext.Provider value={{ isAuth, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => {
	const ctx = useContext(AuthContext);

	if (!ctx) {
		throw new Error('useAuth must be used within AuthProvider');
	}

	return ctx;
};

export default useAuth;
