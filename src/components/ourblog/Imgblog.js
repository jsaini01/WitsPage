import React from "react";
import {
  AllImgs,
  Blockchain,
  Commercial,
  WilBlog,
  Content,
  HeadingWits,
  PeraWits,
  HeadingBlock,
  HeadingCommerce,
} from "../../styles/OurBlogstyle";

const Imgblog = () => {
  return (
    <AllImgs>
      <WilBlog src="./images/wilblog.png" alt="wilblog" />
      <Content>
        <HeadingWits>WIL Blog</HeadingWits>
        <PeraWits>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat
        </PeraWits>
      </Content>
      <Blockchain src="./images/blockchain.png" alt="wilblog" />
      <HeadingBlock>Block Chain</HeadingBlock>
      <Commercial src="./images/commercial.png" alt="wilblog" />
      <HeadingCommerce>Commercial</HeadingCommerce>
    </AllImgs>
  );
};

export default Imgblog;
