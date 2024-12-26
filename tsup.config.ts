import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['src/index.ts'], // Usando um array para especificar a entrada
    format: ['cjs', 'esm'],
    dts: true,
    clean: true
  },
  {
    entry: ['src/cli/index.ts'], // Usando um array para especificar a entrada
    format: ['cjs'],
    outDir: 'dist/cli',
    banner: {
      js: '#!/usr/bin/env node'
    }
  }
])