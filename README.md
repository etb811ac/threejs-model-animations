<h1 align="center">🦊 Animated Model — Structured Three.js</h1>

<p align="center">An animated glTF Fox with switchable idle / walk / run clips, built on a clean, class-based Three.js architecture designed to scale beyond a single script file.</p>

<p align="center">
  <a href="https://threejs-model-animation-eacuna.netlify.app/"><img src="https://img.shields.io/badge/▶%20Live%20Demo-Open-FF4D00?style=for-the-badge" alt="Live Demo"></a>
</p>

<p align="center">
  <img src=".github/preview.gif" alt="Animated Fox model preview" width="640">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Three.js-000000?logo=three.js&logoColor=white">
  <img src="https://img.shields.io/badge/glTF-87B81E?logo=khronosgroup&logoColor=white">
  <img src="https://img.shields.io/badge/WebGL-990000?logo=webgl&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white">
</p>

## About

This one is as much about **code architecture** as it is about the 3D. Instead of one big script, the project is organized into a reusable `Experience` structure:

```
src/Experience/
├── Experience.js      # singleton entry point wiring everything together
├── Camera.js · Renderer.js
├── Utils/             # Sizes, Time, Resources (async loading), EventEmitter, Debug
└── World/             # Fox, Floor, Environment, World
```

- 🦊 Animated glTF Fox driven by Three.js `AnimationMixer`, with blended clip switching
- 🧱 Modular, event-driven architecture (custom `EventEmitter`, `Time`, `Sizes`)
- 📦 Centralized async resource loading
- 🎛️ A wrapped debug GUI you can toggle on

## Tech

Three.js · `AnimationMixer` · glTF + Draco loaders · custom class-based architecture · lil-gui · Vite

## Run locally

```bash
npm install   # first time only
npm run dev   # local server at localhost:8080
npm run build # production build in dist/
```

> **Note:** model files under `static/models/` aren't committed (only a `.gitkeep`) — add the Fox glTF (or your own) before running.

---

<p align="center"><i>Part of my Three.js journey · <a href="https://estebanacuna.dev">estebanacuna.dev</a></i></p>
