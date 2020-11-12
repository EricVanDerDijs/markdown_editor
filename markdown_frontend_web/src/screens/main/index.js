import React from 'react'
import { useStyles } from './styles'
import { DocsList } from './components/docs-list'
import { MarkdownEditor } from './components/markdown-editor'
import { useDocumentsList } from './hooks'

export const MainScreen = () => {
  const {
    documents,
    selectedDocument,
    updateDocument,
    setSelectedDocumentId,
    deleteDocumentById,
  } = useDocumentsList()
  const classes = useStyles()

  return (
    <div className={classes.root}>
        <DocsList
          documents={documents}
          selectedDocumentId={selectedDocument._id}
          onDocumentSelected={setSelectedDocumentId}
          onDeleteDocument={deleteDocumentById}
          />
        <MarkdownEditor
          currentDocument={selectedDocument}
          onDocumentChange={updateDocument} />
    </div>
  )
}