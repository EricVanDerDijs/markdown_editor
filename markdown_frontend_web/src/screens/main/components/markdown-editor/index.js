import { memo } from 'react'
import { useDocumentContent } from './hooks'

export const MarkdownEditor = memo(({ className }) => {
  const { content, onContentChange } = useDocumentContent()

  return (
    <textarea className={className} onChange={onContentChange} value={content} />
  )
})