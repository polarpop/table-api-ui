import { RouteProps } from 'react-router';

export interface AppRoute {
  id: Number;
  component: () => Promise<any>;
  props: RouteProps;
  secure?: boolean;
}

export interface RouteAction {
  type: string;
  payload: AppRoute;
  [key: string]: any;
}

export type RoutesState = AppRoute[];