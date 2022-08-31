import React from "react";

import {
  Headings,
  SmallHeading,
  MainHeading,
  Border,
  PeraDiv,
  Pera,
  ArrowImgs,
  Lefting,
  Righting,
} from "../../styles/OurBlogstyle";

const BlogHeadings = () => {
  return (
    <Headings>
      <SmallHeading>Our Thoughts in</SmallHeading>
      <MainHeading>Our Blog</MainHeading>
      <Border></Border>

      <PeraDiv>
        <Pera>
          We're here to make your thoughts on tech a little more… thought-ful.
        </Pera>
        <ArrowImgs>
          <Lefting src="./images/leftarrow.png" alt="leftarrow" />
          <Righting src="./images/rightarrow.png" alt="leftarrow" />
        </ArrowImgs>
      </PeraDiv>
    </Headings>
  );
};

export default BlogHeadings;
