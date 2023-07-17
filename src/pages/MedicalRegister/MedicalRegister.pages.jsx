import { useContext } from "react"
import { AuthContext } from "../../context/auth/auth.context"
import { Navigate } from "react-router"
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu"


export const MedicalRegister = () => {
    const {auth} = useContext( AuthContext)

    const render =() =>{

        return(
            <>
            <SidebarMenu/>
            <p> Medical Register is render </p>
            </>
        )

    }
   return auth.isLogged ? render () : <Navigate to ={ '/login' }/>
}