import { memo } from 'react'
import { useParsedContent } from './hooks'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()

export const MarkdownViewer = memo(({ className }) => {
  const { parsedContent } = useParsedContent(md.render.bind(md))

  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: parsedContent }}/>
  )
})