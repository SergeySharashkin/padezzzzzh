import React from "react";
import PropTypes from "prop-types";
import PadItem from "./PadItem";
import { Titel, List } from "./PadList.styled";
const PadList = ({ list }) => (
  <>
    <Titel> Перечень падежей </Titel>
    <List>
      {list.map(({ padezh, string }) => (
        <PadItem
          key={padezh}
          item = {{padezh, string}}
  />
      ))}
    </List>
  </>
);
export default PadList;
PadList.propTypes = {
 list: PropTypes.array,

};
