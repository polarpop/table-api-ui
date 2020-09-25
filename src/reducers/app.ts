import { App } from '../types';
import constants from '../constants';
import { createMaterialTheme } from '../utils';



const defaultState = {
  title: 'Not Found',
  useResponsiveFonts: true,
  loading: false
};

export function app(state: App.AppState = defaultState, action: App.AppAction) {
  switch (action.type) {
    case constants.app.APP_LOADING:
      return {
        ...state,
        loading: true
      };
    case constants.app.APP_LOADED:
      return {
        ...state,
        loading: false
      };
    case constants.app.THEME_CHANGE:
      if (action.payload.theme) {
        const newTheme = createMaterialTheme(action.payload.theme)(action.payload.useResponsiveFonts);
        return {
          ...state,
          theme: newTheme
        }
      }
      return state;
    case constants.app.APP_TITLE_CHANGE:
      return {
        ...state,
        title: action.payload.title || "Not Found"
      };
    case constants.app.APP_ERROR_CREATED:
      return {
        ...state,
        error: action.payload.error
      };
    case constants.app.APP_ERROR_DISMISSED:
      return {
        ...state,
        error: undefined
      };
    default:
      return state;
  }
}