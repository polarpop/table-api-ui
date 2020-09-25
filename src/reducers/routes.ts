import constants from '../constants';
import { createDefaultReducerState } from '../utils';
import { Routes } from '../types'

const defaultState = createDefaultReducerState<Routes.RoutesState>([]);

export function routes(state = defaultState, action: Routes.RouteAction) {
  switch (action.type) {
    case constants.routes.ROUTE_ADDED:
      const newRoutes = [...state];
      if (!state.find((route: Routes.AppRoute) => route.id === action.payload.id)) {
        newRoutes.push(action.payload);
      }
      return newRoutes;
    case constants.routes.ROUTE_REPLACED:
      return state.filter((route: Routes.AppRoute) => route.id !== action.payload.id);
    default:
      return state;
  }
}