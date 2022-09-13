import React from "react";
import {
  List,
  ContentWraper,
  Lists,
  Listcenter,
  ListLast,
  BorderWrap,
  ListContent,
  Span,
} from "styles/components/Footer/index";

const AboutusContent = () => (
  <ContentWraper>
    <Lists>
      <List>About Us</List>
      <List>Services</List>
      <List>Case Studies</List>
      <List>Our Process</List>
      <List>Industries</List>
    </Lists>

    <Listcenter>
      <List>General</List>
      <BorderWrap></BorderWrap>
      <ListContent>Company</ListContent>
      <ListContent>Career</ListContent>
      <ListContent>Blogs</ListContent>
      <ListContent>Contact Us</ListContent>
    </Listcenter>

    <ListLast>
      <List>Contact Us</List>
      <BorderWrap></BorderWrap>
      <ListContent>
        SCO 40-41 D, 3rd floor,
        <Span>City Heart, Kharar, Punjab-140301</Span>
      </ListContent>
      <ListContent>
        Unit 37 Tileyard Road, N7 9AH <Span>California, United States</Span>
      </ListContent>
    </ListLast>
  </ContentWraper>
);

export default AboutusContent;
