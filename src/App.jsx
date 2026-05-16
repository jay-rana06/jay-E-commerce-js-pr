import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ViewProduct from './pages/ViewProduct'
import Header from "./components/Header";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/view-product/:id" element={<ViewProduct />}></Route>
    </Routes>
  );
};

export default App;
