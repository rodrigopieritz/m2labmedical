import { useContext } from "react";
import { AuthContext } from "../../context/auth/auth.context";
import { Navigate } from "react-router";
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";
import Toolbar from "../../components/Toolbar/ToolbarComponent";
import * as Styled from "../../global.style";
import { PatientRegister } from "../../components/PatientRegister/PatientRegister";

export const PatientRegisterPage = () => {
  const { auth } = useContext(AuthContext);

  const render = () => {
    const userEmail = auth.user.email;
    const userName = userEmail.split("@")[0];
    return (
      <Styled.PageContainer>
        <SidebarMenu />
        <Styled.MainContent>
          <Toolbar
            pageTitle="Cadastrar Paciente"
            userName={userName}
            userPhoto="userPhoto.png"
          />
          <PatientRegister />
        </Styled.MainContent>
      </Styled.PageContainer>
    );
  };
  return auth.isLogged ? render() : render()
  //<Navigate to={"/login"}/>
};
