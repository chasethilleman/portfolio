import "./App.css";
import Hero from "./components/hero";
import About from "./components/about";
import Header from "./components/header";
import Projects from "./components/projects";
import Footer from "./components/footer";

function App() {
  function handleLearnMore() {
    document.querySelector(".body").scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Hero handleLearnMore={handleLearnMore} />

      <section className="body bg-neutral-900">
        {/* <Header /> */}
        <About />
        <Projects />
        <Footer />
      </section>
    </>
  );
}

export default App;
