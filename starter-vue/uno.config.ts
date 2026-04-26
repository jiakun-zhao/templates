import type { PresetWind3Theme } from 'unocss'
import { defineConfig, presetAttributify, presetIcons, presetWind3 } from 'unocss'

export default defineConfig<PresetWind3Theme>({
  presets: [
    presetWind3({ dark: 'media' }),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      extraProperties: { display: 'inline-block', 'vertical-align': 'bottom' },
    }),
  ],
})
