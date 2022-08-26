import React from "react";

import { BigButton } from "../headers/Button";
import data from "../data.json";

import { Column, ColHeading, ColHead1 } from "../../styles/SolutionStyle";

const Colums = () => {
  return (
    <>
      {data.map((data) => {
        return (
          <Column key={data.id}>
            <ColHeading>
              <ColHead1>{data.body}</ColHead1>
            </ColHeading>
            <BigButton />
          </Column>
        );
      })}
    </>
  );
};

export default Colums;
