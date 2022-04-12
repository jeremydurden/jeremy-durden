import "./App.css";
import AboutMe from "./components/aboutMe/AboutMe";
import Header from "./components/header/Header";
import Introduction from "./components/introduction/Introduction";
import Featured from "./components/featured/Featured";
import Work from "./components/work/Work";

function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <Featured />
      <AboutMe />
      <Work />
    </div>
  );
}

export default App;
