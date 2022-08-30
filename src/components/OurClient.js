import React from "react";

import { ClientWrap } from "../styles/ClientStyle";

import ClientCase from "./OurClint/ClientCase";
import ClintImg from "./OurClint/ClintImg";

const OurClient = () => {
  return (
    <ClientWrap>
      <ClientCase />
      <ClintImg />
    </ClientWrap>
  );
};

export default OurClient;
