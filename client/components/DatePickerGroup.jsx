import React, { Component } from "react";
import DatePicker from "material-ui/DatePicker";

class DatePickerGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstDate: null,
      secondDate: null,
      defaultDate: null,
      isSelected: false
    };
  }

  handleChangeFirst = (event, date) => {
    this.setState({
      ...this.state,
      firstDate: date
    });
  };

  handleChangeSecond = (event, date) => {
    this.setState({
      ...this.state,
      secondDate: date,
      isSelected: true
    });
  };

  handleOpen = () => {
    let currentDate = new Date();

    if (this.state.firstDate) {
      const defaultDate = this.state.firstDate;
      const month = defaultDate.getMonth() + 1;
      const year = defaultDate.getFullYear();

      currentDate = new Date(`${month}-01-${year}`);
    }

    if (!this.state.secondDate) {
      this.setState({
        ...this.state,
        defaultDate: currentDate
      });
    }
  };

  handleClose = () => {
    if (this.state.isSelected) {
      this.setState({
        ...this.state,
        defaultDate: null,
      });
    } else {
      this.setState({
        ...this.state,
        secondDate: null,
        defaultDate: null,
        isSelected: false
      });
    }
  };

  getValue = () => {
    const { isSelected, firstDate, secondDate, defaultDate } = this.state;

    if (isSelected) {
      return secondDate;
    }

    if (!firstDate && !isSelected) {
      return null;
    }

    return defaultDate;
  };

  render() {
    return (
      <div className="datepicker-container">
        <DatePicker
          hintText="First Date Picker"
          value={this.state.firstDate}
          onChange={this.handleChangeFirst}
        />
        <DatePicker
          className="second-date-picker"
          hintText="Second Date Picker"
          disabled={!this.state.firstDate}
          value={this.getValue()}
          onChange={this.handleChangeSecond}
          onClick={this.handleOpen}
          onDismiss={this.handleClose}
        />
      </div>
    );
  }
}

export default DatePickerGroup;
