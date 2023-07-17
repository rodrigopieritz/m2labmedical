import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Login/Login.pages";
import { HomePage } from "./pages/Home/Home.pages";
import { ModalProvider } from "./context/ModalContext";



const App = () => {
  
  return (
    <ModalProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<><p>Página não encontrada</p></>}/>
      </Routes>
          </Router>
    </ModalProvider>
  );
};

export default App;
