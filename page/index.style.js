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

// Aeussere Kanten (24px Rand) wurden auf dem echten Geraet rechts
// abgeschnitten - HEX/BIN, Buttons und Presets-Leiste liefen bis auf
// 24px an den physischen Rand heran, das reicht auf diesem Screen
// nicht (die anderen Projekte nutzen durchgehend 30px Rand). Zwei-
// Spalten-Layout mit 30px Aussenrand und 16px Luecke neu durchgerechnet:
// 432 - 2*30 = 372 nutzbare Breite, zwei Spalten je (372-16)/2 = 178.
const M = 30
const GAP = 16
const COL_W = (DEVICE_WIDTH - M * 2 - GAP) / 2
const COL2_X = M + COL_W + GAP

export const HEX_STYLE = {
  x: M,
  y: px(195),
  w: COL_W,
  h: px(30),
  color: COLOR.cyan,
  text_size: px(18),
  align_h: ui.align.LEFT,
  text: 'HEX: 0x18',
}

export const BIN_STYLE = {
  x: COL2_X,
  y: px(195),
  w: COL_W,
  h: px(30),
  color: COLOR.cyan,
  text_size: px(18),
  align_h: ui.align.RIGHT,
  text: 'BIN: 00011000',
}

export const MASK_STYLE = {
  x: M,
  y: px(235),
  w: DEVICE_WIDTH - M * 2,
  h: px(30),
  color: COLOR.amber,
  text_size: px(20),
  align_h: ui.align.CENTER_H,
  text: 'Netmask: 255.255.255.0',
}

export const HOSTS_STYLE = {
  x: M,
  y: px(270),
  w: DEVICE_WIDTH - M * 2,
  h: px(30),
  color: COLOR.white,
  text_size: px(20),
  align_h: ui.align.CENTER_H,
  text: 'Hosts: 254',
}

export const BTN_MINUS_STYLE = {
  x: M,
  y: px(325),
  w: COL_W,
  h: 65,
  radius: 20,
  normal_color: COLOR.btnIdle,
  press_color: COLOR.btnPress,
  color: COLOR.white,
  text_size: 21,
  text: '- 1 (CIDR)',
}

export const BTN_PLUS_STYLE = {
  x: COL2_X,
  y: px(325),
  w: COL_W,
  h: 65,
  radius: 20,
  normal_color: COLOR.btnIdle,
  press_color: COLOR.btnPress,
  color: COLOR.white,
  text_size: 21,
  text: '+ 1 (CIDR)',
}

export const BTN_QUICK_STYLE = {
  x: M,
  y: px(410),
  w: DEVICE_WIDTH - M * 2,
  h: 60,
  radius: 20,
  normal_color: COLOR.btnQuiet,
  press_color: COLOR.btnQuietPress,
  color: COLOR.btnQuietText,
  text_size: 18,
  text: 'Presets: /16 | /24 | /28 | /30',
}
