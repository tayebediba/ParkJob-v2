import React, { useEffect } from "react";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme/theme";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import mainRoutes from "./Routes/MainRoutes";

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "پارک جاب ";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <Switch>
          {mainRoutes.map(({ path, exact, Component }, i) => {
            return (
              <Route
                key={i}
                path={path}
                exact={exact}
                render={(props) => <Component {...props} />}
              />
            );
          })}
        </Switch>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
