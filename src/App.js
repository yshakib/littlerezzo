import "./App.css";
import "./Header.css";
import "./Main.css";
import "./Footer.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
