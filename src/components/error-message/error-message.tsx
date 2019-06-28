import * as React from 'react';

interface Props {
  error?: string
}

const ErrorMessage = (props: Props) => (
  <React.Fragment>
    {props.error ? <span className="error error__validation">{props.error}</span> : null}
  </React.Fragment>
);

export default ErrorMessage;
