// import { useContext } from "react";
// import { AuthContext } from "../../context/auth/auth.context";
// import { Navigate } from "react-router";
// import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";
// import Toolbar from "../../components/Toolbar/ToolbarComponent";
// import * as Styled from "../../global.style";
// import { PatientRegisterComponent } from "../../components/PatientRegisterComponent/PatientRegisterComponent";

// export const PatientRegisterPage = () => {
//   const { auth } = useContext(AuthContext);

//   const render = () => {
//     const userEmail = auth.user.email;
//     const userName = userEmail.split("@")[0];
//     return (
//       <Styled.PageContainer>
//         <SidebarMenu />
//         <Styled.MainContent>
//           <Toolbar
//             pageTitle="Cadastrar Paciente"
//             userName={userName}
//             userPhoto="userPhoto.png"
//           />
//           <PatientRegisterComponent/>
//         </Styled.MainContent>
//       </Styled.PageContainer>
//     );
//   };
//   return auth.isLogged ? render() : <Navigate to={"/login"}/>
// };

// Código para rodar ao fazer manutneção (dispensa a autendicação de usuário)

import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";
import Toolbar from "../../components/Toolbar/ToolbarComponent";
import * as Styled from "../../global.style";
import { PatientRegisterComponent } from "../../components/PatientRegisterComponent/PatientRegisterComponent";
import { useParams } from "react-router-dom";

export const PatientRegisterPage = () => {

  const { id } = useParams();
 
    return (
      <Styled.PageContainer>
        <SidebarMenu />
        <Styled.MainContent>
          <Toolbar
            pageTitle="Registro de Pacientes"
            userName="Página de teste"
            userPhoto="/../../userPhoto.png"
          />
          <PatientRegisterComponent id={id}/>
        </Styled.MainContent>
      </Styled.PageContainer>
    );
  }
 
