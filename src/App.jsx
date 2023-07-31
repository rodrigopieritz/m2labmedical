import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { LoginPage } from "./pages/Login/Login.pages";
import { HomePage } from "./pages/Home/Home.pages";
import { ModalProvider } from "./context/ModalContext";
import { PatientRegisterPage } from "./pages/PatientRegister/PatientRegister.pages";
import { MedicalRegister } from "./pages/MedicalRegister/MedicalRegister.pages";
import { MedicalRecordList } from "./pages/MedicalRecordList/MedicalRecordList.pages";
import { ExamRegister } from "./pages/ExamRegister/ExamRegister.pages";
import { LocalStorageService } from "./service/LocalStorage.service";
import { PatientMedicalRecord } from "./pages/PatientMedicalRecord/PatientMedicalRecord.pages.jsx";

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
        birthdate: "2000-01-01",
        cpf: "999.999.999-99",
        email: "jose.silva@email.com",
        emergencyContact: "(99) 9 9999-99999",
        gender: "Masculino",
        insurance: "Sim, BradescoSaúde.",
        insuranceNumber: "999.999.999",
        insuranceVality: "01/01/2030",
        maritalStatus: "Solteiro(a)",
        name: "José Silva",
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
        birthdate: "2002-01-05",
        cpf: "888.888.888-88",
        email: "paula.santos@email.com",
        emergencyContact: "(88) 8 8888-88888",
        gender: "Feminino",
        insurance: "",
        insuranceNumber: "888.888.888",
        insuranceVality: "01/01/2032",
        maritalStatus: "Solteiro(a)",
        name: "Paula Santos",
        naturalness: "Brasileiro",
        phone: "(88) 8 8888-88888",
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
        id: 3,
        allergies: "Nenhuma",
        birthdate: "1995-03-10",
        cpf: "777.777.777-77",
        email: "maria.oliveira@email.com",
        emergencyContact: "(77) 7 7777-77777",
        gender: "Feminino",
        insurance: "Sim, Unimed.",
        insuranceNumber: "777.777.7777",
        insuranceVality: "01/01/2031",
        maritalStatus: "Casado(a)/União Estável",
        name: "Maria Oliveira",
        naturalness: "Brasileiro",
        phone: "(77) 7 7777-77777",
        rg: "88.888.888-8",
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
        id: 4,
        allergies: "Glúten",
        birthdate: "1980-12-20",
        cpf: "666.666.666-66",
        email: "antonio.souza@email.com",
        emergencyContact: "(66) 6 6666-66666",
        gender: "Masculino",
        insurance: "",
        insuranceNumber: "666.666.666",
        insuranceVality: "01/01/2033",
        maritalStatus: "Solteiro(a)",
        name: "Antônio Souza",
        naturalness: "Brasileiro",
        phone: "(66) 6 6666-66666",
        rg: "77.777.777-7",
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
        id: 5,
        allergies: "Nenhuma",
        birthdate: "1998-09-15",
        cpf: "555.555.555-55",
        email: "ana.rodrigues@email.com",
        emergencyContact: "(55) 5 5555-55555",
        gender: "Feminino",
        insurance: "Sim, Unimed.",
        insuranceNumber: "555.555.555",
        insuranceVality: "01/01/2034",
        maritalStatus: "Solteiro(a)",
        name: "Ana Rodrigues",
        naturalness: "Brasileiro",
        phone: "(55) 5 5555-55555",
        rg: "66.666.666-6",
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
        id: 6,
        allergies: "Nenhuma",
        birthdate: "1985-07-25",
        cpf: "444.444.444-44",
        email: "marcio.figueira@email.com",
        emergencyContact: "(44) 4 4444-44444",
        gender: "Masculino",
        insurance: "Sim, BradescoSaúde.",
        insuranceNumber: "444.444.444",
        insuranceVality: "01/01/2035",
        maritalStatus: "Casado(a)/União Estável",
        name: "Márcio Figueira",
        naturalness: "Brasileiro",
        phone: "(44) 4 4444-44444",
        rg: "55.555.555-5",
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
        id: 7,
        allergies: "Nenhuma",
        birthdate: "1977-06-02",
        cpf: "333.333.333-33",
        email: "lucia.silveira@email.com",
        emergencyContact: "(33) 3 3333-33333",
        gender: "Feminino",
        insurance: "",
        insuranceNumber: "333.333.333",
        insuranceVality: "01/01/2036",
        maritalStatus: "Solteiro(a)",
        name: "Lúcia Silveira",
        naturalness: "Brasileiro",
        phone: "(33) 3 3333-33333",
        rg: "44.444.444-4",
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
        id: 8,
        allergies: "Nenhuma",
        birthdate: "1990-11-30",
        cpf: "222.222.222-22",
        email: "pedro.gomes@email.com",
        emergencyContact: "(22) 2 2222-22222",
        gender: "Masculino",
        insurance: "Sim, BradescoSaúde.",
        insuranceNumber: "222.222.222",
        insuranceVality: "01/01/2037",
        maritalStatus: "Casado(a)/União Estável",
        name: "Pedro Gomes",
        naturalness: "Brasileiro",
        phone: "(22) 2 2222-22222",
        rg: "33.333.333-3",
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
        id: 9,
        allergies: "Nenhuma",
        birthdate: "1972-04-12",
        cpf: "111.111.111-11",
        email: "sandra.oliveira@email.com",
        emergencyContact: "(11) 1 1111-11111",
        gender: "Feminino",
        insurance: "Sim, Unimed.",
        insuranceNumber: "111.111.111",
        insuranceVality: "01/01/2038",
        maritalStatus: "Casado(a)/União Estável",
        name: "Sandra Oliveira",
        naturalness: "Brasileiro",
        phone: "(11) 1 1111-11111",
        rg: "22.222.222-2",
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
        id: 10,
        allergies: "Nenhuma",
        birthdate: "1988-08-08",
        cpf: "000.000.000-00",
        email: "julia.silva@email.com",
        emergencyContact: "(00) 0 0000-00000",
        gender: "Feminino",
        insurance: "",
        insuranceNumber: "000.000.000",
        insuranceVality: "01/01/2039",
        maritalStatus: "Casado(a)/União Estável",
        name: "Júlia Silva",
        naturalness: "Brasileiro",
        phone: "(00) 0 0000-00000",
        rg: "11.111.111-1",
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
        appointTime: "16:30",
        dosageAndPrecautions: "Tomar 3x ao dia de 8h em 8h Parecetamol 750mg",
        id: 1,
        medicationPrescribed: "Paracetamol",
        patient: 1,
        problemDescription: "O paciente relatou fortes dores de cabeça ao acordar e após o almoço.",
      },
      {
        appointDate: "2023-07-18",
        appointReason: "Diarréia",
        appointTime: "15:00",
        dosageAndPrecautions: "",
        id: 2,
        medicationPrescribed: "Ingestão de líquido e repouso",
        patient: 2,
        problemDescription: "O paciente relatou estar com diarréia há 3 dias. Relata também fraqueza e enjôo.",
      },
      {
        appointDate: "2023-07-19",
        appointReason: "Febre",
        appointTime: "10:30",
        dosageAndPrecautions: "Tomar 2x ao dia de 6h em 6h Dipirona 500mg",
        id: 3,
        medicationPrescribed: "Dipirona",
        patient: 3,
        problemDescription: "O paciente está com febre alta e dor no corpo.",
      },
      {
        appointDate: "2023-07-20",
        appointReason: "Consulta de Rotina",
        appointTime: "09:00",
        dosageAndPrecautions: "",
        id: 4,
        medicationPrescribed: "",
        patient: 4,
        problemDescription: "Consulta de rotina, o paciente não apresenta queixas.",
      },
      {
        appointDate: "2023-07-25",
        appointReason: "Gripe",
        appointTime: "14:30",
        dosageAndPrecautions: "Repouso e hidratação",
        id: 5,
        medicationPrescribed: "Analgésico",
        patient: 5,
        problemDescription: "O paciente está com sintomas de gripe, como febre, tosse e dor no corpo.",
      },
      {
        appointDate: "2023-07-24",
        appointReason: "Dor de Garganta",
        appointTime: "13:45",
        dosageAndPrecautions: "Tomar 3x ao dia de 8h em 8h Ibuprofeno 600mg",
        id: 6,
        medicationPrescribed: "Ibuprofeno",
        patient: 6,
        problemDescription: "O paciente está com dor de garganta e dificuldade para engolir.",
      },
      {
        appointDate: "2023-07-23",
        appointReason: "Alergia na Pele",
        appointTime: "11:15",
        dosageAndPrecautions: "Evitar contato com alérgeno",
        id: 7,
        medicationPrescribed: "Anti-histamínico",
        patient: 7,
        problemDescription: "O paciente apresenta uma erupção cutânea devido a uma alergia desconhecida.",
      },
      {
        appointDate: "2023-07-21",
        appointReason: "Dor nas Costas",
        appointTime: "08:30",
        dosageAndPrecautions: "Repouso e compressas quentes",
        id: 8,
        medicationPrescribed: "Analgésico",
        patient: 1,
        problemDescription: "O paciente está com dor nas costas após um esforço físico.",
      },
      {
        appointDate: "2023-07-22",
        appointReason: "Alergia Respiratória",
        appointTime: "14:00",
        dosageAndPrecautions: "Evitar exposição a alérgenos",
        id: 9,
        medicationPrescribed: "Anti-histamínico",
        patient: 2,
        problemDescription: "O paciente está com alergia respiratória e apresenta sintomas como espirros e coriza.",
      },
      {
        appointDate: "2023-07-20",
        appointReason: "Dor de Garganta",
        appointTime: "10:00",
        dosageAndPrecautions: "Gargarejo com água morna e sal",
        id: 10,
        medicationPrescribed: "Analgésico",
        patient: 3,
        problemDescription: "O paciente está com dor de garganta e dificuldade para engolir.",
      },
      {
        appointDate: "2023-07-18",
        appointReason: "Consulta de Rotina",
        appointTime: "09:30",
        dosageAndPrecautions: "",
        id: 11,
        medicationPrescribed: "",
        patient: 4,
        problemDescription: "Consulta de rotina, o paciente não apresenta queixas.",
      },
      {
        appointDate: "2023-07-23",
        appointReason: "Gripe",
        appointTime: "11:30",
        dosageAndPrecautions: "Repouso e hidratação",
        id: 12,
        medicationPrescribed: "Analgésico",
        patient: 5,
        problemDescription: "O paciente está com sintomas de gripe, como febre, tosse e dor no corpo.",
      },
      {
        appointDate: "2023-07-24",
        appointReason: "Dor de Cabeça",
        appointTime: "15:45",
        dosageAndPrecautions: "Tomar 2x ao dia de 6h em 6h Dipirona 500mg",
        id: 13,
        medicationPrescribed: "Dipirona",
        patient: 6,
        problemDescription: "O paciente relatou dores de cabeça frequentes nas últimas semanas.",
      },
      {
        appointDate: "2023-07-25",
        appointReason: "Alergia na Pele",
        appointTime: "13:15",
        dosageAndPrecautions: "Evitar contato com alérgeno",
        id: 14,
        medicationPrescribed: "Anti-histamínico",
        patient: 7,
        problemDescription: "O paciente apresenta uma erupção cutânea devido a uma alergia desconhecida.",
      },
      {
        appointDate: "2023-07-19",
        appointReason: "Dor no Joelho",
        appointTime: "12:00",
        dosageAndPrecautions: "Reposição de condroitina e glicosamina",
        id: 15,
        medicationPrescribed: "Anti-inflamatório",
        patient: 1,
        problemDescription: "O paciente está com dor no joelho após uma atividade física intensa.",
      },
    ];
    LocalStorageService.set("medicalAppointments", medicalAppointments);
  };

  const addExamsToLocalStorage = () => {
    const exams = [
      {
        examDate: "2023-05-22",
        examName: "Exame de Sangue OXYZ",
        examTime: "23:06",
        examType: "Exame de Sangue",
        id: 1,
        laboratory: "LabExams",
        patient: 1,
        results:
          "Tipo de Sangue Orh+, Quantidade de hemácias: 60% do normal, Glicemia: 95, outros: Normal",
        urlDoc: "https://examedesangue.labexams/exame",
      },
      {
        examDate: "2023-07-20",
        examName: "Mamografia",
        examTime: "16:00",
        examType: "Exame de Mamas",
        id: 2,
        laboratory: "LabExams",
        patient: 2,
        results:
          "Exame realizada com a máquina abc, evidenciou não haver nenhum sinal anormal que indique...",
        urlDoc: "https://examedesangue.labexams/exame",
      },
    ];
    LocalStorageService.set("exams", exams);
  };

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
            <Route path="/patient-register/:id" element={<PatientRegisterPage />} />
            <Route path="/medical-register/:id" element={<MedicalRegister />} />
            <Route
              path="/medical-record-list"
              element={<MedicalRecordList />}
            />
            <Route path="/exam-register/:id" element={<ExamRegister />} />
            <Route
              path="/patient-medical-record/:id"
              element={<PatientMedicalRecord />}
            />
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
