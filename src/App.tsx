import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import Browse from "./pages/browse/browse";
import ActiveAuction from "./components/activAuction/activAuction";
import { useActiveAuction } from "./hooks/useActiveAuction";
import { HowItWorks } from "./pages/howItWorks/howItWorks";
import { useEffect } from "react";
import { useHeaderStore } from "./store/useHeaderStore";
import NotFound from "./pages/notFound/notFound";

function App() {
  const activeItem = useActiveAuction();

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
          <Route path="/browse" element={<Browse />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {activeItem && <ActiveAuction />}
      </div>
      <Footer />
    </main>
  );
}

export default App;
