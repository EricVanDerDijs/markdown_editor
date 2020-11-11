import { memo } from 'react'
import { useStyles } from './styles'
import { DocsList } from './components/docs-list'
import { MarkdownEditor } from './components/markdown-editor'
import { MarkdownViewer } from './components/markdown-viewer'
import { DocumentContextProvider } from '../../contexts/document'

export const MainScreen = memo(() => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <DocsList className={classes.docs_list} />
      <DocumentContextProvider>
        <MarkdownEditor className={classes.md_editor} />
        <MarkdownViewer className={classes.md_viewer} />
      </DocumentContextProvider>
    </div>
  )
})