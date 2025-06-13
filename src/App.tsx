import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Comments from "./components/Comments";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />

      <main className="ct-main">
        <section id="ct-card-section" className="ct-card-container">
          <Card />
        </section>

        <section id="ct-comments-section" className="ct-comments-container">
          <Comments />
        </section>

        <section>
          <Footer />
        </section>
      </main>
    </>
  );
}
