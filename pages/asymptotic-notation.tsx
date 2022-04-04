import React from 'react'

import Container from '@mui/material/Container'
import type { NextPage } from 'next'

import { Header, Wrapper } from '~/components/shared'

const AsymptoticNotation: NextPage = () => {
  return (
    <Wrapper
      page="asymptotic-notation"
      sxOverride={{ alignItems: 'space-between' }}
    >
      <Container>
        <Header pageTitle="Asymptotic Notation - Algorithms" renderTabs />
      </Container>
    </Wrapper>
  )
}

export default AsymptoticNotation
