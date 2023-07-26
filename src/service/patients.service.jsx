const PATIENTS_KEY = "patients";

export const getPatients = () => {
  const patients = JSON.parse(localStorage.getItem(PATIENTS_KEY)) || [];
  return patients;
};

export const addPatient = (patient) => {
  const patients = getPatients();
  
  patient.id = patients.length > 0 ? Math.max(...patients.map((patient) => patient.id)) + 1 : 1;
  patients.push(patient);

  localStorage.setItem(PATIENTS_KEY, JSON.stringify(patients));
};

export const removePatient = (patientId) => {
  let patients = getPatients();
  patients = patients.filter((patient) => patient.id !== patientId);
  localStorage.setItem(PATIENTS_KEY, JSON.stringify(patients));
};

export const getPatientById = (patientId) => {
  const patients = getPatients();
  const idToFind = +patientId;

  return patients.find((patient) => patient.id === idToFind);
};


