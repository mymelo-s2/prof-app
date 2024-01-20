/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Box, Grid, Button } from '@mui/material'
import { getLoginResponse, postCreateAccountResponse } from '../model/ApiModel'

const MAIN_WIDTH = 420

const MAIN_CSS = css`
  min-width: 600px;
  min-height: 600px;
  width: 100vw;
  height: 100vh;
  position: relative;
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
  height: 28px;
  color: white;
  background-color: red;
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

const Login = () => {
  const navigation = useNavigate()
  // true: LOGIN, false: SIGN UP
  const [loginFlg, setLoginFlg] = useState(true)
  const [userName, setUserName] = useState('')
  const [password, setPassWord] = useState('')
  const [confirmPassWord, setConfirmPassWord] = useState('')

  /**
   * loginFlgのステータスを変更する
   * @param bool
   */
  const upDateLoginFlg = (bool: boolean): void => {
    setLoginFlg(bool)
  }

  /**
   * ログイン情報の取得、または、追加を行う
   */
  const onClickLogin = (): void => {
    if (loginFlg) {
      getLoginResponse({
        user_name: userName,
        password: password,
        onSuccessLogin,
        onRejected,
      })
    } else if (password.trim() === confirmPassWord.trim()) {
      postCreateAccountResponse({
        user_name: userName,
        password: password,
        onSuccessLogin,
        onRejected,
      })
    }
  }

  /**
   * ログイン成功時の処理
   * @param status
   */
  const onSuccessLogin = (status: number): void => {
    navigation('/home')
  }

  /**
   * ログイン失敗時の処理
   */
  const onRejected = (): void => {}

  return (
    <Box css={MAIN_CSS}>
      <Box css={MAIN_AREA_CSS}>
        <Box css={BUTTON_FLEX_CSS}>
          <Button
            css={BUTTON_CSS}
            style={{ marginRight: '10px' }}
            onClick={() => {
              upDateLoginFlg(true)
            }}
          >
            <FavoriteBorderIcon css={SVG_CSS} />
            LOGIN
            <FavoriteBorderIcon css={SVG_CSS} />
          </Button>
          <Button
            css={BUTTON_CSS}
            onClick={() => {
              upDateLoginFlg(false)
            }}
          >
            <FavoriteBorderIcon css={SVG_CSS} />
            SIGN UP
            <FavoriteBorderIcon css={SVG_CSS} />
          </Button>
        </Box>
        <Box css={BOX_AREA_CSS}>
          <Box css={INPUT_AREA_CSS}>
            <Box css={FLEX_CSS}>
              <Grid css={LABEL_CSS}>ユーザID</Grid>
              <Grid css={ITEM_CSS}>
                <input
                  type="text"
                  placeholder="ユーザID"
                  css={INPUT_CSS}
                  onChange={(e) => {
                    setUserName(e.target.value)
                  }}
                />
              </Grid>
            </Box>
            <Box css={FLEX_CSS}>
              <Grid css={LABEL_CSS}>パスワード</Grid>
              <Grid css={ITEM_CSS}>
                <input
                  type="password"
                  placeholder="パスワード"
                  css={INPUT_CSS}
                  onChange={(e) => {
                    setPassWord(e.target.value)
                  }}
                />
              </Grid>
            </Box>
            {!loginFlg && (
              <Box css={FLEX_CSS}>
                <Grid css={LABEL_CSS} />
                <Grid css={ITEM_CSS}>
                  <input
                    type="password"
                    placeholder="パスワード(確認)"
                    css={INPUT_CSS}
                    onChange={(e) => {
                      setConfirmPassWord(e.target.value)
                    }}
                  />
                </Grid>
              </Box>
            )}
          </Box>
          <Box css={BUTTON_AREA_CSS}>
            <Button
              css={BUTTON_CSS}
              style={{ width: '200px' }}
              onClick={() => {
                onClickLogin()
              }}
            >
              <FavoriteBorderIcon css={SVG_CSS} />
              {loginFlg ? 'LOGIN' : 'CREATE ACCOUNT'}
              <FavoriteBorderIcon css={SVG_CSS} />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Login
