import { useContext } from "react";
import { AuthContext } from "../../context/auth/auth.context";
import { Navigate } from "react-router";
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";
import Toolbar from "../../components/Toolbar/ToolbarComponent";

export const PatientRegister = () => {
  const { auth } = useContext(AuthContext);
  const userEmail = auth.user.email;
  const userName = userEmail.split("@")[0];

  const render = () => {
    return (
      <>
        <SidebarMenu />
        <Toolbar 
        pageTitle="Home" 
        userName={userName} 
        userPhoto="userPhoto.png" />
        <p> Patient Register is render </p>
      </>
    );
  };
  return auth.isLogged ? render() : <Navigate to={"/login"} />;
};
