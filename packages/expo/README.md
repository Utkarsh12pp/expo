<!-- Title -->

<p align="center">
  <a href="https://expo.dev/">
    <img alt="Expo" height="128" src="../../.github/resources/banner.png">
  </a>
</p>

<p align="center">The easiest way to build universal native apps with React — one install for iOS, Android, and the web.</p>

<p align="center">
  <a aria-label="expo documentation" href="https://docs.expo.dev">📚 Read the Documentation</a>
  &ensp;•&ensp;
  <a aria-label="expo api reference" href="https://docs.expo.dev/versions/latest/sdk/expo/">📖 API Reference</a>
  &ensp;•&ensp;
  <a aria-label="contribute to expo" href="#contributing">👏 Contribute</a>
</p>

<p align="center">
  <a aria-label="npm version" href="https://www.npmjs.com/package/expo" target="_blank">
    <img alt="npm version" src="https://img.shields.io/npm/v/expo.svg?style=for-the-badge&label=npm&labelColor=000000&color=4630EB" />
  </a>
  <a aria-label="npm downloads" href="https://www.npmtrends.com/expo" target="_blank">
    <img alt="downloads" src="https://img.shields.io/npm/dm/expo.svg?style=for-the-badge&labelColor=000000&color=33CC12&label=downloads" />
  </a>
  <a aria-label="License: MIT" href="https://github.com/expo/expo/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-success.svg?style=for-the-badge&labelColor=000000&color=33CC12" />
  </a>
  <a aria-label="Join the Expo Discord" href="https://chat.expo.dev" target="_blank">
    <img alt="Discord" src="https://img.shields.io/discord/695411232856997968.svg?style=for-the-badge&color=5865F2&logo=discord&logoColor=FFFFFF" />
  </a>
</p>

<p align="center">
  <a aria-label="Follow @expo on X" href="https://x.com/intent/follow?screen_name=expo" target="_blank">
    <img alt="Expo on X" src="https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white" target="_blank" />
  </a>&nbsp;
  <a aria-label="Follow @expo on GitHub" href="https://github.com/expo" target="_blank">
    <img alt="Expo on GitHub" src="https://img.shields.io/badge/GitHub-222222?style=for-the-badge&logo=github&logoColor=white" target="_blank" />
  </a>&nbsp;
  <a aria-label="Follow @expo on Reddit" href="https://www.reddit.com/r/expo/" target="_blank">
    <img alt="Expo on Reddit" src="https://img.shields.io/badge/Reddit-FF4500?style=for-the-badge&logo=reddit&logoColor=white" target="_blank" />
  </a>&nbsp;
  <a aria-label="Follow @expo on Bluesky" href="https://bsky.app/profile/expo.dev" target="_blank">
    <img alt="Expo on Bluesky" src="https://img.shields.io/badge/Bluesky-1DA1F2?style=for-the-badge&logo=bluesky&logoColor=white" target="_blank" />
  </a>&nbsp;
  <a aria-label="Follow @expo on LinkedIn" href="https://www.linkedin.com/company/expo-dev" target="_blank">
    <img alt="Expo on LinkedIn" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=LinkedIn&logoColor=white" target="_blank" />
  </a>

  <p align="center">⭐️ Be sure to star the Expo GitHub repo if you enjoy using the project! ⭐️</p>
</p>

---

The `expo` package is the single dependency you install in any React Native app to start using the Expo SDK and Modules API. It bundles the core infrastructure, a curated set of essential modules, and the Expo CLI behind one consistent interface — so the same project runs on iOS, Android, and the web from a single codebase.

## Quick start

Create a new app and start the dev server:

```
npx create-expo-app@latest my-app
cd my-app
npx expo start
```

Already have a React Native app? Add Expo modules to it:

```
npx install-expo-modules@latest
```

Then install any Expo SDK module with `npx expo install`:

```
npx expo install expo-camera expo-router
```

> ⭐️ Be sure to star the Expo GitHub repo if you enjoy using the project!

## What you get

The `expo` package wires together four things so you don't have to:

- **Core infrastructure** — [`expo-modules-core`](https://github.com/expo/expo/tree/main/packages/expo-modules-core) and [`expo-modules-autolinking`](https://github.com/expo/expo/tree/main/packages/expo-modules-autolinking), the foundation every Expo (and third-party) module is built on. Modules are linked into iOS and Android projects automatically.
- **Essential modules** — a minimal set of libraries nearly every app needs, such as [`expo-asset`](https://github.com/expo/expo/tree/main/packages/expo-asset).
- **The Expo CLI** — [`@expo/cli`](https://github.com/expo/expo/blob/main/packages/%40expo/cli/README.md) wraps Metro and the native toolchain (Xcode, Simulator.app, Android Studio, ADB, …) behind one interface. Generate native projects with `npx expo prebuild`, and keep your dependency versions aligned with `npx expo install`.
- **Runtime glue** — a JavaScript entry point that wires up your app at startup: registering the root component, loading fonts with `expo-font`, and enabling Expo Go support when applicable.

## Usage

```ts
import { registerRootComponent } from 'expo';
import App from './App';

registerRootComponent(App);
```

From there, reach for any module in the [Expo SDK](https://docs.expo.dev/versions/latest/) — camera, notifications, file system, sensors, and many more — and install it with `npx expo install`.

## Learn more

- [Expo documentation](https://docs.expo.dev) — guides, tutorials, and the full SDK reference.
- [Expo Router](https://docs.expo.dev/router/introduction/) — file-based routing for universal apps.
- [EAS](https://expo.dev/eas) — hosted build, submit, and update services for Expo apps.
- [Snack](https://snack.expo.dev) — try Expo right in your browser, no install needed.
- [Discord & Forums](https://chat.expo.dev) — ask questions and chat with the community.

## Contributing

This is one of the most-installed packages in the Expo ecosystem — every bit of polish helps. Bug reports, fixes, and improvements are very welcome.

See [CONTRIBUTING](./CONTRIBUTING.md) for how to set up the package locally and submit a change, and the repo-wide [contributing guide](https://github.com/expo/expo/blob/main/CONTRIBUTING.md) for general guidelines.
