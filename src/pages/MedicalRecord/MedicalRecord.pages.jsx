import { useContext } from "react"
import { AuthContext } from "../../context/auth/auth.context"
import { Navigate } from "react-router"
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu"
import Toolbar from "../../components/Toolbar/ToolbarComponent"
import * as Styled from "../../global.style";

export const MedicalRecord = () => {
    const { auth } = useContext(AuthContext);
    const userEmail = auth.user.email;
    const userName = userEmail.split("@")[0];
  
    const render = () => {
          return (
            <Styled.PageContainer>
            <SidebarMenu />
            <Styled.MainContent>
              <Toolbar
                pageTitle="Listar Prontuários"
                userName={userName}
                userPhoto="userPhoto.png"
              />
              <Styled.SpecificPageContent>
                <p> Medical Record is render </p>
              </Styled.SpecificPageContent>
            </Styled.MainContent>
          </Styled.PageContainer>
        );
      };
   return auth.isLogged ? render () : <Navigate to ={ '/login' }/>
}