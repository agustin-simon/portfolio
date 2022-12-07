import "./App.css";
import Footer from "./components/footer/Footer";
import NavMobile from "./components/nav-mobile/NavMobile";
import Home from "./views/home/Home";

function App() {
  return (
    <div className="App">
      <NavMobile />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
