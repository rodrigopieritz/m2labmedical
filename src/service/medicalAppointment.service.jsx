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
