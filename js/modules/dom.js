/**
 * ============================================================================
 * REFERENCIAS DOM Y UTILIDADES DE UI
 * Caché de elementos HTML, sistema de toasts y copiado al portapapeles.
 * ============================================================================
 */

import { state } from './state.js';

export const dom = {
  mainCanvas: null,
  minimapCanvas: null,
  logoCanvas: null,
  canvasStage: null,
  canvasInfoBadge: null,
  framesGrid: null,
  jsonPreview: null,
  jsSnippet: null,
  statX: null,
  statY: null,
  statW: null,
  statH: null,
  fpsSlider: null,
  fpsValue: null,
  btnStopAnim: null,
  sourceBadge: null,
  sheetDimensions: null,
  dragOverlay: null,
  dropZoneMain: null,
  pngStatusLabel: null,
  jsonStatusLabel: null,
  toastContainer: null
};

export let mainCtx = null;
export let minimapCtx = null;
export let logoCtx = null;

export function initDomReferences() {
  dom.mainCanvas = document.getElementById('main-canvas');
  dom.minimapCanvas = document.getElementById('minimap-canvas');
  dom.logoCanvas = document.getElementById('logo-canvas');
  dom.canvasStage = document.getElementById('canvas-stage');
  dom.canvasInfoBadge = document.getElementById('canvas-info-badge');
  dom.framesGrid = document.getElementById('frames-grid');
  dom.jsonPreview = document.getElementById('json-preview');
  dom.jsSnippet = document.getElementById('js-snippet');
  dom.statX = document.getElementById('stat-x');
  dom.statY = document.getElementById('stat-y');
  dom.statW = document.getElementById('stat-w');
  dom.statH = document.getElementById('stat-h');
  dom.fpsSlider = document.getElementById('fps-slider');
  dom.fpsValue = document.getElementById('fps-value');
  dom.btnStopAnim = document.getElementById('btn-stop-anim');
  dom.sourceBadge = document.getElementById('source-badge');
  dom.sheetDimensions = document.getElementById('sheet-dimensions');
  dom.dragOverlay = document.getElementById('drag-overlay');
  dom.dropZoneMain = document.getElementById('drop-zone-main');
  dom.pngStatusLabel = document.getElementById('png-status-label');
  dom.jsonStatusLabel = document.getElementById('json-status-label');
  dom.toastContainer = document.getElementById('toast-container');

  if (dom.mainCanvas) mainCtx = dom.mainCanvas.getContext('2d');
  if (dom.minimapCanvas) minimapCtx = dom.minimapCanvas.getContext('2d');
  if (dom.logoCanvas) logoCtx = dom.logoCanvas.getContext('2d');
}

export function showToast(mensaje, tipo = 'info') {
  const container = dom.toastContainer || document.getElementById('toast-container');
  if (!container) return;
  const el = document.createElement('div');
  const colors = {
    info: 'bg-ctp-surface0 border-ctp-blue text-ctp-text',
    success: 'bg-ctp-surface0 border-ctp-green text-ctp-green',
    error: 'bg-ctp-surface0 border-ctp-red text-ctp-red'
  };
  el.className = `px-3.5 py-2 rounded-lg border shadow-lg text-xs font-medium backdrop-blur-md transition-all duration-300 transform translate-y-2 opacity-0 ${colors[tipo] || colors.info}`;
  el.textContent = mensaje;
  container.appendChild(el);

  requestAnimationFrame(() => {
    el.classList.remove('translate-y-2', 'opacity-0');
  });

  setTimeout(() => {
    el.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => el.remove(), 300);
  }, 2800);
}

export function copyTextToClipboard(text, successMsg) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showToast(successMsg, 'success');
  } catch (err) {
    showToast('No se pudo copiar al portapapeles', 'error');
  }
  document.body.removeChild(textarea);
}

export function updateSourceBadge() {
  if (!dom.sourceBadge) return;
  if (state.isCustomPng && state.isCustomJson) {
    dom.sourceBadge.textContent = 'PNG + JSON Personalizados';
    dom.sourceBadge.className = 'text-[10px] font-mono px-2 py-0.5 rounded bg-ctp-green/15 text-ctp-green border border-ctp-green/30';
  } else if (state.isCustomPng) {
    dom.sourceBadge.textContent = 'PNG Personalizado';
    dom.sourceBadge.className = 'text-[10px] font-mono px-2 py-0.5 rounded bg-ctp-blue/15 text-ctp-blue border border-ctp-blue/30';
  } else if (state.isCustomJson) {
    dom.sourceBadge.textContent = 'JSON Personalizado';
    dom.sourceBadge.className = 'text-[10px] font-mono px-2 py-0.5 rounded bg-ctp-peach/15 text-ctp-peach border border-ctp-peach/30';
  } else {
    dom.sourceBadge.textContent = 'Demo Procedural';
    dom.sourceBadge.className = 'text-[10px] font-mono px-2 py-0.5 rounded bg-ctp-teal/15 text-ctp-teal border border-ctp-teal/30';
  }
}
