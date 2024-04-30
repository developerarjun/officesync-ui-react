import flattenDeep from 'lodash/flattenDeep';
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
const generateFlattenRoutes = (routes: any) => {
  if (!routes) return [];
  return flattenDeep(
    routes.map(({ routes: subRoutes, ...rest }: any) => [rest, generateFlattenRoutes(subRoutes)])
  );
};

export const renderRoutes = (mainRoutes: any) => {
  const Routes = () => {
    const layouts = mainRoutes.map(({ layout: Layout, routes }: any, index: any) => {
      const subRoutes = generateFlattenRoutes(routes);
      return (
        <Route key={index} element={<Layout />}>
          {subRoutes.map(({ component: Component, path, name, isPublic, isAuthorized }: any) => {
            return (
              <Route element={<ProtectedRoute isAuthorized={isAuthorized} isPublic={isPublic} />}>
                Component && path && (<Route key={name} element={<Component />} path={path} />)
              </Route>
            );
          })}
        </Route>
      );
    });
    return <ReactRoutes>{layouts}</ReactRoutes>;
  };
  return Routes;
};
