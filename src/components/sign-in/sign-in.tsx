import * as React from 'react';

interface Props {
  isSubmitDisabled: boolean,
  onFormSubmit: () => void,
  onInputChange: (evt: React.ChangeEvent, keyName: string) => void
};

const SignIn:React.FunctionComponent<Props> = ({isSubmitDisabled, onFormSubmit, onInputChange}) => {
  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>

          <form className="login__form form" action="#" method="post" onSubmit={onFormSubmit}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                required={true}
                onChange={(evt) => onInputChange(evt, `email`)}
              />
            </div>

            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                required={true}
                onChange={(evt) => onInputChange(evt, `password`)}
              />
            </div>

            <button className="login__submit form__submit button" type="submit" disabled={isSubmitDisabled}>Sign in</button>
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
    </main>
  );
};

export default SignIn;
