import React from 'react'

import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import map from 'lodash/map'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { tabStyles } from '~/styles/components/shared/styles'
import { linkConfig } from '~/utils/configuration/menu-items'
import { Link } from '~/utils/types/menu-items'

interface HeaderProps {
  pageTitle: string
  renderTabs?: boolean
}

const Header: React.FC<HeaderProps> = ({ pageTitle, renderTabs }) => {
  const classes = tabStyles()
  const router = useRouter()
  const [selectedTab, setSelectedTab] = React.useState<string>('')

  React.useEffect(() => {
    const selectedPage = router.pathname.split('/').join('')
    if (selectedPage) setSelectedTab(selectedPage)
  }, [router])

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
      </div>
    </>
  )
}

export default Header
