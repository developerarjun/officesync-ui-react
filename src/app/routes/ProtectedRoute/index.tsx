import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ isPublic, isAuthorized } : any) => {
  return (isPublic || isAuthorized) ? <Outlet /> : <Navigate to='accounts/login' />
}

export default ProtectedRoute;