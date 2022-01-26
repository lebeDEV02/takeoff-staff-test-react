import { useContext } from 'react';
import { AuthContext } from '../hoc/AuthProvider';
import { useSelector } from 'react-redux';
export function useAuth() {
	return useSelector((state) => state.user.user);
}
