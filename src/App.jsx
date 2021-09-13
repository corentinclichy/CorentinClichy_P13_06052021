import React from "react";
import { Route, Switch } from "react-router";
import { useLocation } from "react-router-dom";

// Style
import "./App.css";
import styled from "styled-components";

// Components
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

// Pages
import SignIn from "./pages/SignIn";
import User from "./pages/User";

/**
 * @name App
 * @description Componente principal de la aplicación
 * @param {object} props
 * @returns {JSX}
 */
function App() {
  // Get the location from the react-router-dom
  const location = useLocation();
  // Check if location.pathname is equal to "/sign-in"
  const isBgBlack =
    location.pathname === "/sign-in" || location.pathname === "/user"
      ? "true"
      : "";

  return (
    <AppContainer>
      <Header isLoggedIn />
      <MainContainer isBgBlack={isBgBlack}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/user">
            <User />
          </Route>
        </Switch>
      </MainContainer>
      <Footer />
    </AppContainer>
  );
}

// Style

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContainer = styled.main`
  flex: 1;
  background-color: ${(props) => (props.isBgBlack ? "#12002b" : "")};
`;

export default App;
