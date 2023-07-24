import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth/auth.context";
import { ButtonComponent } from "../Button/buttonComponent";
import * as Styled from '../SidebarMenu/Sidebar.style'

const SidebarMenu = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const handleRedirect = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    setAuth({
      user: {},
      isLogged: false,
    });
    navigate("/login");
  };

  const expandCollapse = () => {
    alert(
      "esta etapa será desenvolvida na estilização - usestate para o hiden e para o show"
    );
  };

  return (
    <Styled.Sidebar>
      <div>
        <img src="/../../lab-medical-logo-white.png" alt="Logo" width="165" height="160"/>
      </div>

      <ButtonComponent
        id="homeButton"
        onClick={() => handleRedirect("/")}
        label="Home"
      />

      <ButtonComponent
        id="patientRegisterButton"
        onClick={() => handleRedirect("/patient-register")}
        label="Cadastrar Paciente"
      />

      <ButtonComponent
        id="medicalRecordButton"
        onClick={() => handleRedirect("/medical-record-list")}
        label="Listar Prontuários"
      />

      <ButtonComponent
        id="medicalRegisterButton"
        onClick={() => handleRedirect("/medical-register")}
        label="Cadastrar Consulta"
      />

      <ButtonComponent
        id="examRegisterButton"
        onClick={() => handleRedirect("/exam-register")}
        label="Cadastrar Exame"
      />

      <ButtonComponent
        id="expandCollapseButton"
        onClick={() => expandCollapse()}
        label="Exibir/ Recolher"
      />

      <ButtonComponent id="logouButton" onClick={handleLogout} label="Logout" />
    </Styled.Sidebar>
  );
};

export default SidebarMenu;
