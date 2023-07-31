const MEDICALAPPOINTMENT_KEY = "medicalAppointments";

export const getMedAppList = () => {
  const medAppList = JSON.parse(localStorage.getItem(MEDICALAPPOINTMENT_KEY)) || [];
  return medAppList;
};

export const addmedicalAppointment = (medicalAppointment) => {
  const medAppList = getMedAppList();
  
  medicalAppointment.id = medAppList.length > 0 ? Math.max(...medAppList.map((medicalAppointment) => medicalAppointment.id)) + 1 : 1;
  medAppList.push(medicalAppointment);

  localStorage.setItem(MEDICALAPPOINTMENT_KEY, JSON.stringify(medAppList));
};

export const removemedicalAppointment = (medicalAppointmentId) => {
  let medAppList = getMedAppList();
  medAppList = medAppList.filter((medicalAppointment) => medicalAppointment.id !== medicalAppointmentId);
  localStorage.setItem(MEDICALAPPOINTMENT_KEY, JSON.stringify(medAppList));
};

export const getMedAppointById = (medAppointId) => {
  const medAppoints = getMedAppList();
  const idToFind = +medAppointId;

  return medAppoints.find((medAppoint) => medAppoint.id === idToFind);
};

export const updateMedAppoint = (medAppointId, updatedMedAppoint) => {
  const medAppointList = getMedAppList();
  const idToUpdate = +medAppointId;

  const updatedMedAppointList = medAppointList.map((medAppoint) =>
    medAppoint.id === idToUpdate ? { ...medAppoint, ...updatedMedAppoint} : medAppoint
  );

  localStorage.setItem(MEDICALAPPOINTMENT_KEY, JSON.stringify(updatedMedAppointList));
};

export const deleteMedAppoint = (MedAppointId) => {
  let medAppointList = getMedAppList();
  medAppointList = medAppointList.filter((medAppoint) => medAppoint.id !== MedAppointId);
  localStorage.setItem(MEDICALAPPOINTMENT_KEY, JSON.stringify(medAppointList));
};
