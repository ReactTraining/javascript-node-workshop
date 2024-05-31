const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')

// Define the main directory
const mainDir = './examples'

// Read the main directory
fs.readdir(mainDir, (err, files) => {
  if (err) {
    return console.error(`Unable to scan directory: ${err}`)
  }

  // Iterate through each file/folder in the main directory
  files.forEach((file) => {
    const fullPath = path.join(mainDir, file)

    // Check if the file is a directory
    if (fs.statSync(fullPath).isDirectory()) {
      const packageJsonPath = path.join(fullPath, 'package.json')

      // Check if package.json exists in the directory
      if (fs.existsSync(packageJsonPath)) {
        console.log(`Running npm install in ${fullPath}`)

        // Execute npm install in the directory
        exec('npm install', { cwd: fullPath }, (error, stdout, stderr) => {
          if (error) {
            console.error(`Error installing dependencies in ${fullPath}: ${error}`)
            return
          }

          console.log(`npm install completed in ${fullPath}`)
          console.log(stdout)
          if (stderr) {
            console.error(stderr)
          }
        })
      }
    }
  })
})
