import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import { AppContextProvider } from "./context";
import Home from "./pages/home/home";
import Browse from "./pages/browse/browse";

function App() {
  return (
    <AppContextProvider>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Browse" element={<Browse />} />
        </Routes>
      </main>
    </AppContextProvider>
  );
}

export default App;
