import React, { useEffect, useRef, useState } from "react";
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
import SignIn from "../src/features/Login/SignIn";
import User from "../src/features/UserProfile/User";

// Redux
import { useDispatch } from "react-redux";
import { signOut } from "./features/Login/userSlice";
import { reset } from "./features/UserProfile/userProfileSlice";

/**
 * @name App
 * @description Componente principal de la aplicación
 * @param {object} props
 * @returns {JSX}
 */
function App () {
    const dispatch = useDispatch();

    const [ firstTimeLoad, setFirstTimeLoad ] = useState(true);

    // Get the location from the react-router-dom
    const location = useLocation();
    // Check if location.pathname is equal to "/sign-in"
    const isBgBlack =
        location.pathname === "/sign-in"
            ? "true"
            : "";

    //Access to local storage and check if remember me is checked
    const persistLocalStorageState = JSON.parse(
        localStorage.getItem("persist:UserData")
    );

    // Get the value of remember me state (true or false)
    const isRememberMe =
        persistLocalStorageState &&
        JSON.parse(persistLocalStorageState.user).data.isRememberMe;

    useEffect(() => {
        console.info("First time load", firstTimeLoad);

        if (firstTimeLoad) {
            setFirstTimeLoad(false);
            if (!isRememberMe) {
                console.info("Fire clearing localStorage");
                dispatch(signOut());
                dispatch(reset());
            }
        }
        return;
    }, [ firstTimeLoad ]);

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
  background-color: ${(props) => (props.isBgBlack ? "#12002b" : "#dfe6ed")};
`;

export default App;
