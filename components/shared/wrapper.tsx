import React from 'react'

import Box, { BoxProps } from '@mui/material/Box'

interface WrapperProps extends BoxProps {
  children: React.ReactNode | React.ReactNode[]
  page: string
  sxOverride?: { [key: string]: string }
}

const Wrapper: React.FC<WrapperProps> = ({
  children,
  page,
  sxOverride,
  ...rest
}) => (
  <Box
    data-testid={`${page}_wrapper`}
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      ...sxOverride,
    }}
    {...rest}
  >
    {children}
  </Box>
)

export default Wrapper
