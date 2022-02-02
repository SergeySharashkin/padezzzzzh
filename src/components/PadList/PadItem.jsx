import PropTypes from "prop-types";
import { Item, Name, Number} from "./PadList.styled";
import React from "react";

const PadItem = ({ padezh, string}) => {
  return (
    <Item>
      <Name>
        {padezh}: <Number>{string}</Number>
      </Name>
     
    </Item>
  );
};
export default PadItem;
PadItem.propTypes = {
  padezh: PropTypes.string.isRequired,
  string: PropTypes.string.isRequired
};
