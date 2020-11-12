import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  appBar: {
    justifyContent: 'space-between',
    display: 'flex',
  },
  docsListContainer: {
    height: 'calc(100vh - 7px)',
    gridArea: 'docs_list',
  },
  list: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: '10px 0',
    overflowY: 'auto',
    maxHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight + 10}px)`
  },
}))