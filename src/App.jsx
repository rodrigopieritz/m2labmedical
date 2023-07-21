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
        allergies: "Nenhuma",
        bithdate: "2000-01-01",
        cpf: "999.999.999-99",
        email: "paciente.um@email.com",
        emergencyContact: "(99) 9 9999-99999",
        gender: "Masculino",
        insurance: "Sim, BradescoSaúde.",
        insuranceNumber: "999.999.999",
        insuranceVality: "01/01/2030",
        maritalStatus: "Solteiro(a)",
        name: "Paciente Exemplo Um",
        naturalness: "Brasileiro",
        phone: "(99) 9 9999-99999",
        rg: "99.999.999-9",
        specialCare: "Nenhum",
        cep: "88034040",
        city: "Florianópolis",
        complement: "Nenhum",
        houseNumber: "1000",
        neighborhood: "Itacorubi",
        nextTo: "Nenhum",
        street: "Rua Acelon Pacheco da Costa",
        uf: "SC",
      },
    ];
    LocalStorageService.set("patients", patients);
  };

  if (!LocalStorageService.get("allowedUsers")) {
    addAllowedUsersToLocalStorage();
  }
  if (!LocalStorageService.get("patients")) {
    addPatientsToLocalStorage();
  }

  return (
    <ModalProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/patient-register" element={<PatientRegisterPage />} />
          <Route path="/medical-register" element={<MedicalRegister />} />
          <Route path="/medical-record" element={<MedicalRecord />} />
          <Route path="/exam-register" element={<ExamRegister />} />
          <Route
            path="*"
            element={
              <>
                <p>Página não encontrada</p>
              </>
            }
          />
        </Routes>
      </Router>
    </ModalProvider>
  );
};

export default App;
