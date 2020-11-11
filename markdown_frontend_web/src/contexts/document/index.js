import { createContext, useContext, useState } from 'react'

const DocumentContext = createContext({
  document: {
    _id: '',
    author_id: '',
    author_name: '',
    content: '',
    updated_at: '',
  },
  setDocument: (document) => {}
})
DocumentContext.displayName = 'DocumentContext'

export const DocumentContextProvider = ({ children }) => {
  const [document, setDocument] = useState({
    _id: '',
    author_id: '',
    author_name: '',
    content: '',
    updated_at: '',
  })

  return (
    <DocumentContext.Provider value={{document, setDocument}}>
      {children}
    </DocumentContext.Provider>
  )
}

export const useDocumentContext = () => {
  return useContext(DocumentContext)
}