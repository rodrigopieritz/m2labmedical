import { useContext } from "react";
import { AuthContext } from "../../context/auth/auth.context";
import { Navigate } from "react-router";
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";
import Toolbar from "../../components/Toolbar/ToolbarComponent";
import * as Styled from "../../global.style";

export const ExamRegister = () => {
  const { auth } = useContext(AuthContext);
  const userEmail = auth.user.email;
  const userName = userEmail.split("@")[0];

  const render = () => {
    return (
      <Styled.PageContainer>
        <SidebarMenu />
        <Styled.MainContent>
          <Toolbar
            pageTitle="Cadastrar Exame"
            userName={userName}
            userPhoto="userPhoto.png"
          />
          <Styled.SpecificPageContent>
            <p> Exam Register is render </p>
          </Styled.SpecificPageContent>
        </Styled.MainContent>
      </Styled.PageContainer>
    );
  };
  return auth.isLogged ? render() : <Navigate to={"/login"} />;
};
