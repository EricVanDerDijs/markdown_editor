import { useState, useCallback, useEffect } from 'react'
import throttle from 'lodash/throttle'
import MarkdownIt from 'markdown-it'

const PARSING_THROTTLE_TIME = 1500
const MD = new MarkdownIt()

const useParsedContent = (content, parserFunction) => {
  const [parsedContent, setParsedContent] = useState('')

  const parseThrottled = useCallback(
    throttle(
      (content) => {
        const result = parserFunction(content)
        setParsedContent(result)
      },
      PARSING_THROTTLE_TIME,
      { leading: true, trailing: true }
    ),
    []
  )

  useEffect(() => {
    parseThrottled(content)
  }, [content])

  return { parsedContent }
}

const useDocumentContent = (currentDocument, onDocumentChange) => {
  const content = currentDocument && currentDocument.content ? currentDocument.content : ''
  const { parsedContent } = useParsedContent(content, MD.render.bind(MD))

  const onContentChange = event => {
    const updatedDoc = { ...currentDocument, content: event.target.value }
    onDocumentChange(updatedDoc)
  }

  return {
    content,
    parsedContent,
    onContentChange
  }
}

export { useDocumentContent, useParsedContent }