import { useEffect, useState } from "react"
import Storage from 'local-storage'
import './index.scss'
import HeaderLogin from "../../components/LoginComponents/HeaderLogin"

const ProfilePage = ( ) => {

    const [ name, setName ] = useState('Carregando...')
    const [ senha, setSenha ] = useState('**********')
    const [ email, setEmail ] = useState('')
    

    const ProfileInfo = () => {
        const user = Storage('usuario-logado').data
        setName(user.nome)
    } 

    useEffect(()=>{
        ProfileInfo()
    },[])

    return(
        <div className="profile-container">
            <HeaderLogin/>
            <p>{name}</p>
        </div>
    )
}

export default ProfilePage