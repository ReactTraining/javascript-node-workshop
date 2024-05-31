import { promises as fsPromises } from 'fs' // the esm version
import * as esbuild from 'esbuild'
import { watch } from 'chokidar'

async function build() {
  await esbuild.build({
    entryPoints: ['app/index.js'],
    bundle: true,
    outfile: 'build/build.js',
    minify: true,
    sourcemap: true,
  })

  await fsPromises.copyFile('app/index.html', 'build/index.html')
}
build()

const watcher = watch(['app/**/*'])
console.log('Watching app')
watcher.on('change', () => {
  console.log('Rebuilding...')
  build()
})
