import "./App.css";
import Hero from "./components/hero";
import About from "./components/about";
import Header from "./components/header";

function App() {
  function handleLearnMore() {
    document.querySelector(".body").scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Hero handleLearnMore={handleLearnMore} />

      <section className="body">
        {/* <Header /> */}
        <About />
      </section>
    </>
  );
}

export default App;
