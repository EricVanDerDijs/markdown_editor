import { LoginRegisterScreen } from './screens/login_register'
import { MainScreen } from './screens/main'

export const App = () => {
  const email = localStorage.getItem('email')

  return (
    <>
      {email ?
        <MainScreen />
        :
        <LoginRegisterScreen />
      }
    </>
  )
} 
