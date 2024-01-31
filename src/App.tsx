import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { About } from "./features/About";
import { Hero } from "./features/Hero";
import { Ready } from "./features/Ready";
import { Reviews } from "./features/Reviews";
import { Solutions } from "./features/Solutions";
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Reviews />
        <Ready />
      </main>
      <Footer />
    </>
  );
}

export default App;
