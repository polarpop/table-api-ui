import { combineReducers } from 'redux';
import error from './error';
import theme from './theme';
import { App } from '../../types';
import constants from '../../constants';


function loading(state = false, action: App.AppAction) {
  switch (action.type) {
    case constants.app.APP_LOADING:
      return true;
    case constants.app.APP_LOADED:
      return false;
    default:
      return state;
  }
}

function title(state = "Not Found", action: App.AppAction) {
  switch (action.type) {
    case constants.app.APP_TITLE_CHANGE:
      return action.payload.title;
    default:
      return state;
  }
}

export default combineReducers({
  error,
  theme,
  loading,
  title
});
