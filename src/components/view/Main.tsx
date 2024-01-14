/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useState, useEffect } from 'react'
import { Box, Grid, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const MAIN_CSS = css`
  width: 100vw;
  height: 100vh;
`

const Main = (): JSX.Element => {
  const navigation = useNavigate()
  const onClickLogin = (): void => {
    navigation('/Login')
  }
  return (
    <Box css={MAIN_CSS}>
      <Button onClick={onClickLogin}>ログイン画面に進む</Button>
    </Box>
  )
}

export default Main
