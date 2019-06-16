import React from 'react';
import PropTypes from 'prop-types';

const SignIn = (props) => {
  const {
    onSubmitForm,
    onChangeInput
  } = props;

  return (
    <div className="page__login-container container">
      <section className="login">
        <h1 className="login__title">Sign in</h1>

        <form className="login__form form" action="#" method="post" onSubmit={onSubmitForm}>
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">E-mail</label>
            <input
              className="login__input form__input"
              type="email"
              name="email"
              placeholder="Email"
              required=""
              onChange={() => onChangeInput()}
            />
          </div>

          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">Password</label>
            <input
              className="login__input form__input"
              type="password"
              name="password"
              placeholder="Password"
              required=""
              onChange={() => onChangeInput()}
            />
          </div>

          <button className="login__submit form__submit button" type="submit">Sign in</button>
        </form>
      </section>

      <section className="locations locations--login locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>Amsterdam</span>
          </a>
        </div>
      </section>
    </div>
  );
};

SignIn.propTypes = {
  onSubmitForm: PropTypes.func,
  onChangeInput: PropTypes.func
};

export default SignIn;
