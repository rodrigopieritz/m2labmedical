import React from "react";
import { FaUser } from "react-icons/fa";
import PropTypes from "prop-types";

const calculateAge = (birthdate) => {
  if (!birthdate) return 0;

  const [year, month, day] = birthdate.split("-").map(Number);

  const birthDateObj = new Date(year, month - 1, day);

  const today = new Date();

  let age = today.getFullYear() - birthDateObj.getFullYear();

  if (
    today.getMonth() < birthDateObj.getMonth() ||
    (today.getMonth() === birthDateObj.getMonth() &&
      today.getDate() < birthDateObj.getDate())
  ) {
    age--;
  }

  return age;
};

const PatientCard = ({ id, name, birthdate, insurance, phone, emergencyContact, allergies, specialCare }) => {
  const idade = calculateAge(birthdate);

  return (

    <div style={{ width: "600px", backgroundColor: "whiteSmoke", marginRight: "630px"}} className="d-flex flex-row card align-items-center">

      
     
      <div className="col-2 ">
      <div> <FaUser size="30%" className="mb-5 m-5"/></div>
        <div> {id && <p>ID: {id}</p>}</div>
      </div>
      
      <div className="col">
        
        {name && <p>Nome do Paciente: {name}</p>}
        {birthdate && <p>Idade: {idade}</p>}
        {insurance && <p>Convênio: {insurance} </p>}
        {phone && <p>Telefone: {phone}</p>}
        {emergencyContact && <p>Contato de Emergência: {emergencyContact}</p>}
        {allergies && <p>Lista de Alergias: {allergies}</p>}
        {specialCare && <p>Cudidados Especiais: {specialCare}</p>}
      </div>
     
    </div>
  );
};

export default PatientCard;

PatientCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  birthdate: PropTypes.string,
  insurance: PropTypes.string,
  phone: PropTypes.string,
  emergencyContact: PropTypes.string,
  allergies: PropTypes.string,
  specialCare: PropTypes.string,
};
