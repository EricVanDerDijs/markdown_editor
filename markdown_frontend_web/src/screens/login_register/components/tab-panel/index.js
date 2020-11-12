import { Box } from '@material-ui/core'

export const TabPanel = ({ children, value, index, ...other }) => {

  return (
    <>
      {value === index &&
        <div
          role="tabpanel"
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        > 
          {children}
        </div>
      }
    </>
  )
}