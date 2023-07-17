import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth/auth.context";

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

  return (
    <div className="sidebar-menu">
      <div className="logo">
        <img src="lab-medical-logo-white.png" alt="Logo" />
      </div>
      <button onClick={() => handleRedirect("/")}>
        <span className="icon">Ícone</span>
        Início
      </button>
      <button onClick={() => handleRedirect("/patient-register")}>
        <span className="icon">Ícone</span>
        Cadastrar Pacientes
      </button>
      <button onClick={() => handleRedirect("/medical-record")}>
        <span className="icon">Ícone</span>
        Listar Prontuários
      </button>
      <button onClick={() => handleRedirect("/medical-register")}>
        <span className="icon">Ícone</span>
        Cadastrar Consultas
      </button>
      <button onClick={() => handleRedirect("/exam-register")}>
        <span className="icon">Ícone</span>
        Cadastrar Exames
      </button>
      <div className="expand-button">
        <input type="radio" name="expand" id="expand" />
        <label htmlFor="expand">Expandir</label>
      </div>
      <button className="logout-button" onClick={handleLogout}>
        <span className="icon">Ícone</span>
        Sair
      </button>
    </div>
  );
};

export default SidebarMenu;
