import { fileURLToPath } from 'node:url'
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: 'src/index.ts',
  alias: {
    '~': fileURLToPath(new URL('./src', import.meta.url)),
  },
})
