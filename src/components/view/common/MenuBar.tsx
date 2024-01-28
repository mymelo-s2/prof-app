/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Box, Grid, Button, Menu, MenuItem } from '@mui/material'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp'

const MAIN_WIDTH = 420
export const MENUBAR_HEIGHT = 40
export const CLOSE_MENUBAR_HEIGHT = 10

const MAIN_CSS = css`
  min-width: 600px;
  min-height: ${MENUBAR_HEIGHT}px;
  width: 100vw;
  height: ${MENUBAR_HEIGHT}px;
  background-color: pink;
  display: flex;
  position: absolute;
`

const CLOSE_MAIN_CSS = css`
  min-width: 600px;
  width: 100vw;
  height: ${CLOSE_MENUBAR_HEIGHT}px;
  position: absolute;
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
  height: ${MENUBAR_HEIGHT}px;
  color: white;
  background-color: pink;
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

const CTRL_BUTTON_CSS = css`
  width: 100px;
  height: ${MENUBAR_HEIGHT}px;
`

const SVG_CSS = css`
  color: white;
`

interface Props {
  setMenuHeight: (height: number) => void
  firstHeight: number
}

const MenuBar = (props: Props) => {
  const navigation = useNavigate()
  const [anchorEl1, setAnchorEl1] = useState<HTMLElement | null>(null)
  const [anchorEl2, setAnchorEl2] = useState<HTMLElement | null>(null)
  const [menuBarHeight, setMenuBarHeight] = useState(props.firstHeight)

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
    <>
      {menuBarHeight === MENUBAR_HEIGHT ? (
        <>
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
            <Box style={{ margin: '0 0 0 auto' }}>
              <Button
                css={CTRL_BUTTON_CSS}
                onClick={() => {
                  setMenuBarHeight(CLOSE_MENUBAR_HEIGHT)
                  props.setMenuHeight(CLOSE_MENUBAR_HEIGHT)
                }}
              >
                <KeyboardDoubleArrowUpIcon css={SVG_CSS} />
              </Button>
            </Box>
          </Box>
        </>
      ) : (
        <Box css={CLOSE_MAIN_CSS}>
          <Box
            style={{
              margin: '0 0 0 auto',
              textAlign: 'right',
            }}
          >
            <Button
              css={CTRL_BUTTON_CSS}
              style={{
                height: `${CLOSE_MENUBAR_HEIGHT}px`,
                minHeight: `${CLOSE_MENUBAR_HEIGHT}px`,
              }}
              onClick={() => {
                setMenuBarHeight(MENUBAR_HEIGHT)
                props.setMenuHeight(MENUBAR_HEIGHT)
              }}
            >
              <KeyboardDoubleArrowDownIcon
                css={SVG_CSS}
                style={{ color: 'pink' }}
              />
            </Button>
          </Box>
        </Box>
      )}
    </>
  )
}

export default MenuBar
