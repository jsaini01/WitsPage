import React from "react";
import {
  BorderDiv,
  ClientDiv,
  ClientHeading,
  ClientPeraHead,
  SmallHeading,
  NextPera,
} from "../../styles/ClientStyle";

const ClientCase = () => {
  return (
    <ClientDiv>
      <ClientPeraHead>See who's winning with us</ClientPeraHead>
      <ClientHeading>Our Clients</ClientHeading>
      <BorderDiv></BorderDiv>
      <SmallHeading>
        These powerhouses are already winning business with us.
        <NextPera>
          We love what we do, and we hope you'll let us help you too.
        </NextPera>
      </SmallHeading>
    </ClientDiv>
  );
};

export default ClientCase;
