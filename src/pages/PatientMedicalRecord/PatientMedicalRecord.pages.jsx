import { useContext } from "react";
import { AuthContext } from "../../context/auth/auth.context";
import { Navigate } from "react-router";
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";
import Toolbar from "../../components/Toolbar/ToolbarComponent";
import { PatientMedicalRecordComponent } from "../../components/PatientMedicalRecordComponent/PatientMedicalRecordComponent";
import * as Styled from "../../global.style";
import { useParams } from "react-router-dom";

export const PatientMedicalRecord = () => {
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
            pageTitle="Prontuário do Paciente"
            userName={userName}
            userPhoto="/../../userPhoto.png"
          />
          <Styled.SpecificPageContent>
          <PatientMedicalRecordComponent id={id}/>
          </Styled.SpecificPageContent>
        </Styled.MainContent>
      </Styled.PageContainer>
    );
  };

  return auth.isLogged ? render() : <Navigate to={"/login"} />;
};

// Código para Manutenção (Autenticação de Usuário desabilitada)


// import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";
// import Toolbar from "../../components/Toolbar/ToolbarComponent";
// import * as Styled from "../../global.style";
// import { PatientMedicalRecordComponent } from "../../components/PatientMedicalRecordComponent/PatientMedicalRecordComponent";
// import { useParams } from "react-router-dom";



// export const PatientMedicalRecord = () => {
  
//   const { id } = useParams();
  
//   return (
//     <>
//       <Styled.PageContainer>
//         <SidebarMenu />
//         <Styled.MainContent>
//           <Toolbar
//                pageTitle="Prontuário do Paciente"
//                userName="{userName}"
//                userPhoto="/../../userPhoto.png"
//           />
//           <Styled.SpecificPageContent>
//           <PatientMedicalRecordComponent id={id}/>
//           </Styled.SpecificPageContent>
//         </Styled.MainContent>
//       </Styled.PageContainer>
//     </>
//   );
// };
