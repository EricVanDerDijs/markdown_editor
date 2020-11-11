import { memo } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

export const DocsList = memo(({ className }) => {

  return (
    <div className={className}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="p">
            Markdown App
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  )
})