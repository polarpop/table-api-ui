import { App } from '../../types';
import constants from '../../constants';

const { app } = constants;

export function onAppError({ error }: { error: Error }): App.AppAction {
  return {
    type: app.APP_ERROR_CREATED,
    payload: {
      error
    }
  }
}

export function dismissAppError(): Partial<App.AppAction> {
  return {
    type: app.APP_ERROR_DISMISSED
  }
}