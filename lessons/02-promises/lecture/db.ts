import path from 'path'
import sqlite3 from 'sqlite3'

const db = new sqlite3.Database(path.resolve(process.cwd(), 'database.db'))

export function query(sql: string) {
  return new Promise((resolve, reject) => {
    db.all(sql, (err, rows) => {
      if (err) {
        reject(err.message)
      } else {
        resolve(rows || [])
      }
    })
  })
}

// query('SELECT * FROM user').then(results => {})
