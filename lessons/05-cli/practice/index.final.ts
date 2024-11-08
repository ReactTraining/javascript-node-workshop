import fs from 'fs'
import path from 'path'
import readlineSync from 'readline-sync'

const BACK = '<-- Back'
let selectedLesson = ''
let lessonType = ''
let lessonFiles: string[] = []

const lessonsPath = path.resolve(__dirname, '..', '..')
const lessonFolders = fs.readdirSync(lessonsPath).filter((item) => {
  return fs.lstatSync(path.resolve(lessonsPath, item)).isDirectory()
})

let menuOptions = lessonFolders
let choice = readlineSync.keyInSelect(menuOptions)
if (choice === -1) {
  process.exit(0)
}

selectedLesson = lessonFolders[choice]

const selectedLessonPath = path.resolve(lessonsPath, selectedLesson)
const lessonTypeFolders = fs.readdirSync(selectedLessonPath).filter((item) => {
  return fs.lstatSync(path.resolve(selectedLessonPath, item)).isDirectory()
})

console.log('.....', lessonTypeFolders)

// menuOptions = [...lessonTypeFolders, BACK]
// choice = readlineSync.keyInSelect(menuOptions)
// if (choice === -1) {
//   process.exit(0)
// } else if (menuOptions[choice] === BACK) {
//   selectedLesson = ''
// } else if (menuOptions[choice]) {
//   lessonType = menuOptions[choice]
// }

// const lessonFilesPath = path.resolve(selectedLessonPath, lessonType)
// lessonFiles = fs.readdirSync(lessonFilesPath)

// console.log(lessonFiles)
