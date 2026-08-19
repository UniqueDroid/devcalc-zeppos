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

// HEX/BIN nebeneinander in schmalen Spalten wurde am rechten Rand
// abgeschnitten, selbst mit 30px Aussenrand - "BIN: 00011101" ist zu
// lang fuer eine 178px-Spalte. Jetzt beide untereinander auf voller
// Breite (wie Netmask/Hosts, die nie ein Problem waren), das erspart
// jede Spaltenbreiten-Rechnerei. Ausserdem der gesamte Block enger
// gepackt und weiter nach oben gezogen - vorher lief die unterste
// Reihe (Presets) fast an den unteren Bildschirmrand und war nur mit
// Scrollen sichtbar.
const M = 30
const GAP = 12
const COL_W = (DEVICE_WIDTH - M * 2 - GAP) / 2
const COL2_X = M + COL_W + GAP
const FULL_W = DEVICE_WIDTH - M * 2

export const TITLE_STYLE = {
  x: 0,
  y: px(60),
  w: DEVICE_WIDTH,
  h: px(28),
  color: COLOR.dim,
  text_size: px(20),
  align_h: ui.align.CENTER_H,
  text: 'DEVCALC / SUBNET',
}

export const VAL_STYLE = {
  x: 0,
  y: px(94),
  w: DEVICE_WIDTH,
  h: px(60),
  color: COLOR.green,
  text_size: px(52),
  align_h: ui.align.CENTER_H,
  align_v: ui.align.CENTER_V,
  text: '/24',
}

export const HEX_STYLE = {
  x: M,
  y: px(162),
  w: FULL_W,
  h: px(28),
  color: COLOR.cyan,
  text_size: px(20),
  align_h: ui.align.CENTER_H,
  text: 'HEX: 0x18',
}

export const BIN_STYLE = {
  x: M,
  y: px(194),
  w: FULL_W,
  h: px(28),
  color: COLOR.cyan,
  text_size: px(20),
  align_h: ui.align.CENTER_H,
  text: 'BIN: 00011000',
}

export const MASK_STYLE = {
  x: M,
  y: px(230),
  w: FULL_W,
  h: px(28),
  color: COLOR.amber,
  text_size: px(20),
  align_h: ui.align.CENTER_H,
  text: 'Netmask: 255.255.255.0',
}

export const HOSTS_STYLE = {
  x: M,
  y: px(262),
  w: FULL_W,
  h: px(28),
  color: COLOR.white,
  text_size: px(20),
  align_h: ui.align.CENTER_H,
  text: 'Hosts: 254',
}

export const BTN_MINUS_STYLE = {
  x: M,
  y: 310,
  w: COL_W,
  h: 60,
  radius: 20,
  normal_color: COLOR.btnIdle,
  press_color: COLOR.btnPress,
  color: COLOR.white,
  text_size: 20,
  text: '- 1 (CIDR)',
}

export const BTN_PLUS_STYLE = {
  x: COL2_X,
  y: 310,
  w: COL_W,
  h: 60,
  radius: 20,
  normal_color: COLOR.btnIdle,
  press_color: COLOR.btnPress,
  color: COLOR.white,
  text_size: 20,
  text: '+ 1 (CIDR)',
}

export const BTN_QUICK_STYLE = {
  x: M,
  y: 384,
  w: FULL_W,
  h: 55,
  radius: 20,
  normal_color: COLOR.btnQuiet,
  press_color: COLOR.btnQuietPress,
  color: COLOR.btnQuietText,
  text_size: 17,
  text: 'Presets: /16 | /24 | /28 | /30',
}
