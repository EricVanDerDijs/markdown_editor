import { useState, useEffect } from 'react'
import { NEW_DOCUMENT } from '../../hooks'
import { baseFetch } from '../../../../api/base'

const useDocumentsList = (onDocumentsFetched, onLoading) => {
  const user_id = localStorage.getItem('user_id')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('true')

  const fetchDocuments = async () => {
    setError('')
    setLoading(true)
    onLoading(true)
    try {
      const result = await baseFetch('/documents', { queryString: { author: user_id } })
      const newDocumentsDict = {}
      newDocumentsDict[NEW_DOCUMENT._id] = { ...NEW_DOCUMENT }
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
      onLoading(false)
    }
  }

  const logout = () => {
    localStorage.clear()
    window.location.reload()
  }

  useEffect(() => {
    fetchDocuments()
  }, [])

  return { loading, error, fetchDocuments, logout }
}

export { useDocumentsList }
