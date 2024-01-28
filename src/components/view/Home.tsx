/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useState, useEffect } from 'react'
import { Box, Grid, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import MenuBar, { MENUBAR_HEIGHT, CLOSE_MENUBAR_HEIGHT } from './common/MenuBar'

const MAIN_CSS = css`
  width: 100vw;
  height: 100vh;
  position: absolute;
`

const MAIN_AREA_CSS = css`
  width: calc(100% - 20px);
  height: calc(100% - ${MENUBAR_HEIGHT + 20}px);
  padding: 10px;
`

const BUTTON_CSS = css`
  width: 250px;
  height: ${MENUBAR_HEIGHT}px;
  background-color: lightgray;
  color: black;
  :hover {
    border: 2px solid lightgray;
  }
`

const Home = (): JSX.Element => {
  const navigation = useNavigate()
  const [menuBarHeight, setMenuBarHeight] = useState(MENUBAR_HEIGHT)
  const onClickNavi = (url: string): void => {
    navigation(url)
  }
  useEffect(() => {
    init()
  }, [])

  const init = async (): Promise<void> => {
    // ファイルの読み込み
    const response = await fetch('/question.json')
    const data = await response.json()

    // データの利用
    console.log(data)
  }

  const setMenuHeight = (height: number): void => {
    setMenuBarHeight(height)
  }

  return (
    <Box css={MAIN_CSS}>
      <MenuBar firstHeight={MENUBAR_HEIGHT} setMenuHeight={setMenuHeight} />
      <Box
        css={MAIN_AREA_CSS}
        style={{
          height: `calc(100% - ${menuBarHeight + 20}px)`,
          marginTop: `${menuBarHeight}px`,
        }}
      >
        <Button
          css={BUTTON_CSS}
          onClick={() => {
            navigation('/myprof')
          }}
        >
          プロフィールを入力する
        </Button>
      </Box>
    </Box>
  )
}

export default Home
