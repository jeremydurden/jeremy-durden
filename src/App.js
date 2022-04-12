import "./App.css";
import AboutMe from "./components/aboutMe/AboutMe";
import Header from "./components/header/Header";
import Introduction from "./components/introduction/Introduction";
import Services from "./components/services/Services";

function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <Services />
      <AboutMe />
    </div>
  );
}

export default App;
