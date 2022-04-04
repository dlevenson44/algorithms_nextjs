import { Theme } from '@mui/material/styles'
import { createStyles, makeStyles } from '@mui/styles'

export const tabStyles = makeStyles((theme: Theme) =>
  createStyles({
    tabs: {
      padding: theme.spacing(1),
      '& .MuiTabs-indicator': {
        backgroundColor: theme.palette.secondary.dark,
        height: 3,
      },
    },
    tab: {
      color: theme.palette.secondary.main,
      fontFamily: theme.typography.button.fontFamily,
      fontWeight: theme.typography.button.fontWeight,
      width: '11%',
      '&.Mui-selected': {
        color: theme.palette.secondary.dark,
      },
    },
  })
)
