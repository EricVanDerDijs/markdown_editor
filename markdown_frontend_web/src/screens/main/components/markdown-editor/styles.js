import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  md_editor: {
    height: 'calc(100vh - 3px)',
    gridArea: 'md_editor',
    background: 'lightgray',
    padding: 10,
    border: 'none',
    outline: 'none',
    overflowY: 'scroll',
  },
  md_viewer: {
    height: 'calc(100vh - 3px)',
    gridArea: 'md_result',
    background: 'white',
    padding: 10,
    overflowY: 'scroll',
  },
})