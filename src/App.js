// import "./App.css";

import Header from "./components/Header";
import SecondPart from "./components/SecondPart";
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
    </Div>
  );
}

export default App;
