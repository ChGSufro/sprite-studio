/**
 * ============================================================================
 * SPRITE STUDIO - PUNTO DE ENTRADA (BOOTSTRAP)
 * Orquesta la inicialización de módulos ES6, carga procedural y listeners.
 * ============================================================================
 */

import { state } from './modules/state.js';
import { initDomReferences } from './modules/dom.js';
import { generarSpriteSheetProcedural } from './modules/procedural.js';
import { renderLogoIcon, renderMainCanvas } from './modules/renderer.js';
import { renderFramesCatalog } from './modules/catalog.js';
import { initEventListeners } from './modules/events.js';

function initApp() {
  initDomReferences();
  state.sheetImage = generarSpriteSheetProcedural();
  initEventListeners();
  renderLogoIcon();
  renderMainCanvas();
  renderFramesCatalog();
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
