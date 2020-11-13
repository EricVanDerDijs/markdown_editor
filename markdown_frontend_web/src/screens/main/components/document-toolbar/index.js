import { memo } from 'react'
import { Button, TextField, Snackbar } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import { NEW_DOCUMENT } from '../../hooks'
import { useStyles } from './styles'
import { useDocumentToolbar } from './hooks'

export const DocumentToolbar = memo(({
  currentDocument,
  onDocumentUpdated,
  onDocumentCreated,
  onDocumentDeleted,
  onLoading,
}) => {
  const {
    error,
    setError,
    updateTitle,
    upsertDocument,
    deleteDocument
  } = useDocumentToolbar(currentDocument, onDocumentUpdated, onDocumentCreated, onDocumentDeleted, onLoading)
  const { root, documentInfo, documentActions } = useStyles()

  return (
    <div className={root}>
      <div className={documentInfo}>
        <TextField
          variant='standard'
          size='small'
          label='Title'
          value={currentDocument.title}
          onChange={updateTitle} />
      </div>
      <div className={documentActions}>
        <Button
          variant='contained'
          color='primary'
          size='small'
          disabled={currentDocument.savedToDb}
          startIcon={<SaveIcon />}
          onClick={() => upsertDocument(currentDocument)}>
          Save
        </Button>
        {currentDocument._id !== NEW_DOCUMENT._id &&
          <Button
            variant='contained'
            color='secondary'
            size='small'
            startIcon={<DeleteIcon />}
            onClick={() => deleteDocument(currentDocument._id)}>
            Delete
          </Button>
        }
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={!!error}
        message={error}
        autoHideDuration={3000}
        onClose={() => setError('')} />
    </div>
  )
})

DocumentToolbar.displayName = "DocumentToolbar"