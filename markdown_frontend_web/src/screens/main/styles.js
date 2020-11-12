import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  root: {
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 2fr',
    gridTemplateRows: '1fr',
    gridTemplateAreas: '"docs_list md_editor md_result"'
  },
  docs_list: {
    height: '100%',
    gridArea: 'docs_list',
    borderRight: '1px solid gray'
  },
})