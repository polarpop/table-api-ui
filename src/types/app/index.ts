import { Theme } from '@material-ui/core';

export type AppState = {
  useResponsiveFonts: boolean,
  title: string,
  loading: boolean,
  theme?: Theme
};

export type AppAction = {
  type: string,
  payload: {
    title?: string,
    theme?: Theme,
    useResponsiveFonts?: boolean,
    error?: Error
  }
};

export type AppThemeAction = {
  theme: Theme,
  useResponsiveFonts?: boolean
}