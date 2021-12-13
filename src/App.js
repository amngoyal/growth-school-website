import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import Modal from "./components/modal";
import Home from "./containers/home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Modal />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
