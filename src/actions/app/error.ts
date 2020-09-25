import { AppAction } from '../../types';
import constants from '../../constants';

const { app } = constants;

export function onAppError({ error }: { error: Error }): AppAction {
  return {
    type: app.APP_ERROR_CREATED,
    payload: {
      error
    }
  }
}

export function dismissAppError(): Partial<AppAction> {
  return {
    type: app.APP_ERROR_DISMISSED
  }
}