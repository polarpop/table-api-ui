import { App } from '../../types';
import constants from '../../constants';

const { app } = constants;


export default function error(state: Error | null = null, action: App.AppAction) {
  switch (action.type) {
    case app.APP_ERROR_CREATED:
      return action.payload.error
    case app.APP_ERROR_DISMISSED:
      return null;
    default:
      return state;
  }
}