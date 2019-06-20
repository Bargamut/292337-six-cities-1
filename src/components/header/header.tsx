import * as React from 'react';
import {User} from '../../types';

const BASE_URL = `https://es31-server.appspot.com/six-cities`;

interface Props {
  isAuthorizationRequired: boolean,
  user: User,
  onClickSignIn: (evt: React.MouseEvent) => void
};

const Header:React.FunctionComponent<Props> = ({isAuthorizationRequired, user, onClickSignIn}) => {
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

export default Header;