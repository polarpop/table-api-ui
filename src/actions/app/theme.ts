import { App } from '../../types';
import constants from '../../constants';

const { app } = constants;

export function onThemeChange(payload: App.AppThemeAction): Partial<App.AppAction> {
  return {
    type: app.THEME_CHANGE,
    payload
  };
}