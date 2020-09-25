import { AppAction } from '../../types';
import constants from '../../constants';

const { app } = constants;

export function onAppLoading(): Partial<AppAction> {
  return {
    type: app.APP_LOADING
  }
}

export function onAppLoaded(): Partial<AppAction> {
  return {
    type: app.APP_LOADED
  }
}

export function onTitleChange(title: string): AppAction {
  return {
    type: app.APP_TITLE_CHANGE,
    payload: {
      title
    }
  }
}

export * from './theme';
export * from './error';