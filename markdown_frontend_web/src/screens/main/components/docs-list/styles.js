import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  docsListContainer: {
    height: 'calc(100vh - 7px)',
    gridArea: 'docs_list',
  },
  list: {
    overflowY: 'scroll',
    maxHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight + 10}px)`
  },
}))