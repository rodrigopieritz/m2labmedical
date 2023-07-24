import React from "react";
import { FaUser } from "react-icons/fa";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

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

const PatientCard = ({ id, name, birthdate, insurance, phone, navigateTo }) => {
  const handleVejaMaisClick = () => {
    navigate(navigateTo);
  };

  const idade = calculateAge(birthdate);

  return (
    <div>
      <div>
        <FaUser />
      </div>
      <div>
        <p>ID do Paciente: {id}</p>
        <p>Nome do Paciente: {name}</p>
        <p>Idade: {idade}</p>
        <p>Convênio: {insurance}</p>
        <p>Telefone: {phone}</p>
      </div>
      <button onClick={handleVejaMaisClick}>Veja mais</button>
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
  navigateTo: PropTypes.string,
};
