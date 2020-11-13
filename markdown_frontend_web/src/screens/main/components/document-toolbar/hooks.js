import { useState } from 'react'
import { baseFetch } from '../../../../api/base'
import { NEW_DOCUMENT } from '../../hooks'

const useDocumentToolbar = (currentDocument, onDocumentUpdated, onDocumentCreated, onDocumentDeleted, onLoading) => {
  const user_id = localStorage.getItem('user_id')
  const [error, setError] = useState('')

  const updateTitle = e => {
    const updatedDocument = { ...currentDocument, title: e.target.value, savedToDb: false  }
    onDocumentUpdated(updatedDocument)
  }

  const createDocument = async (document) => {
    setError('')
    onLoading(true)
    try {
      const body = JSON.stringify({
        title: document.title,
        content: document.content,
        author: user_id,
      })

      const result = await baseFetch('/documents', { method: 'POST',  body })
      result.savedToDb = true
      onDocumentCreated(result)
    } catch ({ error }) {
      setError(error)
    } finally {
      onLoading(false)
    }
  }

  const updateDocument = async (document) => {
    setError('')
    onLoading(true)
    try {
      const body = JSON.stringify({
        title: document.title,
        content: document.content,
      })

      const result = await baseFetch(`/documents/${document._id}`, { method: 'PUT',  body })
      result.savedToDb = true
      onDocumentUpdated(result)
    } catch ({ error }) {
      setError(error)
    } finally {
      onLoading(false)
    }
  }

  const upsertDocument = (document) => {
    if (document._id === NEW_DOCUMENT._id)
      createDocument(document)
    else
      updateDocument(document)
  }

  const deleteDocument = async (document_id) => {
    setError('')
    onLoading(true)
    try {
      await baseFetch(`/documents/${document_id}`, { method: 'DELETE' })
      onDocumentDeleted(document_id)
    } catch ({ error }) {
      setError(error)
    } finally {
      onLoading(false)
    }
  }

  return { error, setError, updateTitle, upsertDocument, deleteDocument }
}

export { useDocumentToolbar }