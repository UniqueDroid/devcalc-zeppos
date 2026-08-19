# Dev & Subnet Calc

A programmer's + subnet calculator for the **Amazfit Bip Max** (Zepp OS, device code `PikeW`, square display). Adjust a CIDR prefix (1-32) and see its hex/binary representation, netmask, and usable host count.

## Status (19.08.2026)

First build compiles clean. Not yet installed on a real device.

## About the source

Same pattern as the other Zepp OS projects in this batch: Jan's boilerplate assumed `@zeppos/ui`/`@zeppos/sensor` and a raw-number `Vibrator.setMode(1)` - corrected to `@zos/*` and `start({ mode: VIBRATOR_SCENE_SHORT_LIGHT })`. Built directly on the `@zeppos/zml` BasePage architecture (separate `index.style.js`/`index.layout.js`/`index.page.js`) rather than the raw `Page()`/`hmUI.createWidget()` API, per the pattern that resolved a centering issue in [Bio Pomodoro](https://github.com/UniqueDroid/biofeedback-pomodoro-zeppos).

Also simplified the CIDR value display from `/24 (DEC: 24)` (both halves showed the same number) to just `/24`.

The subnet math was verified by hand: `cidrToNetmask()` correctly produces e.g. `255.255.255.240` for /28, host counts are `2^(32-prefix) - 2` with the standard /31 (2 usable) and /32 (1) edge cases.

## Project structure

```
app.json                # Target "PikeW" (Amazfit Bip Max)
app.js                   # App lifecycle (@zeppos/zml BaseApp)
page/
  index.style.js           # Colors, widget position/size constants
  index.layout.js            # Widget creation + update methods
  index.page.js                 # CIDR math, button handlers
assets/logo.svg                  # Icon source (circular, per Zepp's store icon spec)
```

## Building

```
npm install
zeus build
```

Sideload-testing via a `zpkd1://` QR code works the same way as the other projects in this batch.

## Not implemented yet

- Real-device verification.
- App Store submission (placeholder `appId` 1005511, not yet registered on console.zepp.com).
