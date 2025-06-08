import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";

export default function App() {
  return (
    <>
    <Header />

    <main className="ct-main">
      <section id="ct-card-section" className="ct-card-container">
        <Card />
      </section>

    </main>

    </>

  )
}
