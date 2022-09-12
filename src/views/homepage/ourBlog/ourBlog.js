import React from "react";

import { BlogWraper } from "styles/views/homepage/ourBlog";
import BlogContant from "views/homepage/ourBlog/blogContant";
import BlogImages from "views/homepage/ourBlog/blogImages";

const OurBlog = () => {
  return (
    <BlogWraper>
      <BlogContant />
      <BlogImages />
    </BlogWraper>
  );
};

export default OurBlog;
