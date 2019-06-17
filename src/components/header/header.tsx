import * as React from 'react';

const BASE_URL = `https://es31-server.appspot.com/six-cities`;

const Header = ({isAuthorizationRequired, user, onClickSignIn}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>

          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {isAuthorizationRequired
                  ? (
                    <a
                      className="header__nav-link header__nav-link--profile"
                      href="#"
                      onClick={onClickSignIn}
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper" />
                      <span className="header__user-name user__name">Sign In</span>
                    </a>
                  )
                  : (
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper" style={{backgroundImage: `url(${BASE_URL}${user.avatarUrl})`}}/>
                      <span className="header__user-name user__name">{user.email}</span>
                    </a>
                  )
                }
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isAuthorizationRequired: PropTypes.bool,
  user: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
    isPro: PropTypes.bool
  }),
  onClickSignIn: PropTypes.func
};

export default Header;
