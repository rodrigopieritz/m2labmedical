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
 
      
      <Styled.Sidebar className= {isExpanded ? "mt-4 fixed-left" : "mt-4 collapsed fixed-left"}>
      <div>
        <img src="/../../lab-medical-logo-white.png" alt="Logo" width="90px"/>
      </div>
      <ButtonComponent
          id="homeButton"
          onClick={() => handleRedirect("/")}
          label={isExpanded ?"Home":""}
          icon={<FaHome/>}
        />
        <ButtonComponent
          id="patientRegisterButton"
          onClick={() => handleRedirect("/patient-register/newPatient")}
          label={isExpanded ?"Cadastrar Paciente":""}
          icon={<FaUserPlus />}
        />
        <ButtonComponent
          id="medicalRecordButton"
          onClick={() => handleRedirect("/medical-record-list")}
          label={isExpanded ?"Listar Prontuários":""}
          icon={<FaClipboardList/>}
        />
        <ButtonComponent
          id="medicalRegisterButton"
          onClick={() => handleRedirect("/medical-register/newMedAppoint")}
          label={isExpanded ?"Cadastrar Consulta":""}
          icon={<FaCalendarPlus/>}
        />
        <ButtonComponent
          id="examRegisterButton"
          onClick={() => handleRedirect("/exam-register/newExam")}
          label={isExpanded ?"Cadastrar Exame":""}
          icon={<FaFileAlt/>}
        />


      <ButtonComponent id="logouButton" onClick={handleLogout} label= {isExpanded ?"Logout":""} icon= {<FaSignOutAlt/>} />

        <div className="mt-5 pt-5d-align-items-center justify-content-center">
      <button
          id="expandCollapseButton"
          className={`btn btn-toggle ${isSwitchOn ? "active" : ""}`}
          onClick={handleSwitchToggle}
        >
          {isExpanded ?"Hide":"Show"}
        </button>
      </div>

      {isLoading && <FaCircleNotch>Loading...</FaCircleNotch>}
      
      </Styled.Sidebar>
    </>
  );
  

};


export default SidebarMenu;
