import LoadingBar from 'react-top-loading-bar'
import HeaderLogin from '../../components/LoginComponents/HeaderLogin'
import BoxLogin from '../../components/LoginComponents/Login'
import './index.scss'
import { useEffect, useRef } from 'react'
import Storage from 'local-storage'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import { background, secondary, theme } from '../../components/Styles/styles'

const LoginPage = () => {

   const ref = useRef()
   const navigate = useNavigate()

   const AutoLogin = () => {
      if(Storage("usuario-logado")){
         navigate('/home')
      }
   }

   const Theme = () => {

      let data = {
         principal: background,
         secudaria: secondary,
         tema: theme
      }

      if(Storage('usuario-logado')){
         Storage('temas', data)
      }
   }

   useEffect(() => {
      Theme()
   }, [])

   return (
      <div className="main-container">
         <LoadingBar height={4} className='loader' color='#f11946' ref={ref} />
         <HeaderLogin />
         <BoxLogin referencia={ref} />
         <Footer/>
      </div>
   )
}

export default LoginPage