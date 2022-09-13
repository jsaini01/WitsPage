import React from "react";
import { MainWraper } from "styles/pages/homepage/Index";
import ContactUS from "views/homepage/contactUs/contactUS";
import AllFooterFiles from "components/Footer";
import AllHeader from "components/Headers/header";
import OurBlog from "views/homepage/ourBlog/ourBlog";
import OurClients from "views/homepage/ourClient/ourClients";
import OurTeam from "views/homepage/ourTeam/ourTeam";
import BusinessFiles from "views/homepage/businessWrap/businessFiles";
import Slider from "views/homepage/sliderWrap/slider";
import Solutions from "views/homepage/solutions/solutions";
import TargetComponents from "views/homepage/targetWrap/targetComponents";

const AllFiles = () => (
  <MainWraper>
    <AllHeader />
    <BusinessFiles />
    <TargetComponents />
    <Solutions />
    <OurClients />
    <Slider />
    <OurBlog />
    <OurTeam />
    <ContactUS />
    <AllFooterFiles />
  </MainWraper>
);

export default AllFiles;
