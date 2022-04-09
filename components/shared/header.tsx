import React from 'react'

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
import find from 'lodash/find'
import map from 'lodash/map'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { tabStyles } from '~/styles/components/shared/styles'
import { theme } from '~/styles/theme'
import { linkConfig } from '~/utils/configuration/menu-items'
import { Link } from '~/utils/types/menu-items'

interface HeaderProps {
  headerText?: string
  pageTitle: string
  renderTabs?: boolean
}

const Header: React.FC<HeaderProps> = ({
  headerText,
  pageTitle,
  renderTabs,
}) => {
  const classes = tabStyles()
  const router = useRouter()
  const [selectedTab, setSelectedTab] = React.useState<string>('')

  React.useEffect(() => {
    const selectedPage = router.pathname.split('/').join('')
    if (selectedPage) setSelectedTab(selectedPage)
  }, [router])

  const handleTabChange = (_e: React.SyntheticEvent, value: string) => {
    const newTab = find(linkConfig, (link) => value === link.url)
    return router.push(newTab?.url as string)
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>{pageTitle}</title>
      </Head>
      <div data-testid="header_wrapper">
        {renderTabs && Boolean(selectedTab) && (
          <Tabs
            className={classes.tabs}
            onChange={handleTabChange}
            value={selectedTab}
            variant="scrollable"
          >
            {map(linkConfig, ({ title, url }: Link) => {
              return (
                <Tab
                  className={classes.tab}
                  key={url}
                  label={title}
                  value={url}
                  wrapped
                />
              )
            })}
          </Tabs>
        )}
        {headerText && (
          <Box mt={5}>
            <Typography color={theme.palette.secondary.dark} variant="h4">
              {headerText}
            </Typography>
            <Divider
              sx={{ border: `2px solid ${theme.palette.secondary.dark}` }}
            />
          </Box>
        )}
      </div>
    </>
  )
}

export default Header
