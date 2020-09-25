import constants from '../constants';
import { createDefaultReducerState } from '../utils';
import { RoutesState, RouteAction, AppRoute } from '../types'



/**
 * A way to use lazy loaded components through routes. This allows for route
 * guarding, and adding of routes dynamically.
 * 
 * @example
 * import { createDefaultReducerState } from '../utils';
 * 
 * const defaultState = createDefaultReducerState<RoutesState>([{
 *  id: 1,
 *  component: () => import('../components/AppLoading'),
 *  props: {
 *    path: '/',
 *    exact: false
 *  },
 *  secure: false
 * }]);
*/
const defaultState = createDefaultReducerState<RoutesState>([]);

export function routes(state = defaultState, action: RouteAction) {
  switch (action.type) {
    case constants.routes.ROUTE_ADDED:
      const newRoutes = [...state];
      if (!state.find((route: AppRoute) => route.id === action.payload.id)) {
        newRoutes.push(action.payload);
      }
      return newRoutes;
    case constants.routes.ROUTE_REPLACED:
      return state.filter((route: AppRoute) => route.id !== action.payload.id);
    default:
      return state;
  }
}