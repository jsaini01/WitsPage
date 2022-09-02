import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import OurBlog from "./components/OurBlog";
import OurClient from "./components/OurClient";
import OurTeam from "./components/OurTeam";
import SecondPart from "./components/SecondPart";
import Slider from "./components/Slider";
import SolutionsProb from "./components/SolutionsProb";
import Target from "./components/Target";
import { Div } from "./styles/AppStyle";

function App() {
  return (
    <Div>
      <Header />
      <SecondPart />
      <Target />
      <SolutionsProb />
      <OurClient />
      <Slider />
      <OurBlog />
      <OurTeam />
      <ContactUs />
    </Div>
  );
}

export default App;
