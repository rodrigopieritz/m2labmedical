import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Login/Login.pages";
import { HomePage } from "./pages/Home/Home.pages";
import { ModalProvider } from "./context/ModalContext";
import { PatientRegisterPage } from "./pages/PatientRegister/PatientRegister.pages";
import { MedicalRegister } from "./pages/MedicalRegister/MedicalRegister.pages";
import { MedicalRecord } from "./pages/MedicalRecord/MedicalRecord.pages";
import { ExamRegister } from "./pages/ExamRegister/ExamRegister.pages";
import { LocalStorageService } from "./service/LocalStorage.service";



const App = () => {

  const addAllowedUsersToLocalStorage = () => {
    const allowedUsers = [
      {
        email: "usuariopermitido@email.com",
        password: "usuariopermitido",
      },
    ];
    LocalStorageService.set("allowedUsers", allowedUsers);
  };

  const addPatientsToLocalStorage = () => {
    const patients = [
      {
        id: 1,
        name: "Paciente Exemplo Um",
      },
    ];
    LocalStorageService.set("patients", patients)
    };

  if( !LocalStorageService.get("allowedUsers")) {
    addAllowedUsersToLocalStorage();
  } if( !LocalStorageService.get("patients")) {
    addPatientsToLocalStorage();
  }
  
   
  return (
    <ModalProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/patient-register" element={<PatientRegisterPage/>} />
        <Route path="/medical-register" element={<MedicalRegister/>} />
        <Route path="/medical-record" element={<MedicalRecord/>} />
        <Route path="/exam-register" element={<ExamRegister/>} />    
        <Route path="*" element={<><p>Página não encontrada</p></>}/>
      </Routes>
          </Router>
    </ModalProvider>
  );
};

export default App;
