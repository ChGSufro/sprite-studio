/**
 * ============================================================================
 * CARGA DE ARCHIVOS EXTERNOS Y RESET PROCEDURAL
 * Lectura de archivos locales PNG / JSON y restauración del demo inicial.
 * ============================================================================
 */

import { state } from './state.js';
import { dom, showToast, updateSourceBadge } from './dom.js';
import { DEFAULT_ATLAS_JSON } from './constants.js';
import { generarSpriteSheetProcedural } from './procedural.js';
import { renderLogoIcon, renderMainCanvas } from './renderer.js';
import { renderFramesCatalog } from './catalog.js';
import { stopAnimationLoop } from './animator.js';

export function handleFilesUpload(fileList) {
  Array.from(fileList).forEach(file => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          state.sheetImage = img;
          state.isCustomPng = true;
          const pngLabel = dom.pngStatusLabel || document.getElementById('png-status-label');
          if (pngLabel) {
            pngLabel.textContent = file.name.slice(0, 16) + (file.name.length > 16 ? '…' : '');
          }
          updateSourceBadge();
          renderLogoIcon();
          renderMainCanvas();
          renderFramesCatalog();
          showToast(`Imagen cargada: ${file.name} (${img.width}×${img.height})`, 'success');
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    } else if (file.name.endsWith('.json') || file.type === 'application/json') {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const parsed = JSON.parse(e.target.result);
          if (!parsed.frames || typeof parsed.frames !== 'object') {
            throw new Error('Estructura JSON sin propiedad "frames"');
          }
          stopAnimationLoop();
          state.atlas = parsed;
          state.isCustomJson = true;
          const jsonLabel = dom.jsonStatusLabel || document.getElementById('json-status-label');
          if (jsonLabel) {
            jsonLabel.textContent = file.name.slice(0, 16) + (file.name.length > 16 ? '…' : '');
          }
          const firstKey = Object.keys(parsed.frames)[0];
          if (firstKey) state.activeFrame = firstKey;
          updateSourceBadge();
          renderMainCanvas();
          renderFramesCatalog();
          showToast(`Atlas JSON cargado (${Object.keys(parsed.frames).length} frames)`, 'success');
        } catch (err) {
          showToast(`Error al leer JSON: ${err.message}`, 'error');
        }
      };
      reader.readAsText(file);
    } else {
      showToast(`Formato no soportado: ${file.name}`, 'error');
    }
  });
}

export function resetToProceduralDemo() {
  stopAnimationLoop();
  state.atlas = JSON.parse(JSON.stringify(DEFAULT_ATLAS_JSON));
  state.sheetImage = generarSpriteSheetProcedural();
  state.isCustomPng = false;
  state.isCustomJson = false;
  state.activeFrame = 'turnaround_front_0.png';
  const pngLabel = dom.pngStatusLabel || document.getElementById('png-status-label');
  if (pngLabel) pngLabel.textContent = 'Cargar PNG';
  const jsonLabel = dom.jsonStatusLabel || document.getElementById('json-status-label');
  if (jsonLabel) jsonLabel.textContent = 'Cargar JSON';
  updateSourceBadge();
  renderLogoIcon();
  renderMainCanvas();
  renderFramesCatalog();
  showToast('Sprite Sheet procedural restaurado', 'info');
}
