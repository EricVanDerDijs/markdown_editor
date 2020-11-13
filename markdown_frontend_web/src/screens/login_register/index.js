import { useState } from 'react'
import { Paper, Tab, Tabs, Typography } from '@material-ui/core'
import { useStyles } from './styles'
import { TabPanel } from './components/tab-panel'
import { RegisterForm } from './components/register-form'
import { LoginForm } from './components/login-form'

export const LoginRegisterScreen = () => {
  const { root, title, paperStyles, formContainer, tabsContainer } = useStyles()
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <div className={root}>
      <Typography variant='h1' className={title}>
        Markdown App
      </Typography>
      <Paper className={paperStyles}>
        <div className={tabsContainer}>
          <Tabs value={tabIndex} onChange={handleChange}>
            <Tab label='Login'/>
            <Tab label='Register'/>
          </Tabs>
        </div>
        <TabPanel value={tabIndex} index={0} className={formContainer}>
          <LoginForm />
        </TabPanel>
        <TabPanel value={tabIndex} index={1} className={formContainer}>
          <RegisterForm />
        </TabPanel>
      </Paper>
    </div>
  )
}