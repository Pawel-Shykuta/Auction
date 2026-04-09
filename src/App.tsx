import "./App.css";
import Header from "./components/header";
import { AppContextProvider } from "./context";
import Home from "./pages/home/home";

function App() {
  return (
    <AppContextProvider>
      <Header />
      <main>{/* <Home /> */}</main>
    </AppContextProvider>
  );
}

export default App;
