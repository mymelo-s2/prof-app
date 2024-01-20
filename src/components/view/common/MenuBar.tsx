/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Box, Grid, Button, Menu, MenuItem } from '@mui/material'

const MAIN_WIDTH = 420

const MAIN_CSS = css`
  min-width: 600px;
  min-height: 50px;
  width: 100vw;
  height: 50px;
  background-color: pink;
  display: flex;
`

const MAIN_AREA_CSS = css`
  width: ${MAIN_WIDTH}px;
  height: 230px;
  position: absolute;
  top: 50%;
  left: calc((100% - ${MAIN_WIDTH}px) / 2);
  transform: translateY(-50%);
`

const BUTTON_FLEX_CSS = css`
  width: 250px;
  height: 28px;
  margin: 0 auto;
  margin-bottom: 10px;
  display: flex;
`

const FLEX_CSS = css`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 10px;
  display: flex;
`

const BOX_AREA_CSS = css`
  width: calc(100% - 47px);
  height: calc(100% - 85px);
  padding: 20px;
  border-radius: 10px;
  border: 4px solid pink;
  color: black;
`

const INPUT_AREA_CSS = css`
  width: 100%;
  height: 118px;
`

const BUTTON_AREA_CSS = css`
  width: 200px;
  height: 28px;
  margin: 0 auto;
`

const BUTTON_CSS = css`
  width: 120px;
  height: 50px;
  color: white;
  background-color: pink;
`

const SVG_CSS = css`
  width: 20px;
  height: 20px;
`

const LABEL_CSS = css`
  width: 100px;
  font-size: 14px;
  margin-bottom: 7px;
`

const ITEM_CSS = css`
  width: 100%;
  font-size: 14px;
  margin-bottom: 7px;
`

const INPUT_CSS = css`
  width: calc(100% - 8px);
  height: 17px;
  border: none;
  border-bottom: 2px solid pink;
  outline: none;
  &:focus {
    border: none;
    border-bottom: 2px solid pink;
    outline: none;
  }
`

const MenuBar = () => {
  const navigation = useNavigate()
  const [anchorEl1, setAnchorEl1] = useState<HTMLElement | null>(null)
  const [anchorEl2, setAnchorEl2] = useState<HTMLElement | null>(null)

  const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl1(event.currentTarget)
  }

  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl2(event.currentTarget)
  }

  const handleClose1 = () => {
    setAnchorEl1(null)
  }

  const handleClose2 = () => {
    setAnchorEl2(null)
  }

  return (
    <Box css={MAIN_CSS}>
      <Box>
        <Button
          aria-controls="simple-menu1"
          aria-haspopup="true"
          onClick={handleClick1}
          css={BUTTON_CSS}
        >
          マイアカウント
        </Button>
        <Menu
          id="simple-menu1"
          anchorEl={anchorEl1}
          keepMounted
          open={Boolean(anchorEl1)}
          onClose={handleClose1}
        >
          <MenuItem onClick={handleClose1}>登録する</MenuItem>
          <MenuItem onClick={handleClose1}>編集する</MenuItem>
        </Menu>
      </Box>
      <Box>
        <Button
          aria-controls="simple-menu2"
          aria-haspopup="true"
          onClick={handleClick2}
          css={BUTTON_CSS}
        >
          フレンド
        </Button>
        <Menu
          id="simple-menu2"
          anchorEl={anchorEl2}
          keepMounted
          open={Boolean(anchorEl2)}
          onClose={handleClose2}
        >
          <MenuItem onClick={handleClose2}>検索する</MenuItem>
          <MenuItem onClick={handleClose2}>依頼する</MenuItem>
        </Menu>
      </Box>
    </Box>
  )
}

export default MenuBar
