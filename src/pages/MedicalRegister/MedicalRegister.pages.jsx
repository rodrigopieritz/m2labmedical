import { useContext } from "react"
import { AuthContext } from "../../context/auth/auth.context"
import { Navigate } from "react-router"
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu"
import Toolbar from "../../components/Toolbar/ToolbarComponent"
import * as Styled from "../../global.style";
import { MedicalRegisterComponent } from "../../components/MedicalRegister/MedicalRegisterComponent";

export const MedicalRegister = () => {
    const { auth } = useContext(AuthContext);
    const userEmail = auth.user.email;
    const userName = userEmail.split("@")[0];
  
    const render = () => {
     
      return (
        <Styled.PageContainer>
          <SidebarMenu />
          <Styled.MainContent>
            <Toolbar
              pageTitle="Cadastrar Consulta"
              userName={userName}
              userPhoto="/../../userPhoto.png"
            />
            <Styled.SpecificPageContent>
            <MedicalRegisterComponent/>
            </Styled.SpecificPageContent>
          </Styled.MainContent>
        </Styled.PageContainer>
      );
    };
   return auth.isLogged ? render () : <Navigate to ={ '/login' }/>
}

//Código para manutenção (sem autenticação)

// import SidebarMenu from "../../components/SidebarMenu/SidebarMenu"
// import Toolbar from "../../components/Toolbar/ToolbarComponent"
// import * as Styled from "../../global.style";
// import { MedicalRegisterComponent } from "../../components/MedicalRegister/MedicalRegisterComponent";

// export const MedicalRegister = () => {
    
//       return (
//         <Styled.PageContainer>
//           <SidebarMenu />
//           <Styled.MainContent>
//             <Toolbar
//               pageTitle="Cadastrar Consulta"
//               userName="Cadastro de consulta"
//               userPhoto="userPhoto.png"
//             />
//             <Styled.SpecificPageContent>
//               <MedicalRegisterComponent/>
              
//             </Styled.SpecificPageContent>
//           </Styled.MainContent>
//         </Styled.PageContainer>
//       )
//     }