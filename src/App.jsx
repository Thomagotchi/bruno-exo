import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
