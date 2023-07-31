import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth/auth.context";
import { ButtonComponent } from "../Button/buttonComponent";
import {
  FaCircleNotch,
  FaHome,
  FaUserPlus,
  FaClipboardList,
  FaCalendarPlus,
  FaFileAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import styled, { keyframes } from "styled-components";
import * as Styled from "../SidebarMenu/Sidebar.style";


const SidebarMenu = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isLoading, setIsLoading] = useState(true); 
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const [isSwitchOn, setIsSwitchOn] = useState(true);

  useEffect(() => {
    
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Defina o tempo de carregamento desejado em milissegundos

    return () => clearTimeout(loadingTimeout);
  }, []);

  const handleSwitchToggle = () => {
    setIsSwitchOn((prevState) => !prevState);
    expandCollapse();
  };
  
  const handleRedirect = (path) => {
    setIsLoading(true); // Iniciar a animação de loading ao redirecionar para uma nova página
    navigate(path);
  };

  const handleLogout = () => {
    setIsLoading(true); // Iniciar a animação de loading ao fazer logout
    setAuth({
      user: {},
      isLogged: false,
    });
    navigate("/login");
  };

  const expandCollapse = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <>
    <Styled.Sidebar className={isExpanded ? "mt-4 fixed-left" : "mt-4 collapsed fixed-left"} aria-label="Sidebar">
      <div aria-label="Logo">
        <img src="/../../lab-medical-logo-white.png" alt="Logo" width="90px" />
      </div>
      <ButtonComponent
        id="homeButton"
        onClick={() => handleRedirect("/")}
        label={isExpanded ? "Home" : ""}
        icon={<FaHome />}
        aria-label="Home Button"
      />
      <ButtonComponent
        id="patientRegisterButton"
        onClick={() => handleRedirect("/patient-register/newPatient")}
        label={isExpanded ? "Cadastrar Paciente" : ""}
        icon={<FaUserPlus />}
        aria-label="Cadastrar Paciente Button"
      />
      <ButtonComponent
        id="medicalRecordButton"
        onClick={() => handleRedirect("/medical-record-list")}
        label={isExpanded ? "Listar Prontuários" : ""}
        icon={<FaClipboardList />}
        aria-label="Listar Prontuários Button"
      />
      <ButtonComponent
        id="medicalRegisterButton"
        onClick={() => handleRedirect("/medical-register/newMedAppoint")}
        label={isExpanded ? "Cadastrar Consulta" : ""}
        icon={<FaCalendarPlus />}
        aria-label="Cadastrar Consulta Button"
      />
      <ButtonComponent
        id="examRegisterButton"
        onClick={() => handleRedirect("/exam-register/newExam")}
        label={isExpanded ? "Cadastrar Exame" : ""}
        icon={<FaFileAlt />}
        aria-label="Cadastrar Exame Button"
      />
  
      <ButtonComponent
        id="logouButton"
        onClick={handleLogout}
        label={isExpanded ? "Logout" : ""}
        icon={<FaSignOutAlt />}
        aria-label="Logout Button"
      />
  
      <div className="mt-5 pt-5 d-align-items-center justify-content-center" aria-label="Toggle Button">
        <button
          id="expandCollapseButton"
          className={`btn btn-toggle ${isSwitchOn ? "active" : ""}`}
          onClick={handleSwitchToggle}
          aria-label={isExpanded ? "Hide Sidebar" : "Show Sidebar"}
        >
          {isExpanded ? "Hide" : "Show"}
        </button>
      </div>
  
      {isLoading && <FaCircleNotch>Loading...</FaCircleNotch>}
    </Styled.Sidebar>
  </>
  
  );
  

};


export default SidebarMenu;
