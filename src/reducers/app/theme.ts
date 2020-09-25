import { App } from '../../types';
import constants from '../../constants';
import { createMaterialTheme } from '../../utils';

const { app } = constants;

export default function theme(
  state: Partial<App.AppState> = { useResponsiveFonts: true },
  action: App.AppAction
) {
  switch (action.type) {
    case app.THEME_CHANGE:
      if (action.payload.theme) {
        const newTheme = createMaterialTheme(action.payload.theme);
        return {
          ...state,
          theme: newTheme(action.payload.useResponsiveFonts)
        }
      }
      return state;
    default:
      return state;
  }
}