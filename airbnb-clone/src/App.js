import "./App.css";
import Header from "./JS Files/Home Page JS/Header";
import Home from "./JS Files/Home Page JS/Home";
import Footer from "./JS Files/Home Page JS/Footer";
import SearchPage from "./JS Files/Search Page JS/SearchPage";

// For routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // BEM - Block Element Modifier
    <div className="app">
      {/* All the components should be inside the router */}
      <BrowserRouter>
        {/* Header remains constant */}
        <Header />

        <Routes>
          <Route path="/search" element={<SearchPage />} />
          {/* Home page should always be at the bottom */}
          <Route path="/" exact element={<Home />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
