import { memo, useState, useEffect } from 'react'
import { AppBar, CircularProgress, Toolbar, Typography, Button, IconButton } from '@material-ui/core'
import LogoutIcon from '@material-ui/icons/ExitToApp'
import { DocListItem } from '../doc-list-item'
import { useStyles } from './styles'
import { NEW_DOCUMENT } from '../../hooks'
import { baseFetch } from '../../../../api/base'

export const DocsList = memo(({
  documents,
  selectedDocumentId,
  onDocumentSelected,
  onDocumentsFetched,
}) => {
  const user_id = localStorage.getItem('user_id')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('true')

  const { docsListContainer, list, appBar } = useStyles()

  const logout = () => {
    localStorage.clear()
    window.location.reload()
  }

  const fetchDocuments = async () => {
    setError('')
    setLoading(true)
    try {
      const result = await baseFetch('/documents', { queryString: { author: user_id } })
      const newDocumentsDict = {}
      newDocumentsDict[NEW_DOCUMENT._id] = NEW_DOCUMENT
      if (result instanceof Array) {
        result.forEach(document => {
          document.savedToDb = true
          newDocumentsDict[document._id] = document
        })
      }
      onDocumentsFetched(newDocumentsDict)
    } catch ({ error }) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDocuments()
  }, [])


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