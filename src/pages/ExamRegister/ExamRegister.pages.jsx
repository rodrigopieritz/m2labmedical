import { useContext } from "react";
import { AuthContext } from "../../context/auth/auth.context";
import { Navigate } from "react-router";
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";
import Toolbar from "../../components/Toolbar/ToolbarComponent";
import * as Styled from "../../global.style";
import { ExamRegisterComponent } from "../../components/ExamRegisterComponent/ExamRegisterComponent";
import { useParams } from "react-router-dom";

export const ExamRegister = () => {
  const { auth } = useContext(AuthContext);
    const { id } = useParams();

  const render = () => {
    const userEmail = auth.user.email;
  const userName = userEmail.split("@")[0];
    return (
      <Styled.PageContainer>
        <SidebarMenu />
        <Styled.MainContent>
          <Toolbar
            pageTitle="Cadastrar Exame"
            userName={userName}
            userPhoto="/../../userPhoto.png"
          />
          <Styled.SpecificPageContent>
          <ExamRegisterComponent id={id}/>
          </Styled.SpecificPageContent>
        </Styled.MainContent>
      </Styled.PageContainer>
    );
  };
  return auth.isLogged ? render() : <Navigate to={"/login"} />;
};

// Código para Manutenção (Autenticação de Usuário desabilitada)

// import { ExamRegisterComponent } from "../../components/ExamRegisterComponent/ExamRegisterComponent";
// import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";
// import Toolbar from "../../components/Toolbar/ToolbarComponent";
// import * as Styled from "../../global.style";
// import { useParams } from "react-router-dom";

// export const ExamRegister = () => {

//   const { id } = useParams();

//   return (
//     <Styled.PageContainer>
//       <SidebarMenu />
//       <Styled.MainContent>
//         <Toolbar
//           pageTitle="Registro de Exames"
//           userName="Nome do Usuário"
//           userPhoto="/../../userPhoto.png"
//         />
//         <Styled.SpecificPageContent>
//           <ExamRegisterComponent id={id}/>
//         </Styled.SpecificPageContent>
//       </Styled.MainContent>
//     </Styled.PageContainer>
//   );
// };
