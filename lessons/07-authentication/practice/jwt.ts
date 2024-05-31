import express from 'express'
import jwt from 'jsonwebtoken'
import Cookies from 'cookies'

const tokenSecret = 'super-secret-make-this-really-long'
const cookieName = 'reactTrainingJWTToken'

export function jwtStartSession(userId: number, req: express.Request, res: express.Response) {
  const payload = {
    userId,
    exp: Math.floor(Date.now() / 1000) + 10, // 10 seconds
  }
  return new Promise((resolve, reject) => {
    jwt.sign(payload, tokenSecret, (error, token) => {
      if (error) return reject(error)
      new Cookies(req, res).set(cookieName, token, {
        overwrite: true,
      })
      resolve(token)
    })
  })
}

export function jwtVerify(req: express.Request, res: express.Response): Promise<number | false> {
  return new Promise((resolve, reject) => {
    const token = new Cookies(req, res).get(cookieName) || ''
    if (!token) reject(false)
    jwt.verify(token, tokenSecret, (error, payload) => {
      if (error || !payload) return reject(false)
      // the type definitions for jwt are not good so we have to do this
      // hack to tell TS that the payload is this shape
      resolve((payload as { userId: number }).userId)

      // In JS, it would just be
      // resolve(payload.userId)
    })
  })
}

export function jwtLogout(req: express.Request, res: express.Response): void {
  new Cookies(req, res).set(cookieName, null, {
    maxAge: 0,
  })
}
