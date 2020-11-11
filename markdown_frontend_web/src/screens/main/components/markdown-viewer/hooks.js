import throttle from 'lodash/throttle'
import { useCallback, useEffect, useState } from 'react'
import { useDocumentContext } from '../../../../contexts/document'

const PARSING_THROTTLE_TIME = 1500

export const useParsedContent = parserFunction => {
  const { document } = useDocumentContext()
  const [parsedContent, setParsedContent] = useState('')

  const parseThrottled = useCallback(
    throttle(
      (content) => {
        const result = parserFunction(content)
        setParsedContent(result)
      },
      PARSING_THROTTLE_TIME
    ),
    []
  )

  useEffect(() => {
    if (document && document.content) parseThrottled(document.content)
  }, [document])

  return { parsedContent }
}