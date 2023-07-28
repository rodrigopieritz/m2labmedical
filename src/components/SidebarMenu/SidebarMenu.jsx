import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth/auth.context";
import { ButtonComponent } from "../Button/buttonComponent";
import * as Styled from "../SidebarMenu/Sidebar.style";
import { FaHome } from "react-icons/fa";

const SidebarMenu = () => {

  const [isExpanded, setIsExpanded] = useState(true)

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
    setIsExpanded((prevState) => !prevState)
    
  };

  return (
    <Styled.Sidebar className={isExpanded ? "expanded" : "collapsed"}>
      <div>
        <img src="/../../lab-medical-logo-white.png" alt="Logo" width="100%" />
      </div>
      <div>
        <div>
          <div>
          <FaHome/>

          </div>
          <div>
            <ButtonComponent
              id="homeButton"
              onClick={() => handleRedirect("/")}
              label="Home"
            />
          </div>
        </div>
        <div>
          <ButtonComponent
            id="patientRegisterButton"
            onClick={() => handleRedirect("/patient-register/newPatient")}
            label="Cadastrar Paciente"
          />
        </div>
        <div>
          <ButtonComponent
            id="medicalRecordButton"
            onClick={() => handleRedirect("/medical-record-list")}
            label="Listar Prontuários"
          />
        </div>
        <ButtonComponent
          id="medicalRegisterButton"
          onClick={() => handleRedirect("/medical-register/newMedAppoint")}
          label="Cadastrar Consulta"
        />
      </div>
      <div>
        <ButtonComponent
          id="examRegisterButton"
          onClick={() => handleRedirect("/exam-register/newExam")}
          label="Cadastrar Exame"
        />
      </div>
      <div>
        <ButtonComponent
          id="expandCollapseButton"
          onClick={() => expandCollapse()}
          label="Exibir/ Recolher"
        />
      </div>
      <ButtonComponent id="logouButton" onClick={handleLogout} label="Logout" />
    </Styled.Sidebar>
  );
};

export default SidebarMenu;
