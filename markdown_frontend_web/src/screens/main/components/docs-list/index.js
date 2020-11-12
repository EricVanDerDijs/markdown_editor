import { memo } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { DocListItem } from '../doc-list-item'
import { useStyles } from './styles'
import { NEW_DOCUMENT } from '../../hooks'

export const DocsList = memo(({
  documents,
  selectedDocumentId,
  onDocumentSelected,
  onDeleteDocument,
}) => {
  const { docsListContainer, list } = useStyles()


  return (
    <div className={docsListContainer}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant='h6'>
            Markdown App
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      <div className={list}>
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
                onItemClicked={() => onDocumentSelected(id)}
                onDeleteDocument={() => onDeleteDocument(id)} />
            )
            :
            null
        })}
      </div>
    </div>
  )
})