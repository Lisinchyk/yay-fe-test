/*eslint-disable import/default */
import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import injectTapEventPlugin from "react-tap-event-plugin";
import App from "./App";

const theme = getMuiTheme();

injectTapEventPlugin();

render(
	<MuiThemeProvider theme={theme}>
		<App />
	</MuiThemeProvider>,
	document.getElementById("root")
);
