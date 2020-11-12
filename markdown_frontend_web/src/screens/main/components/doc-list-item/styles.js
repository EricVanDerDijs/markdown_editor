import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme=> ({
  root: {
    margin: 7,
    padding: '5px 10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    width: 'calc(100% - 10px)',
    background: props => props.isSelected ? theme.palette.primary.light :  'white'
  },
  icon: {
    height: 20,
    width: 20,
    margin: '4px 0',
  },
  infoContainer: {
    flexGrow: 1,
  }
}))