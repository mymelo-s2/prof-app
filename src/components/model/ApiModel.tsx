import axios from 'axios'

export interface ILogin {
  user_name: string
  password: string
}

namespace CallBackFunction {}

/**
 * ログイン情報検索結果取得要求
 * @param param ログイン情報
 * @returns
 */
export const getLoginResponse = (param: ILogin): number => {
  //   axios.post(`/getLoginInfo`, { param }).then((res) => {
  //     const result = res.data
  //   })
  return 0
}

/**
 * ログイン情報追加要求
 * @param param
 * @returns
 */
export const postCreateAccountResponse = (param: ILogin): number => {
  //   axios.post(`/createAccount`, { param }).then((res) => {
  //     console.log(res)
  //     console.log(res.data)
  //   })
  return 0
}
