import { AppAction, AppThemeAction } from '../../types';
import constants from '../../constants';

const { app } = constants;

export function onThemeChange(payload: AppThemeAction): AppAction {
  return {
    type: app.THEME_CHANGE,
    payload
  };
}