import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home";
import DetailPage from "./components/Detail";

function App() {
  console.log("호출 테스트");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;