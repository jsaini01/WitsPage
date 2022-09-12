import React from "react";
import {
  ImageWraper,
  Blockchain,
  Commercial,
  WilBlog,
  ContentWrap,
  ContentHeading,
  Content,
  BlockchainContent,
  CommercialContent,
} from "styles/views/homepage/ourBlog";

import wilblog from "assets/images/wilblog.png";
import blockchain from "assets/images/blockchain.png";
import wicommercial from "assets/images/commercial.png";

const BlogImages = () => {
  return (
    <ImageWraper>
      <WilBlog src={wilblog} alt="wilblog" />
      <ContentWrap>
        <ContentHeading>WIL Blog</ContentHeading>
        <Content>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat
        </Content>
      </ContentWrap>
      <Blockchain src={blockchain} alt="wilblog" />
      <BlockchainContent>Block Chain</BlockchainContent>
      <Commercial src={wicommercial} alt="wilblog" />
      <CommercialContent>Commercial</CommercialContent>
    </ImageWraper>
  );
};

export default BlogImages;
