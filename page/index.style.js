import { px } from '@zos/utils'
import ui from '@zos/ui'

// Feste PikeW-Aufloesung statt getDeviceInfo() - keine zusaetzliche
// Permission noetig, App zielt ohnehin nur auf dieses eine Geraet.
export const DEVICE_WIDTH = 432
export const DEVICE_HEIGHT = 514

export const COLOR = {
  dim: 0x888888,
  green: 0x00ff66,
  cyan: 0x00e5ff,
  amber: 0xffb300,
  white: 0xffffff,
  btnIdle: 0x1e293b,
  btnPress: 0x334155,
  btnQuiet: 0x0f172a,
  btnQuietPress: 0x1e293b,
  btnQuietText: 0x94a3b8,
}

export const TITLE_STYLE = {
  x: 0,
  y: px(85),
  w: DEVICE_WIDTH,
  h: px(30),
  color: COLOR.dim,
  text_size: px(20),
  align_h: ui.align.CENTER_H,
  text: 'DEVCALC / SUBNET',
}

export const VAL_STYLE = {
  x: 0,
  y: px(120),
  w: DEVICE_WIDTH,
  h: px(65),
  color: COLOR.green,
  text_size: px(52),
  align_h: ui.align.CENTER_H,
  align_v: ui.align.CENTER_V,
  text: '/24',
}

export const HEX_STYLE = {
  x: 24,
  y: px(195),
  w: 185,
  h: px(30),
  color: COLOR.cyan,
  text_size: px(20),
  align_h: ui.align.LEFT,
  text: 'HEX: 0x18',
}

export const BIN_STYLE = {
  x: 215,
  y: px(195),
  w: 193,
  h: px(30),
  color: COLOR.cyan,
  text_size: px(20),
  align_h: ui.align.RIGHT,
  text: 'BIN: 00011000',
}

export const MASK_STYLE = {
  x: 24,
  y: px(235),
  w: 384,
  h: px(30),
  color: COLOR.amber,
  text_size: px(20),
  align_h: ui.align.CENTER_H,
  text: 'Netmask: 255.255.255.0',
}

export const HOSTS_STYLE = {
  x: 24,
  y: px(270),
  w: 384,
  h: px(30),
  color: COLOR.white,
  text_size: px(20),
  align_h: ui.align.CENTER_H,
  text: 'Hosts: 254',
}

export const BTN_MINUS_STYLE = {
  x: 24,
  y: px(325),
  w: 185,
  h: 65,
  radius: 20,
  normal_color: COLOR.btnIdle,
  press_color: COLOR.btnPress,
  color: COLOR.white,
  text_size: 21,
  text: '- 1 (CIDR)',
}

export const BTN_PLUS_STYLE = {
  x: 223,
  y: px(325),
  w: 185,
  h: 65,
  radius: 20,
  normal_color: COLOR.btnIdle,
  press_color: COLOR.btnPress,
  color: COLOR.white,
  text_size: 21,
  text: '+ 1 (CIDR)',
}

export const BTN_QUICK_STYLE = {
  x: 24,
  y: px(410),
  w: 384,
  h: 60,
  radius: 20,
  normal_color: COLOR.btnQuiet,
  press_color: COLOR.btnQuietPress,
  color: COLOR.btnQuietText,
  text_size: 18,
  text: 'Presets: /16 | /24 | /28 | /30',
}
