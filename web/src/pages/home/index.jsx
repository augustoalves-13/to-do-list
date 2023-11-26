import { useEffect } from 'react'
import './index.scss'
import Storage from 'local-storage'
import LoginEffect from '../../components/Functions/LoginEffect'
import HeaderLogin from '../../components/LoginComponents/HeaderLogin'

const HomePage = () =>{

   LoginEffect()
   
   return(
      <div className="home-container">
         <HeaderLogin/>
         <h1>Olá Mundo</h1>
      </div>         
   )
}

export default HomePage