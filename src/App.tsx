import { Route, Routes } from "react-router";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import { Home } from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import { Contact } from "./Pages/Contact";
import { Services } from "./Pages/Services";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Route>
    </Routes>
  );
}

export default App;
