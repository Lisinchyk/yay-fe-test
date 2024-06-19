import React, { Component } from "react";
import DatePickerGroup from "./components/DatePickerGroup";

class App extends Component {
	render() {
		return (
			<div className="container">
				<h1>DataPickers</h1>
				<DatePickerGroup />
			</div>
		);
	}
}

export default App;
