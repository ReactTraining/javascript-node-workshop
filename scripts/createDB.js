const fs = require('fs')
const path = require('path')
const sqlite3 = require('sqlite3')

const dbPath = path.resolve(__dirname, 'database.db')
try {
  fs.unlinkSync(dbPath)
} catch {
  // noop
}

function createDB(sql) {
  const db = new sqlite3.Database(dbPath, (err) => {
    if (err) console.log(err.message)

    // Create a sample table to ensure the database file is actually created
    db.run('CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY, name TEXT)', (err) => {
      if (err) console.error('Error creating table:', err.message)
      db.run(sql, (err) => {
        if (err) console.log(err.message)
        console.log('DONE')
      })
    })
  })
}

createDB(`
  INSERT INTO user (name) VALUES
      ('Michael Jackson'),
      ('Ryan Florence'),
      ('Brad Westfall'),
      ('Cassidy Williams'),
      ('Chance Strickland');
`)
