import { useContext } from "react"
import { AuthContext } from "../../context/auth/auth.context"
import { Navigate } from "react-router"
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu"


export const PatientRegister = () => {
    const {auth} = useContext( AuthContext)

    const render =() =>{

        return(
            <>
            <SidebarMenu/>
            <p> PatientRegister is render </p>
            </>
        )

    }
   return auth.isLogged ? render () : <Navigate to ={ '/login' }/>
}