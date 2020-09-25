import { Theme } from '@material-ui/core';

export namespace App {
  export type AppThemeAction = {
    theme: Theme,
    useResponsiveFonts?: boolean
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

  export type AppState = {
    useResponsiveFonts: boolean,
    title: string,
    loading: boolean,
    theme?: Theme
  };
}