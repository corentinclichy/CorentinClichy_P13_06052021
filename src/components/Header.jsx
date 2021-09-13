// LIB IMPORTS
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

//style
import styled from "styled-components";

// ASSETS
import Logo from "../../public/argentBankLogo.png";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

// TODO
// TODO: Add Link to Sign In with react-router-dom
// TODO: Add Link to Home on the logo with react-router-dom

/**
 * @name Header
 * @description Header of the application
 * @param {object} props
 * @returns {JSX}
 */
function Header({ isLoggedIn, user }) {
  return (
    <MainNav>
      <MainNavLogo to="/">
        <img src={Logo} alt="" />
        <h1 className="sr-only">Argent Bank</h1>
      </MainNavLogo>

      <div>
        {isLoggedIn ? (
          <>
            <MainNavItem to="/user">
              <FontAwesomeIcon icon={faUserCircle} />
              Tony
            </MainNavItem>
            <MainNavItem to="/sign-out">
              <FontAwesomeIcon icon={faSignOutAlt} />
              Sign Out
            </MainNavItem>
          </>
        ) : (
          <MainNavItem to="/sign-in">
            <FontAwesomeIcon icon={faUserCircle} />
            Sign In
          </MainNavItem>
        )}
      </div>
    </MainNav>
  );
}

// style for the header
const MainNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;

  a {
    font-weight: bold;
    color: #2c3e50;
  }
`;

const MainNavLogo = styled(Link)`
  display: flex;
  align-items: center;

  img {
    max-width: 100%;
    width: 200px;
  }
`;

const MainNavItem = styled(Link)`
  text-decoration: none;
  margin-right: 0.5rem;

  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

export default Header;
