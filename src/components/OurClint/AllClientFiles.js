import React from "react";
import { ClientWrap } from "../../styles/ClientStyle";
import ClientCase from "./ClientCase";
import ClintImg from "./ClintImg";

const AllClientFiles = () => {
  return (
    <ClientWrap>
      <ClientCase />
      <ClintImg />
    </ClientWrap>
  );
};

export default AllClientFiles;
