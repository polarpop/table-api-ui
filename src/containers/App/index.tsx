import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';
import { Switch } from 'react-router';

import { ErrorBoundary, LazyRoute } from '../../components';

import { Routes } from '../../types';

import { onRouteAdded, onTitleChange } from '../../actions';

import { ConnectedRouter } from 'connected-react-router';
import { Helmet } from 'react-helmet-async';

export default function MainApp({ history }: any) {

  const theme = useSelector((state: any) => state.app.theme);
  const title = useSelector((state: any) => state.app.title);

  const dispatch = useDispatch();

  const routes = useSelector((state: any) => {
    if (state.user.authenticated) {
      return state.routes;
    }
    return state.routes.filter((route: any) => !route.secure);
  });

  if (routes.length === 0) {
    dispatch(onRouteAdded({
      id: Math.floor(Math.random()),
      component: () => import('../../components/AppLoading/AppLoading'),
      path: '/',
      secure: false,
      exact: true
    }));

    dispatch(onTitleChange("Not Found..."));
  }

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <CssBaseline />
      <ErrorBoundary>
        <ConnectedRouter history={history}>
          <Switch>
            {routes.map((route: Routes.AppRoute, index: number) => (
              <LazyRoute
                route={{ ...route.props }}
                component={route.component}
                key={index}></LazyRoute>
            ))}
          </Switch>
        </ConnectedRouter>
      </ErrorBoundary>
    </ThemeProvider>
  );
}