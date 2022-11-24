import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
	const { state } = useLocation();

	return state?.logged ? children : <Navigate to='/login' />;
};
