import * as React from 'react';
import {User} from '../../types';
import {Link} from 'react-router-dom';

const BASE_URL = `https://es31-server.appspot.com/six-cities`;

interface Props {
  isLoggedIn: boolean,
  user: User
};

const Header:React.FunctionComponent<Props> = ({isLoggedIn, user}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>

          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {!isLoggedIn
                  ? (
                    <Link
                      to="/login"
                      className="header__nav-link header__nav-link--profile"
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper" />
                      <span className="header__user-name user__name">Sign In</span>
                    </Link>
                  )
                  : (
                    <Link
                      to="/favorites"
                      className="header__nav-link header__nav-link--profile"
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper" style={{backgroundImage: `url(${BASE_URL}${user.avatarUrl})`}}/>
                      <span className="header__user-name user__name">{user.email}</span>
                    </Link>
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
