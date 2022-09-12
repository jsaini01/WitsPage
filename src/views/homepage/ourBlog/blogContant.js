import React from "react";

import {
  Wraper,
  Contant,
  MainHeading,
  BorderWrap,
  Container,
  ContainerContant,
  IconImg,
  Lefticon,
  Righticon,
} from "styles/views/homepage/ourBlog";

import leftArrow from "assets/images/leftarrow.png";
import rightarrow from "assets/images/rightarrow.png";

const BlogContant = () => {
  return (
    <Wraper>
      <Contant>Our Thoughts in</Contant>
      <MainHeading>Our Blog</MainHeading>
      <BorderWrap></BorderWrap>

      <Container>
        <ContainerContant>
          We're here to make your thoughts on tech a little more… thought-ful.
        </ContainerContant>
        <IconImg>
          <Lefticon src={leftArrow} alt="leftarrow" />
          <Righticon src={rightarrow} alt="leftarrow" />
        </IconImg>
      </Container>
    </Wraper>
  );
};

export default BlogContant;
