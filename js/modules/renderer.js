/**
 * ============================================================================
 * RENDERIZADO EN CANVAS PRINCIPAL, MINI-MAPA Y LOGO
 * Funciones de pintado sobre contextos HTML5 Canvas 2D.
 * ============================================================================
 */

import { state } from './state.js';
import { dom, mainCtx, minimapCtx, logoCtx } from './dom.js';

export function updateJsonInspector(frameEntry) {
  const { x, y, w, h } = frameEntry.frame;
  dom.statX.textContent = x;
  dom.statY.textContent = y;
  dom.statW.textContent = w;
  dom.statH.textContent = h;

  const formattedJson = JSON.stringify({ [state.activeFrame]: frameEntry }, null, 2);
  dom.jsonPreview.textContent = formattedJson;

  dom.jsSnippet.textContent =
`const { x, y, w, h } = atlas.frames["${state.activeFrame}"].frame;
ctx.imageSmoothingEnabled = false;
ctx.drawImage(sheet, x, y, w, h, 0, 0, 256, 256);`;
}

export function renderMinimap() {
  if (!state.sheetImage || !dom.minimapCanvas || !minimapCtx) return;
  const imgW = state.sheetImage.width || 640;
  const imgH = state.sheetImage.height || 256;

  dom.minimapCanvas.width = imgW;
  dom.minimapCanvas.height = imgH;
  if (dom.sheetDimensions) {
    dom.sheetDimensions.textContent = `${imgW}×${imgH} px`;
  }

  minimapCtx.clearRect(0, 0, imgW, imgH);
  minimapCtx.imageSmoothingEnabled = false;
  minimapCtx.drawImage(state.sheetImage, 0, 0);

  // Resaltar el frame activo en el minimapa
  const activeObj = state.atlas.frames[state.activeFrame];
  if (activeObj) {
    const { x, y, w, h } = activeObj.frame;
    minimapCtx.strokeStyle = '#89b4fa';
    minimapCtx.lineWidth = 3;
    minimapCtx.strokeRect(x + 1.5, y + 1.5, w - 3, h - 3);
    minimapCtx.fillStyle = 'rgba(137, 180, 250, 0.22)';
    minimapCtx.fillRect(x, y, w, h);
  }
}

export function renderLogoIcon() {
  if (!state.sheetImage || !dom.logoCanvas || !logoCtx) return;
  logoCtx.clearRect(0, 0, 32, 32);
  logoCtx.imageSmoothingEnabled = false;
  logoCtx.drawImage(state.sheetImage, 0, 0, 64, 64, 0, 0, 32, 32);
}

export function renderMainCanvas() {
  const frameEntry = state.atlas.frames[state.activeFrame];
  if (!frameEntry || !state.sheetImage || !dom.mainCanvas || !mainCtx) return;

  const { x, y, w, h } = frameEntry.frame;
  const targetW = w * state.zoom;
  const targetH = h * state.zoom;

  if (dom.mainCanvas.width !== targetW || dom.mainCanvas.height !== targetH) {
    dom.mainCanvas.width = targetW;
    dom.mainCanvas.height = targetH;
  }

  mainCtx.clearRect(0, 0, targetW, targetH);
  // Garantizar interpolación Nearest Neighbor estricta
  mainCtx.imageSmoothingEnabled = false;

  mainCtx.drawImage(
    state.sheetImage,
    x, y, w, h,
    0, 0, targetW, targetH
  );

  // Dibujar cuadrícula de píxeles 1:1 si está activa
  if (state.showGrid && state.zoom >= 2) {
    mainCtx.strokeStyle = 'rgba(137, 180, 250, 0.18)';
    mainCtx.lineWidth = 1;
    mainCtx.beginPath();
    for (let gx = 0; gx <= targetW; gx += state.zoom) {
      mainCtx.moveTo(gx + 0.5, 0);
      mainCtx.lineTo(gx + 0.5, targetH);
    }
    for (let gy = 0; gy <= targetH; gy += state.zoom) {
      mainCtx.moveTo(0, gy + 0.5);
      mainCtx.lineTo(targetW, gy + 0.5);
    }
    mainCtx.stroke();
  }

  if (dom.canvasInfoBadge) {
    dom.canvasInfoBadge.textContent = `${state.activeFrame} • ${targetW}×${targetH} px (${state.zoom}x)`;
  }
  updateJsonInspector(frameEntry);
  renderMinimap();
}
