/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useState, useEffect } from 'react'
import { Box, Grid, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import MenuBar from './common/MenuBar'

const MAIN_CSS = css`
  width: 100vw;
  height: 100vh;
`

const Home = (): JSX.Element => {
  const navigation = useNavigate()
  const onClickLogin = (): void => {
    navigation('/')
  }
  return (
    <Box css={MAIN_CSS}>
      <MenuBar />
      メインページだよ
    </Box>
  )
}

export default Home
