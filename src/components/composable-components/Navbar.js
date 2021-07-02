import propTypes from "prop-types";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import account from "../../assets/icons/account.svg";
import logoLarge from "../../assets/logo/logo-large.svg";
import logoSmall from "../../assets/logo/favicon.svg";
import mobileMenuToggleIcon from "../../assets/icons/mobile-toggle.svg";
import Images from "../composable-components/Images";
// Header Component takes in array property and renders them accordingly.

const Navbar = ({ navElements }) => {
  const ref = useRef();
  return (
    <>
      <div className="logo">
        <Link to="/home">
					<img className="desktop-header-logo" src={ logoLarge } alt="logo" />
					<img className="mobile-header-logo" src={ logoSmall } alt="logo" />
        </Link>
      </div>
      <div className="desktop-nav-cont">
        <nav className="desktop-nav">
          <ul>
            {
							navElements.map(
								(li) => (
									<li key={li.text.toString()}>
										<Link to={li.link}>{li.text}</Link>
									</li>
								)
							)
						}
            <li>
							<img src={ account } alt={ "userimage" } />
            </li>
          </ul>
          <Search screenType={ 1 } />
        </nav>
      </div>
      <div className="mobile-nav-cont">
        <nav className="mobile-nav">
					<div className="mobile-nav-close-btn-cont">
						<button type="button" className="mobile-nav-close-btn" onClick={(e) => (document.querySelector('.mobile-nav').classList.remove('active'))}>
							<i className="fas fa-times"></i>
						</button>
					</div>
          <ul>
            <li onClick={(e) => (document.querySelector('.mobile-nav').classList.remove('active'))}>
							<img src={ account } alt={ "userimage" } />
            </li>
            {
							navElements.map(
								(li) => (
									<li onClick={(e) => (document.querySelector('.mobile-nav').classList.remove('active'))} key={li.text.toString()}>
										<Link to={li.link}>{li.text}</Link>
									</li>
								)
							)
						}
          </ul>
        </nav>
				<div className="mobile-nav-toggle-btn-cont">
					<button type="button" className="mobile-nav-toggle-btn" onClick={(e) => (document.querySelector('.mobile-nav').classList.toggle('active'))}>
						<img src={ mobileMenuToggleIcon } alt="mobile menu toggle" />
					</button>
				</div>
        <Search screenType={ 2 } />
      </div>
    </>
  );
};

Navbar.propTypes = {
  navElements: propTypes.array,
};

Navbar.defaultProps = {
  navElements: ["Home", "About"],
};

export default Navbar;
