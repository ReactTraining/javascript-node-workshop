import { promises as fsPromises } from 'fs' // the esm version
import * as esbuild from 'esbuild'
import { watch } from 'chokidar'

async function build() {
  await esbuild.build({
    entryPoints: ['app/index.js'],
    bundle: true,
    outdir: 'build',
    minify: true,
    sourcemap: true,
    splitting: true,
    format: 'esm',
  })

  await fsPromises.copyFile('app/index.html', 'build/index.html')
  await fsPromises.copyFile('app/favicon.ico', 'build/favicon.ico')
}

build()

const watcher = watch(['app/**/*'])
console.log('Watching app')
watcher.on('change', () => {
  console.log('Rebuilding...')
  build()
})
