import PropTypes from "prop-types";
import { Item, Name, Number} from "./PadList.styled";
import React from "react";

const PadItem = ({word}) => {
  return (
    <Item>
      <Name>
        {word.padezh}: <Number>{word.word}</Number>
      </Name>
     
    </Item>
  );
};
export default PadItem;
PadItem.propTypes = {
  word: PropTypes.object.isRequired
};
