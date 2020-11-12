import { useState } from 'react'
import {  Button, CircularProgress, Snackbar, TextField } from '@material-ui/core'
import { useStyles } from './styles'
import { baseFetch } from '../../../../api/base'

export const LoginForm = () => {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { root, input } = useStyles()

  const registerUser = async () => {
    setLoading(true)
    const body = JSON.stringify({ identifier, password })
    console.log(body)
    try {
      const response = await baseFetch(
        '/auth/local',
        {
          method: 'POST',
          body,
        }
      )
      const { user: { email } } = response
      localStorage.setItem('email', email)
      window.location.reload()
    } catch ({ error, ...rest }) {
      if (error) setError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {loading ?
        <CircularProgress />
        :
        <form className={root}>
          <TextField label="Username / Email" onChange={(e) => setIdentifier(e.target.value)} value={identifier} className={input} />
          <TextField label="Password" type='password' onChange={(e) => setPassword(e.target.value)} value={password} className={input}/>
          <Button onClick={() => registerUser()} variant='contained'>
            Submit!
          </Button>
        </form>
      }
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={!!error}
        message={error}
        autoHideDuration={3000}
        onClose={() => setError('')} />
    </>
  )
}