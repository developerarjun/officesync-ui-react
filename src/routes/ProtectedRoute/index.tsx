import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ isPublic, isAuthorized } : any) => {
  console.log(isAuthorized,isPublic)
  return (isPublic || isAuthorized) ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoute;