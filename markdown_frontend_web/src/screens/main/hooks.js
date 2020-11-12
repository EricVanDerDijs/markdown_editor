import { useState } from 'react'

const NEW_DOCUMENT = {
  _id: 'none',
  title: 'New Document',
  author_id: 'none',
  author_name: 'none',
  content: '# New Blank Document',
  updated_at: '2012-10-15T21:26:17Z',
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
  const [documents, setDocumentsList] = useState({
    [NEW_DOCUMENT._id]: NEW_DOCUMENT,
    '1': {
      _id: '1',
      title: 'title 1',
      author_id: '1',
      author_name: 'eric',
      content: '# Heading 1',
      updated_at: '2012-10-15T21:26:17Z',
    },
    '2': {
      _id: '2',
      title: 'title 2',
      author_id: '1',
      author_name: 'eric',
      content: '# Heading 2',
      updated_at: '2012-10-15T21:26:17Z',
    },
    '3': {
      _id: '3',
      title: 'title 3',
      author_id: '1',
      author_name: 'eric',
      content: '# Heading 3',
      updated_at: '2012-10-15T21:26:17Z',
    },
    '4': {
      _id: '4',
      title: 'title 4',
      author_id: '1',
      author_name: 'eric',
      content: '# Heading 4',
      updated_at: '2012-10-15T21:26:17Z',
    },
    '5': {
      _id: '5',
      title: 'title 4',
      author_id: '1',
      author_name: 'eric',
      content: '# Heading 4',
      updated_at: '2012-10-15T21:26:17Z',
    },
    '6': {
      _id: '6',
      title: 'title 4',
      author_id: '1',
      author_name: 'eric',
      content: '# Heading 4',
      updated_at: '2012-10-15T21:26:17Z',
    },
    '7': {
      _id: '7',
      title: 'title 4',
      author_id: '1',
      author_name: 'eric',
      content: '# Heading 4',
      updated_at: '2012-10-15T21:26:17Z',
    },
    '8': {
      _id: '8',
      title: 'title 4',
      author_id: '1',
      author_name: 'eric',
      content: '# Heading 4',
      updated_at: '2012-10-15T21:26:17Z',
    },
    '9': {
      _id: '9',
      title: 'title 4',
      author_id: '1',
      author_name: 'eric',
      content: '# Heading 4',
      updated_at: '2012-10-15T21:26:17Z',
    },
    '10': {
      _id: '10',
      title: 'title 4',
      author_id: '1',
      author_name: 'eric',
      content: '# Heading 4',
      updated_at: '2012-10-15T21:26:17Z',
    },
    '11': {
      _id: '4',
      title: 'title 4',
      author_id: '1',
      author_name: 'eric',
      content: '# Heading 4',
      updated_at: '2012-10-15T21:26:17Z',
    },
    '12': {
      _id: '4',
      title: 'title 4',
      author_id: '1',
      author_name: 'eric',
      content: '# Heading 4',
      updated_at: '2012-10-15T21:26:17Z',
    },
    '13': {
      _id: '4',
      title: 'title 4',
      author_id: '1',
      author_name: 'eric',
      content: '# Heading 4',
      updated_at: '2012-10-15T21:26:17Z',
    },
    '14': {
      _id: '4',
      title: 'title 4',
      author_id: '1',
      author_name: 'eric',
      content: '# Heading 4',
      updated_at: '2012-10-15T21:26:17Z',
    },
    '15': {
      _id: '4',
      title: 'title 4',
      author_id: '1',
      author_name: 'eric',
      content: '# Heading 4',
      updated_at: '2012-10-15T21:26:17Z',
    },
    '16': {
      _id: '4',
      title: 'title 4',
      author_id: '1',
      author_name: 'eric',
      content: '# Heading 4',
      updated_at: '2012-10-15T21:26:17Z',
    },
  })
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
    updateDocument,
    setSelectedDocumentId,
    deleteDocumentById,
  }
}

export { useDocumentsList, NEW_DOCUMENT }