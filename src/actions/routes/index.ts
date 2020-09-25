import constants from '../../constants';

const { routes } = constants;

export function onRouteAdded(payload: any) {
  return {
    type: routes.ROUTE_ADDED,
    payload
  }
}