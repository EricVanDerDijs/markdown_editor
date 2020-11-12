import { memo } from 'react'
import { useDocumentContent } from './hooks'
import { useStyles } from './styles'

export const MarkdownEditor = memo(({ currentDocument, onDocumentChange }) => {
  const { content, parsedContent, onContentChange } = useDocumentContent(currentDocument, onDocumentChange)
  const { md_editor, md_viewer } = useStyles()

  return (
    <>
      <textarea className={md_editor} onChange={onContentChange} value={content} />
      <div className={md_viewer} dangerouslySetInnerHTML={{ __html: parsedContent }}/>
    </>
  )
})

MarkdownEditor.displayName = "MarkdownEditor"