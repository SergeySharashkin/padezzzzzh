import React from "react";
import { Titel } from "../PadList/PadList.styled";
import { AddForm, AddFormLabel, AddFormInput, AddFormBtn } from "./Form.styled";
// import PropTypes from "prop-types";
import PropTypes from "prop-types";
export default class Form extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    word: "",
  };
  handleChange = (event) => {
    const { value } = event.currentTarget;
    this.setState({ word: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.word);
  };
    render() {
    return (
      <>
        <Titel>Напишите слово</Titel>
        <AddForm onSubmit={this.handleSubmit}>
          <AddFormLabel>
            Существительное в иминительном падеже
            <AddFormInput
              type="text"
              name="name"
              value={this.state.word}
              onChange={this.handleChange}
              required
            />
          </AddFormLabel>
          
          <AddFormBtn type="submit">Нарисовать падежи</AddFormBtn>
        </AddForm>
      </>
    );
  }
}
