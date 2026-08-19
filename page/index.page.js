import { BasePage } from '@zeppos/zml/base-page'
import { layout } from './index.layout'
import { Vibrator, VIBRATOR_SCENE_SHORT_LIGHT } from '@zos/sensor'

// Boilerplate-Korrekturen gegen die echte Zepp OS API: @zeppos/ui/
// @zeppos/sensor existieren nicht (real: @zos/ui, @zos/sensor).
// Vibrator.setMode(1) nahm eine rohe Zahl an - die echte API braucht
// start({mode: VIBRATOR_SCENE_*}).

const PRESETS = [16, 24, 28, 29, 30, 32]

Page(
  BasePage({
    state: {
      vibrator: null,
      currentValue: 24,
    },

    build() {
      try {
        this.state.vibrator = new Vibrator()
      } catch (e) {
        // Vibration ist rein kosmetisch, kein Blocker
      }
      layout.render(this)
      this.updateCalculations()
    },

    adjustVal(step) {
      this.vibrate()
      let next = this.state.currentValue + step
      if (next < 1) next = 1
      if (next > 32) next = 32
      this.state.currentValue = next
      this.updateCalculations()
    },

    cyclePresets() {
      this.vibrate()
      const cur = this.state.currentValue
      const idx = PRESETS.indexOf(cur)
      this.state.currentValue = idx !== -1 && idx + 1 < PRESETS.length ? PRESETS[idx + 1] : PRESETS[0]
      this.updateCalculations()
    },

    updateCalculations() {
      const v = this.state.currentValue
      const hosts = v >= 31 ? (v === 32 ? 1 : 2) : Math.pow(2, 32 - v) - 2

      layout.update({
        val: `/${v}`,
        hex: `HEX: 0x${v.toString(16).toUpperCase().padStart(2, '0')}`,
        bin: `BIN: ${v.toString(2).padStart(8, '0')}`,
        mask: `Netmask: ${this.cidrToNetmask(v)}`,
        hosts: `Hosts: ${hosts.toLocaleString()}`,
      })
    },

    cidrToNetmask(prefix) {
      const octets = []
      for (let i = 0; i < 4; i++) {
        const n = Math.min(prefix, 8)
        octets.push(256 - Math.pow(2, 8 - n))
        prefix -= n
      }
      return octets.join('.')
    },

    vibrate() {
      if (!this.state.vibrator) return
      try {
        this.state.vibrator.start({ mode: VIBRATOR_SCENE_SHORT_LIGHT })
      } catch (e) {}
    },

    onDestroy() {
      if (this.state.vibrator) this.state.vibrator.stop()
    },
  }),
)
