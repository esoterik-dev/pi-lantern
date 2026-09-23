# pi-lantern

Standalone Pi package combining a maintained Zentui statusline and responsive sidebar. It owns one footer and one sidebar; don't load `pi-zentui` or `pi-sidebar-tui` alongside it.

## Install

```sh
pi install git:github.com/esoterik-dev/pi-lantern@v0.1.0
```

For local development, install this directory or load `index.ts` directly.

## Dependencies and integrations

Only Pi runtime modules are peers: `pi-ai`, `pi-coding-agent`, and `pi-tui`. No runtime dependency on `pi-zentui`, `pi-sidebar-tui`, `pi-warm-cache`, or `timestamp-pi`; Zentui and Sidebar source live in this package.

`pi-warm-cache` is optional. Lantern displays its `ctx.ui.setStatus("pi-warm-cache", ...)` text in the sidebar when available. The sidebar's cache countdown is calculated from assistant cache-read/write usage; it doesn't import or require `timestamp-pi`. Both extensions' statuses remain available to the footer when the sidebar is hidden.

## Upstream source

Maintained copies are based on [`pi-zentui`](https://github.com/lmilojevicc/pi-zentui) 0.25.0 and [`pi-sidebar-tui`](https://github.com/bi0h4z4rd88/pi-sidebar-tui) 1.7.4, with local integration and responsive-layout changes. Their MIT notices are included here.
