import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.primary.main,
  },
  title: {
    fontSize: 32,
    marginBottom: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  paperStyles: {
    maxWidth: 600,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabsContainer: {
    background: 'lightgray',
    width: '100%',
  },
  formContainer: {
    padding: 7,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))