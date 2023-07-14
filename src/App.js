import { Route, Routes } from "react-router-dom";
import { Main } from "./page/Main";
import { Bookmark } from "./page/Bookmark";
import { Products } from "./page/Products";
import "./App.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/products/list" element={<Products />}></Route>
        <Route path="/bookmark" element={<Bookmark />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
