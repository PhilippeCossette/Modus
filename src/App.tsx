import { Route, Routes } from "react-router";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import { Home } from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
