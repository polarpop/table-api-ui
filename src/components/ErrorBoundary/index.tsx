import React from 'react';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Backdrop from '@material-ui/core/Backdrop';

import { mapStateToProps } from '../../utils';
import { onAppError, onTitleChange } from '../../actions';

import { ErrorAccordian } from './ErrorMessageAccordian';

type State = {
  hasError: boolean,
  [key: string]: any
};

type Props = {
  [key: string]: any
};

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    this.props.dispatch(onAppError({ error }));
    this.props.dispatch(onTitleChange("Something went wrong..."));
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Backdrop open={this.state.hasError}>
          <Card raised>
            <CardContent>
              <Typography gutterBottom variant="h6">
                Well this is embarrasing
              </Typography>
              {process.env.NODE_ENV === 'development' && this.state.error ?
                (<ErrorAccordian />) : (
                  <Typography>
                    {(this.state.error?.message || "Something went wrong")}
                  </Typography>)}
            </CardContent>
          </Card>
        </Backdrop>
      );
    }

    return this.props.children;
  }
}

export default connect(mapStateToProps)(ErrorBoundary);