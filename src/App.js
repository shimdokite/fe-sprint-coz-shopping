import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Main } from "./page/Main";
import { Bookmark } from "./page/Bookmark";
import { Products } from "./page/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/products/list" element={<Products />}></Route>
        <Route path="/bookmark" element={<Bookmark />}></Route>
      </Routes>
    </div>
  );
}

export default App;
