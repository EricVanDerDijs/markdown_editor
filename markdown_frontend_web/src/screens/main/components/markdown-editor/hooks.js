import { useDocumentContext } from '../../../../contexts/document'

export const useDocumentContent = () => {
  const { document, setDocument } = useDocumentContext()

  const onContentChange = event => {
    const updatedDoc = { ...document, content: event.target.value }
    setDocument(updatedDoc)
  }

  return { content: document.content, onContentChange }
}