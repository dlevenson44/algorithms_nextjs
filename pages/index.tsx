import React from 'react'

import MuiLink from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import map from 'lodash/map'
import type { NextPage } from 'next'
import NextLink from 'next/link'

import { Header, Wrapper } from '~/components/shared'
import { linkConfig } from '~/utils/configuration/menu-items'
import { Link } from '~/utils/types/menu-items'

const Home: NextPage = () => {
  return (
    <Wrapper page="home">
      <Header pageTitle="Algorithms" />
      <Stack>
        {map(linkConfig, ({ title, url }: Link) => (
          <NextLink key={url} href={url} passHref>
            <MuiLink data-testid={title}>{title}</MuiLink>
          </NextLink>
        ))}
      </Stack>
    </Wrapper>
  )
}

export default Home
