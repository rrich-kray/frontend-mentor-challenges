import "./App.css";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Body from "./components/Body/Body";

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Body />
    </div>
  );
}

export default App;
