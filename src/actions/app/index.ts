import { App } from '../../types';
import constants from '../../constants';

const { app } = constants;

export function onAppLoading(): Partial<App.AppAction> {
  return {
    type: app.APP_LOADING
  }
}

export function onAppLoaded(): Partial<App.AppAction> {
  return {
    type: app.APP_LOADED
  }
}

export function onTitleChange(title: string): App.AppAction {
  return {
    type: app.APP_TITLE_CHANGE,
    payload: {
      title
    }
  }
}

export * from './theme';
export * from './error';