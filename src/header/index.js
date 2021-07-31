import * as ROUTES from '../../constants/routes';
import { BrowserRouter, Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__left">
          <Link to={ROUTES.HOME}>
            <img className="header__logo" src="./images/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="header__right">
            <Link to={ROUTES.SIGN_UP} className="btnSimple">Sign Up</Link>
            <Link to={ROUTES.LOGIN} className="btnSimple">Login</Link>
        </div>
      </div>
    </div>
  );
}
