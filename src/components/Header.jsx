// LIB IMPORTS
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

//style
import styled from "styled-components";

// ASSETS
import Logo from "../../public/argentBankLogo.png";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

// Redux state
import { useDispatch, useSelector } from "react-redux";
import { selectUserProfile } from "../features/UserProfile/userProfileSlice";
import { signOut } from "../features/Login/userSlice";
import { reset } from "../features/UserProfile/userProfileSlice";

/**
 * @name Header
 * @description Header of the application
 * @param {object} props
 * @returns {JSX}
 */
function Header() {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserProfile);

  let isLoggedIn = false;

  if (userInfo.email) {
    isLoggedIn = true;
  }

  const handleSignOut = () => {
    dispatch(signOut());
    dispatch(reset());
  };

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
              {userInfo.firstName}
            </MainNavItem>
            <MainNavItem onClick={handleSignOut} to="/">
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
