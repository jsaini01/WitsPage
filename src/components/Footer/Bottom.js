import React from "react";
import {
  Heads,
  LeftBottom,
  Lists,
  Listcenter,
  ListLast,
  BorderFotter,
  Peras,
  Spans,
} from "styles/components/Footer/index";

const Bottom = () => {
  return (
    <LeftBottom>
      <Lists>
        <Heads>About Us</Heads>
        <Heads>Services</Heads>
        <Heads>Case Studies</Heads>
        <Heads>Our Process</Heads>
        <Heads>Industries</Heads>
      </Lists>

      <Listcenter>
        <Heads>General</Heads>
        <BorderFotter></BorderFotter>
        <Peras>Company</Peras>
        <Peras>Career</Peras>
        <Peras>Blogs</Peras>
        <Peras>Contact Us</Peras>
      </Listcenter>

      <ListLast>
        <Heads>Contact Us</Heads>
        <BorderFotter></BorderFotter>
        <Peras>
          SCO 40-41 D, 3rd floor,
          <Spans>City Heart, Kharar, Punjab-140301</Spans>
        </Peras>
        <Peras>
          Unit 37 Tileyard Road, N7 9AH <Spans>California, United States</Spans>
        </Peras>
      </ListLast>
    </LeftBottom>
  );
};

export default Bottom;
