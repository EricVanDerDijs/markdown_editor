import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    height: `${theme.mixins.toolbar.minHeight}px`,
    gridArea: 'editor_toolbar',
    background: 'whitesmoke',
    padding: '3px 10px',
    display: 'flex',
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    zIndex: 1,
  },
  documentInfo: {
    flexGrow: 1,
    '&>div': {
      width: '100%',
      paddingRight: 20,
    },
    '& input': {
      padding: '3px 0 4px',
      fontSize: 16,
      fontWeight: 'bold',
    }
  },
  documentActions: {
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    '& button:first-child': {
      marginRight: 7,
    }
  },
}))