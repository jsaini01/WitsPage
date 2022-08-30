// import "./App.css";

import Header from "./components/Header";
import OurClient from "./components/OurClient";
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
    </Div>
  );
}

export default App;
