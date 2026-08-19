import ui from '@zos/ui'
import {
  TITLE_STYLE,
  VAL_STYLE,
  HEX_STYLE,
  BIN_STYLE,
  MASK_STYLE,
  HOSTS_STYLE,
  BTN_MINUS_STYLE,
  BTN_PLUS_STYLE,
  BTN_QUICK_STYLE,
} from './index.style'

export const layout = {
  refs: {},

  render(vm) {
    ui.createWidget(ui.widget.TEXT, { ...TITLE_STYLE })
    this.refs.val = ui.createWidget(ui.widget.TEXT, { ...VAL_STYLE })
    this.refs.hex = ui.createWidget(ui.widget.TEXT, { ...HEX_STYLE })
    this.refs.bin = ui.createWidget(ui.widget.TEXT, { ...BIN_STYLE })
    this.refs.mask = ui.createWidget(ui.widget.TEXT, { ...MASK_STYLE })
    this.refs.hosts = ui.createWidget(ui.widget.TEXT, { ...HOSTS_STYLE })

    ui.createWidget(ui.widget.BUTTON, {
      ...BTN_MINUS_STYLE,
      click_func: () => vm.adjustVal(-1),
    })
    ui.createWidget(ui.widget.BUTTON, {
      ...BTN_PLUS_STYLE,
      click_func: () => vm.adjustVal(1),
    })
    ui.createWidget(ui.widget.BUTTON, {
      ...BTN_QUICK_STYLE,
      click_func: () => vm.cyclePresets(),
    })
  },

  update({ val, hex, bin, mask, hosts }) {
    this.refs.val.setProperty(ui.prop.TEXT, val)
    this.refs.hex.setProperty(ui.prop.TEXT, hex)
    this.refs.bin.setProperty(ui.prop.TEXT, bin)
    this.refs.mask.setProperty(ui.prop.TEXT, mask)
    this.refs.hosts.setProperty(ui.prop.TEXT, hosts)
  },
}
