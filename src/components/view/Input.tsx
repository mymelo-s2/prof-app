/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useState, useEffect } from 'react'
import { Box, Grid, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import MenuBar, { MENUBAR_HEIGHT, CLOSE_MENUBAR_HEIGHT } from './common/MenuBar'

export const ROW_HEIGHT = 18
const TITLE_FONT_SIZE = 14
const LABEL_FONT_SIZE = 12

const MAIN_CSS = css`
  width: 100vw;
  height: 100vh;
  position: absolute;
`

const MAIN_AREA_CSS = css`
  width: calc(100% - 20px);
  height: calc(100% - ${CLOSE_MENUBAR_HEIGHT + 20}px);
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

const PROF_MAIN_CSS = css`
  width: calc(100% - 28px);
  height: 140px;
  padding: 10px;
  border: 4px solid pink;
  border-radius: 10px;
`

const LABEL_CSS = css`
  height: ${ROW_HEIGHT}px;
  display: flex;
  align-item: ${ROW_HEIGHT}px;
`

const PROF_MAIN_CSS2 = css`
  width: calc(100% - ${TITLE_FONT_SIZE}px);
  padding-left: ${TITLE_FONT_SIZE}px;
`

const SPAN_CSS = css`
  background-color: white;
`

const Input = (): JSX.Element => {
  const navigation = useNavigate()
  const [menuBarHeight, setMenuBarHeight] = useState(CLOSE_MENUBAR_HEIGHT)
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
      <MenuBar
        firstHeight={CLOSE_MENUBAR_HEIGHT}
        setMenuHeight={setMenuHeight}
      />
      <Box
        css={MAIN_AREA_CSS}
        style={{
          height: `calc(100% - ${menuBarHeight + 30}px)`,
          marginTop: `${menuBarHeight + 10}px`,
        }}
      >
        <Box css={PROF_MAIN_CSS}>
          <Grid css={LABEL_CSS}>
            <span css={SPAN_CSS} style={{ fontSize: `${TITLE_FONT_SIZE}px` }}>
              プロフィール
            </span>
          </Grid>
          <Box css={PROF_MAIN_CSS2}></Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Input
