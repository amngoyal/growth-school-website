import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import Home from "./containers/home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
