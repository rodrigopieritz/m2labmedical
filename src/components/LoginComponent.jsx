import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginComponent = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (event) => {
    event.preventDefault();
    const { value, id } = event.target;
    setData({ ...data, [id]: value });
  };

  const redirectToHome = () => {
    navigate("/home");
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    const promptMessage = "Página em construção";
    alert(promptMessage);
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
        <button type="submit" disabled={!data.email || !data.password}>
          Logar
        </button>
      </form>
      <div>
        <a href="#" onClick={handleForgotPassword}>
          Esqueci minha senha
        </a>
        <button>Criar Conta</button>
      </div>
    </>
  );
};
