import { build } from 'esbuild'
build({
  entryPoints: ['./src/index.js'], // archivo de entrada
  outdir: './dist', // carpeta de archivos empaquetados
  bundle: true, // empaquetar los archivos
  minify: true, // minificar los archivos
  sourcemap: true, // para hacer debugin
  watch: true, // pendiente de los cambios
  format: 'esm'
}).catch(() => process.exit(1))
