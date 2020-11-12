import { LoginRegisterScreen } from './screens/login_register'
import { MainScreen } from './screens/main'

export const App = () => {
  const user_id = localStorage.getItem('user_id')

  return (
    <>
      {user_id ?
        <MainScreen />
        :
        <LoginRegisterScreen />
      }
    </>
  )
} 
