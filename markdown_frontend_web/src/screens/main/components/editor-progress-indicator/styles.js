import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  root: {
    gridArea: '1 / 2 / span 2 / span 2',
    background: 'whitesmoke',
    opacity: 0.7,
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})