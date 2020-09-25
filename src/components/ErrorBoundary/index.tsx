import React from 'react';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';

import { mapStateToProps } from '../../utils';
import { dismissAppError, onAppError, onTitleChange } from '../../actions';

import './ErrorBoundary.scss';

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

  private handleErrorClosed(event?: React.SyntheticEvent, reason?: string) {
    this.props.dispatch(dismissAppError());
    this.setState({
      error: undefined,
      hasError: false
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Backdrop open={this.state.hasError}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h6">
                Well this is embarrasing
              </Typography>
              {process.env.NODE_ENV === 'development' && this.state.error ?
                (<Accordion square className={'error-accordian'}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography variant="subtitle1">
                      {(this.state.error?.message || "Something went wrong")}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <pre>
                      <code>
                        {this.state.error?.stack}
                      </code>
                    </pre>
                  </AccordionDetails>
                </Accordion>) : (
                  <Typography>
                    {(this.state.error?.message || "Something went wrong")}
                  </Typography>)}
            </CardContent>
            <CardActions>
              <Button onClick={this.handleErrorClosed.bind(this)}>Dismiss</Button>
            </CardActions>
          </Card>
        </Backdrop>
      );
    }

    return this.props.children;
  }
}

export default connect(mapStateToProps)(ErrorBoundary);