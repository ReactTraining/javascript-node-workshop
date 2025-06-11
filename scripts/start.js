const major = process.versions.node.split('.')[0]
const MIN_VERSION = 20

try {
  if (Number(major) >= MIN_VERSION) {
    console.log("Everything is ready. You're all set for the workshop.\n\n")
  } else {
    console.log(
      `You are using Node version ${process.versions.node}. Please update to ${MIN_VERSION}. If you are using NVM, do: nvm install ${MIN_VERSION}`
    )
    console.log(`You can always check your node version with: node --version\n`)
  }
} catch (e) {
  console.log(
    'Something unexpected is happening in the curriculum. We can chat about it during the workshop.'
  )
}
