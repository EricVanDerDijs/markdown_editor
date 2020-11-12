import { useState } from 'react'

const NEW_DOCUMENT = {
  _id: 'none',
  title: 'New Document',
  author_id: 'none',
  author_name: 'none',
  content: '# New Blank Document',
  updated_at: '2012-10-15T21:26:17Z',
  savedToDb: true,
}

const getSelectedDocument = (documentsDict, selectedDocumentId) => {
  if (!selectedDocumentId)
    selectedDocumentId = 'none'

  let result = documentsDict[selectedDocumentId]
  if (result)
    return result
  else
    return NEW_DOCUMENT
}

const useDocumentsList = () => {
  const [documents, setDocumentsList] = useState({})
  const [selectedDocumentId, setSelectedDocumentId] = useState('')
  const selectedDocument = getSelectedDocument(documents, selectedDocumentId)
  
  const updateDocument = updatedDocument => {
    const newDocumentsDict = { 
      ...documents,
      [updatedDocument._id]: updatedDocument
    }
    setDocumentsList(newDocumentsDict)
  }
  
  const deleteDocumentById = document_id => {
    delete documents[document_id]
    setDocumentsList({ ...documents })
  }

  return {
    documents,
    selectedDocument,
    setDocumentsList,
    updateDocument,
    setSelectedDocumentId,
    deleteDocumentById,
  }
}

export { useDocumentsList, NEW_DOCUMENT }