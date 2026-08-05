import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import Browse from "./pages/browse/browse";
import ActiveAuction from "./components/activAuction/activAuction";
import { useItemStore } from "./store/useItemStore";
import { HowItWorks } from "./pages/howItWorks/howItWorks";
import { useEffect } from "react";
import { useHeaderStore } from "./store/useHeaderStore";

function App() {
  const activeItem = useItemStore((state) => state.activeItem);

  const { headerIsOpen } = useHeaderStore();

  useEffect(() => {
    document.body.style.overflow = headerIsOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [headerIsOpen]);

  return (
    <main>
      <Header />
      <div className="app_container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Browse" element={<Browse />} />
          <Route path="/HowItWorks" element={<HowItWorks />} />
        </Routes>
        {activeItem && <ActiveAuction />}
      </div>
      <Footer />
    </main>
  );
}

export default App;
