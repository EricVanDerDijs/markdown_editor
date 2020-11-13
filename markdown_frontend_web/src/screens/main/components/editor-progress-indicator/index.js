import { memo } from 'react'
import { CircularProgress } from '@material-ui/core'
import { useStyles } from './styles'

export const EditorProgressIndicator = memo(({ isLoading }) => {
  const { root } = useStyles()

  return (
    <>
      {isLoading &&
        <div className={root}>
          <CircularProgress  />
        </div>
      }
    </>
  )
})

EditorProgressIndicator.displayName = "EditorProgressIndicator"