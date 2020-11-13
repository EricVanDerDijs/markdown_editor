import { memo } from 'react'
import { AppBar, CircularProgress, Toolbar, Typography, Button, IconButton } from '@material-ui/core'
import LogoutIcon from '@material-ui/icons/ExitToApp'
import { DocListItem } from '../doc-list-item'
import { useStyles } from './styles'
import { NEW_DOCUMENT } from '../../hooks'
import { useDocumentsList } from './hooks'

export const DocsList = memo(({
  documents,
  selectedDocumentId,
  onDocumentSelected,
  onDocumentsFetched,
  onLoading,
}) => {
  const { error, loading, fetchDocuments, logout } = useDocumentsList(onDocumentsFetched, onLoading)
  const { docsListContainer, list, appBar } = useStyles()


  return (
    <div className={docsListContainer}>
      <AppBar position="static">
        <Toolbar className={appBar}>
          <Typography variant='subtitle1'>
            Markdown App
          </Typography>
          <IconButton color="inherit" onClick={logout} size='small'>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={list}>

        {
          loading ?
            <CircularProgress />
            :
            <>
            {
              !!error ?
                <>
                  <Typography paragraph variant='body1'>{error}</Typography>
                  <Button variant='contained' onClick={() => fetchDocuments()}>Retry</Button>
                </>
                :
                <>
                  {!!documents[NEW_DOCUMENT._id] &&
                    <DocListItem
                      newDocumentItem
                      isSelected={selectedDocumentId === NEW_DOCUMENT._id}
                      document={NEW_DOCUMENT}
                      onItemClicked={() => onDocumentSelected(NEW_DOCUMENT._id)} />
                  }
                  {Object.keys(documents).map(id => {
                    return id !== NEW_DOCUMENT._id ?
                      (
                        <DocListItem
                          key={id}
                          isSelected={selectedDocumentId === id}
                          document={documents[id]}
                          onItemClicked={() => onDocumentSelected(id)} />
                      )
                      :
                      null
                  })}
                </>
            }
            </>
        }
      </div>
    </div>
  )
})