import React from "react";
import PropTypes from "prop-types";
import PadItem from "./PadItem";
import { Titel, List } from "./PadList.styled";
const PadList = ({ words }) => (
  <>
    <Titel> Перечень падежей </Titel>
    <List>
      {words.map((word) => (
        <PadItem
          key={word.padezh}
          word = {word}
  />
      ))}
    </List>
  </>
);
export default PadList;
PadList.propTypes = {
 words: PropTypes.array,

};
