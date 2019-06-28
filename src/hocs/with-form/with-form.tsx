import * as React from 'react';

const initialState = {
  isDisabled: true,
  key: Math.random(),
  errors: {},
  form: {}
};

interface State {
  isDisabled: boolean
  errors: object
  key: number
  form: object
}

const withForm = (Component) => {
  return class WithForm extends React.PureComponent<any, State> {
    constructor(props) {
      super(props);

      this.state = initialState;

      this._handleChange = this._handleChange.bind(this);
      this._handleFormSubmit = this._handleFormSubmit.bind(this);
      this._handleError = this._handleError.bind(this);
    }

    private _handleChange(evt) {
      evt.persist();

      this.setState((currentState) => ({
        isDisabled: !evt.target.form.checkValidity(),
        form: Object.assign({}, currentState.form, {
          [evt.target.name]: evt.target.value
        }),
        errors: Object.assign({}, currentState.errors, {
          [evt.target.name]: evt.target.validationMessage
        })
      }));
    }

    private _handleFormSubmit() {
      this.setState(Object.assign({}, initialState, {key: Math.random()}));
    }

    private _handleError(errors: object) {
      this.setState((currentState) => ({
        errors: Object.assign({}, currentState.errors, errors)
      }));
    }

    render() {
      const {key, form, errors, isDisabled} = this.state;

      return (
        <Component
          {...this.props}
          key={key}
          form={form}
          errors={errors}
          isDisabled={isDisabled}
          onChange={this._handleChange}
          onSubmit={this._handleFormSubmit}
          onError={this._handleError}
        />
      );
    }
  }
};

export default withForm;
