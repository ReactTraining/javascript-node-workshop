const fs = require('fs')
const path = require('path')
const sqlite3 = require('sqlite3')

const dbPath = path.resolve(process.cwd(), 'database.db')
// const dbPath = path.resolve(__dirname, 'database.db')
try {
  fs.unlinkSync(dbPath)
} catch {
  // noop
}

function createDB(sql) {
  const db = new sqlite3.Database(dbPath, (err) => {
    if (err) console.log(err.message)

    // Create a sample table to ensure the database file is actually created
    db.run(
      'CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY, name TEXT, email TEXT, password TEXT)',
      (err) => {
        if (err) console.error('Error creating table:', err.message)
        db.run(sql, (err) => {
          if (err) {
            console.log(err.message)
          } else {
            console.log('Database created: Table: `user`')
          }
        })
      }
    )
  })
}

createDB(`
  INSERT INTO user (name, email, password) VALUES
      ('Michael Jackson', 'hello@reacttraining.com', 'abc123'),
      ('Ryan Florence', 'fake@reacttraining.com', ''),
      ('Brad Westfall', 'fake@reacttraining.com', ''),
      ('Cassidy Williams', 'fake@reacttraining.com', ''),
      ('Chance Strickland', 'fake@reacttraining.com', '');
`)
