import md5 from 'md5'
import marvelApi from './config/config'

export const getApiParams = () => {
  const { publicKey, privateKey } = marvelApi
  const ts = parseInt(Date.now() / 1000, 10)
  const hash = md5(ts + privateKey + publicKey)

  return {
    apikey: publicKey,
    hash,
    ts,
  }
}

export default getApiParams
