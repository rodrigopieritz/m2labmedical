import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Login/Login.pages";
import { HomePage } from "./pages/Home/Home.pages";
import { ModalProvider } from "./context/ModalContext";



const App = () => {
  
  return (
    <ModalProvider>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
          </Router>
    </ModalProvider>
  );
};

export default App;
