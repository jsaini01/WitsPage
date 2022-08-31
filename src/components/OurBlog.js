import React from "react";

import { Blog } from "../styles/OurBlogstyle";
import BlogHeadings from "./ourblog/BlogHeadings";
import Imgblog from "./ourblog/Imgblog";

const OurBlog = () => {
  return (
    <Blog>
      <BlogHeadings />
      <Imgblog />
    </Blog>
  );
};

export default OurBlog;
