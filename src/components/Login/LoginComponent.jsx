import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../../context/ModalContext";

export const LoginComponent = () => {

  //Exibir Modal ao clicar no campo criar conta
  const { setShowModal: setShowModalContext } = useContext(ModalContext);
  
  // Navegação de rotas
  const navigate = useNavigate();
  const redirectToHome = () => {
    navigate("/home");
  };

  // handle dos inputs
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    event.preventDefault();
    const { value, id } = event.target;
    setData({ ...data, [id]: value });
  };


  // Alert para página de recuperção de senha em construção

  const handleForgotPassword = (event) => {
    event.preventDefault();
    const promptMessage = "Página em construção";
    alert(promptMessage);
    console.log(data)
  };

  //Abrir modal para cadastro de novo usuário
  const handleShowModal = (e) => {
    e.preventDefault();
    setShowModalContext(true);
  };

  return (
    <>
      <form onSubmit={redirectToHome}>
        <legend>Login</legend>
        <div>
          <label htmlFor="input-group">E-mail</label>
          <input
            type="text"
            id="email"
            onInput={handleInput}
            placeholder="Digite seu e-mail aqui"
          />
        </div>
        <div>
          <label htmlFor="input-group">Senha</label>
          <input
            type="password"
            id="password"
            onInput={handleInput}
            placeholder="Digite sua senha aqui"
          />
        </div>
        <button type="submit">
          Logar
        </button>
      </form>
      <div>
        <a href="#" onClick={handleForgotPassword}>
          Esqueci minha senha
        </a>
        <button type="button" onClick={handleShowModal}>
          Criar Conta
        </button>
      </div>
    </>
  );
};
