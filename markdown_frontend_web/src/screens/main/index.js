import React from 'react'
import { useStyles } from './styles'
import { DocsList } from './components/docs-list'
import { MarkdownEditor } from './components/markdown-editor'
import { useDocumentsList } from './hooks'
import { DocumentToolbar } from './components/document-toolbar'
import { EditorProgressIndicator } from './components/editor-progress-indicator'

export const MainScreen = () => {
  const {
    documents,
    selectedDocument,
    isLoading,
    setDocumentsList,
    updateDocument,
    setSelectedDocumentId,
    createAndSelectDocument,
    deleteDocumentById,
    setLoading
  } = useDocumentsList()
  const classes = useStyles()

  return (
    <div className={classes.root}>
        <DocsList
          documents={documents}
          selectedDocumentId={selectedDocument._id}
          onDocumentSelected={setSelectedDocumentId}
          onDocumentsFetched={setDocumentsList}
          onLoading={setLoading}
          />
        <EditorProgressIndicator
          isLoading={isLoading} />
        <DocumentToolbar
          currentDocument={selectedDocument}
          onDocumentUpdated={updateDocument}
          onDocumentCreated={createAndSelectDocument}
          onDocumentDeleted={deleteDocumentById}
          onLoading={setLoading} />
        <MarkdownEditor
          currentDocument={selectedDocument}
          onDocumentChange={updateDocument} />
    </div>
  )
}