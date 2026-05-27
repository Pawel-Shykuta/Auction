import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/home/home";
import Browse from "./pages/browse/browse";
import ActiveAuction from "./components/activAuction/activAuction";
import { useItemStore } from "./store/useItemStore";

function App() {
  const activeItem = useItemStore((state) => state.activeItem);

  return (
    <main>
      <Header />
      <div className="app_container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Browse" element={<Browse />} />
        </Routes>
        {activeItem && <ActiveAuction />}
      </div>
    </main>
  );
}

export default App;
