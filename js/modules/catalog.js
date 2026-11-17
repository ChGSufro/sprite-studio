/**
 * ============================================================================
 * CATÁLOGO DE FOTOGRAMAS Y NAVEGACIÓN
 * Filtrado por categorías, render de lista de tarjetas y selección de frame.
 * ============================================================================
 */

import { state } from './state.js';
import { dom } from './dom.js';
import { FRAME_LABELS } from './constants.js';
import { renderMainCanvas } from './renderer.js';

// Import dinámico / referencia a stopAnimationLoop para evitar dependencia circular
let stopAnimationCallback = null;

export function registerStopAnimationCallback(cb) {
  stopAnimationCallback = cb;
}

export function getFramesByCategory(cat) {
  const allKeys = Object.keys(state.atlas.frames);
  const prefixes = {
    turnaround: 'turnaround_',
    states: 'state_',
    emotions: 'emotion_',
    arms: 'arms_'
  };
  const prefix = prefixes[cat];
  const filtered = allKeys.filter(k => k.startsWith(prefix));
  // Si el usuario subió un JSON con nombres personalizados sin prefijo, mostrar todos
  return filtered.length > 0 ? filtered : allKeys;
}

export function selectFrame(frameKey) {
  if (!state.atlas.frames[frameKey]) return;
  state.activeFrame = frameKey;
  renderMainCanvas();
  renderFramesCatalog();
}

export function renderFramesCatalog() {
  if (!dom.framesGrid) return;
  const keys = getFramesByCategory(state.currentCategory);
  dom.framesGrid.innerHTML = '';

  keys.forEach((key) => {
    const entry = state.atlas.frames[key];
    const isSelected = key === state.activeFrame;

    const card = document.createElement('button');
    card.className = `frame-card flex items-center gap-2.5 p-2 rounded-lg border text-left transition ${
      isSelected
        ? 'bg-ctp-blue/15 border-ctp-blue ring-1 ring-ctp-blue/50'
        : 'bg-ctp-crust/80 hover:bg-ctp-surface0 border-ctp-surface0'
    }`;

    // Miniatura en canvas 32x32
    const thumb = document.createElement('canvas');
    thumb.width = 32;
    thumb.height = 32;
    thumb.className = 'pixelated w-9 h-9 rounded bg-ctp-base border border-ctp-surface1 shrink-0';
    const tCtx = thumb.getContext('2d');
    tCtx.imageSmoothingEnabled = false;
    if (state.sheetImage && entry) {
      const { x, y, w, h } = entry.frame;
      tCtx.drawImage(state.sheetImage, x, y, w, h, 0, 0, 32, 32);
    }

    const info = document.createElement('div');
    info.className = 'min-w-0 flex-1';
    const title = FRAME_LABELS[key] || key.replace('.png', '');
    info.innerHTML = `
      <div class="text-xs font-medium truncate ${isSelected ? 'text-ctp-blue font-semibold' : 'text-ctp-text'}">${title}</div>
      <div class="text-[10px] font-mono text-ctp-subtext0 truncate">x:${entry.frame.x}, y:${entry.frame.y}</div>
    `;

    card.appendChild(thumb);
    card.appendChild(info);

    card.addEventListener('click', () => {
      if (stopAnimationCallback) {
        stopAnimationCallback();
      }
      selectFrame(key);
    });

    dom.framesGrid.appendChild(card);
  });
}
