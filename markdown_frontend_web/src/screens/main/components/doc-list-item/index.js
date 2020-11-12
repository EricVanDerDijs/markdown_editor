import { memo } from 'react'
import { Typography, Paper, IconButton } from '@material-ui/core'
import FileIcon from '@material-ui/icons/Description'
import DeleteIcon from '@material-ui/icons/Delete'
import { useStyles } from './styles'

export const DocListItem = memo(({
  isSelected,
  newDocumentItem,
  document,
  onItemClicked,
  onDeleteDocument = () => {},
}) => {
  const { root, icon, infoContainer } = useStyles({ isSelected })

  return (
    <Paper elevation={2} className={root} onClick={() => onItemClicked(document._id)}>
      {newDocumentItem &&
        <FileIcon className={icon} />
      }
      <div className={infoContainer}>
        <Typography variant='subtitle1'>
          {document.title}
        </Typography>
        {!newDocumentItem &&
          <Typography variant='caption'>
            {document.updated_at}
          </Typography>
        }
      </div>
      {!newDocumentItem &&
          <IconButton onClick={event => {
            event.stopPropagation()
            onDeleteDocument()
          }}>
            <DeleteIcon color='action'/>
          </IconButton>
        }
    </Paper>
  )
})