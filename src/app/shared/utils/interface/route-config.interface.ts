export interface RouteConfigInterface {
  layout: React.ComponentType<any>;
  routes: RouteInterface[];
}

export interface RouteInterface {
  name?: string;
  title?: string;
  component?: React.ComponentType<any>;
  path?: string;
  isPublic?: boolean;
  isAuthorized?: boolean;
}
