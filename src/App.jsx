import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Login/Login.pages";
import { HomePage } from "./pages/Home/Home.pages";
import { ModalProvider } from "./context/ModalContext";
import { PatientRegisterPage } from "./pages/PatientRegister/PatientRegister.pages";
import { MedicalRegister } from "./pages/MedicalRegister/MedicalRegister.pages";
import { MedicalRecordList } from "./pages/MedicalRecordList/MedicalRecordList.pages";
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
      {
        id: 2,
        allergies: "Lactose",
        bithdate: "2002-01-05",
        cpf: "888.888.888-88",
        email: "paciente.dois@email.com",
        emergencyContact: "(88) 8 8888-8888",
        gender: "Feminino",
        insurance: "",
        insuranceNumber: "888.888.888",
        insuranceVality: "01/01/2032",
        maritalStatus: "Solteiro(a)",
        name: "Paciente Exemplo Dois",
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

  const addMedicalAppointmentsToLocalStorage = () => {
    const medicalAppointments = [
      {
        appointDate: "2023-07-22",
        appointReason: "Dores de Cabeça",
        appointTime: "16:39",
        dosageAndPrecautions: "Tomar por 1 semana  3x ao dia de 8 em 8h",
        id: 1,
        medicationPrescribed: "Paracetamol",
        patient: 1,
        problemDescription: "O paciente relatou fortes dores de cabeça.",
      },
      {
        appointDate: "2023-07-18",
        appointReason: "Diarréia",
        appointTime: "12:45",
        dosageAndPrecautions: "",
        id: 2,
        medicationPrescribed: "Ingestão de líquido e repouso",
        patient: 2,
        problemDescription: "O paciente relatou estar com diarréia há 3 dias.",
      },
    ];
    LocalStorageService.set("medicalAppointments", medicalAppointments);
  };

  const addExamsToLocalStorage = () => {
    const exams = [
  {
    examDate: "2023-07-22",
    examName: "Exame de Sangue OXYZ",
    examTime: "23:06",
    examType: "Exame de Sangue",
    id: 1,
    laboratory: "LabExams",
    patient: 1,
    results: "Tipo de Sangue Orh+, Quantidade de hemácias: 60% do normal, Glicemia: 95, outros: Normal",
    urlDoc: "https://examedesangue.labexams/exame",
  },
  {
    examDate: "2023-07-18",
    examName: "Mamografia",
    examTime: "13:06",
    examType: "Exame de Mamas",
    id: 2,
    laboratory: "LabExams",
    patient: 2,
    results: "Exame realizada com a máquina abc, evidenciou não haver nenhum sinal anormal que indique...",
    urlDoc: "https://examedesangue.labexams/exame",
  }
];
  LocalStorageService.set("exams", exams);
  }

  if (!LocalStorageService.get("allowedUsers")) {
    addAllowedUsersToLocalStorage();
  }
  if (!LocalStorageService.get("patients")) {
    addPatientsToLocalStorage();
  }
  if (!LocalStorageService.get("medicalAppointments")) {
    addMedicalAppointmentsToLocalStorage();
  }
  if (!LocalStorageService.get("exams")) {
    addExamsToLocalStorage();
  }

  return (
    <ModalProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/patient-register" element={<PatientRegisterPage />} />
          <Route path="/medical-register" element={<MedicalRegister />} />
          <Route path="/medical-record" element={<MedicalRecordList />} />
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
