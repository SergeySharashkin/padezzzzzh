import { Component } from "react";
import { Label, Input, Form } from "./SearchFilterInput.styled";
import PropTypes from "prop-types";

class SearchFilterInput extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  };
  handleSearch = (event) => {
    const { value } = event.currentTarget;
    this.props.onChange(value);
  };
  render() {
    return (
      <Form>
        <Label>
          Найти контакт по имени
          <Input
            type="text"
            name="filter"
            title="Name search. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            onChange={this.handleSearch}
            required
          />
        </Label>
      </Form>
    );
  }
}

export default SearchFilterInput;
