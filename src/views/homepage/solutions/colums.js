import React from "react";

import { ColumnArrow } from "components/Buttons";
import data from "data.json";

import {
  ColumnWrap,
  ColumnContantWraper,
  ColumnContant,
} from "styles/views/homepage/solutuion";

const Colums = () => {
  return (
    <>
      {data.map((data) => {
        return (
          <ColumnWrap key={data.id}>
            <ColumnContantWraper>
              <ColumnContant>{data.body}</ColumnContant>
            </ColumnContantWraper>
            <ColumnArrow />
          </ColumnWrap>
        );
      })}
    </>
  );
};

export default Colums;
