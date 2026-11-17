/**
 * ============================================================================
 * GESTIÓN DE EVENTOS DE USUARIO (EVENT LISTENERS)
 * Enlace de controles de UI, interactividad con canvas, minimapa y atajos.
 * ============================================================================
 */

import { state } from './state.js';
import { dom, copyTextToClipboard } from './dom.js';
import { renderMainCanvas } from './renderer.js';
import { renderFramesCatalog, selectFrame } from './catalog.js';
import { startAnimationLoop, stopAnimationLoop } from './animator.js';
import { handleFilesUpload, resetToProceduralDemo } from './loader.js';

export function initEventListeners() {
  // Pestañas de categorías
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.cat-tab').forEach(t => {
        t.classList.remove('bg-ctp-blue', 'text-ctp-crust', 'font-semibold');
        t.classList.add('text-ctp-subtext0', 'hover:bg-ctp-surface0', 'hover:text-ctp-text');
      });
      tab.classList.add('bg-ctp-blue', 'text-ctp-crust', 'font-semibold');
      tab.classList.remove('text-ctp-subtext0', 'hover:bg-ctp-surface0', 'hover:text-ctp-text');
      state.currentCategory = tab.dataset.cat;
      renderFramesCatalog();
    });
  });

  // Controles de Zoom (2x, 4x, 6x)
  document.querySelectorAll('.zoom-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.zoom-btn').forEach(b => {
        b.classList.remove('bg-ctp-blue', 'text-ctp-crust', 'font-semibold');
        b.classList.add('text-ctp-subtext1');
      });
      btn.classList.add('bg-ctp-blue', 'text-ctp-crust', 'font-semibold');
      btn.classList.remove('text-ctp-subtext1');
      state.zoom = parseInt(btn.dataset.zoom, 10);
      renderMainCanvas();
    });
  });

  // Toggle Grilla de píxeles
  const toggleGridBtn = document.getElementById('toggle-grid');
  if (toggleGridBtn) {
    toggleGridBtn.addEventListener('click', (e) => {
      state.showGrid = !state.showGrid;
      const btn = e.currentTarget;
      if (state.showGrid) {
        btn.classList.add('bg-ctp-blue/20', 'text-ctp-blue', 'border-ctp-blue/40');
        btn.classList.remove('bg-ctp-surface0', 'text-ctp-subtext1', 'border-transparent');
      } else {
        btn.classList.remove('bg-ctp-blue/20', 'text-ctp-blue', 'border-ctp-blue/40');
        btn.classList.add('bg-ctp-surface0', 'text-ctp-subtext1', 'border-transparent');
      }
      renderMainCanvas();
    });
  }

  // Toggle Fondo Transparencia (Checkerboard)
  const toggleCheckerBtn = document.getElementById('toggle-checker');
  if (toggleCheckerBtn) {
    toggleCheckerBtn.addEventListener('click', (e) => {
      state.showChecker = !state.showChecker;
      const btn = e.currentTarget;
      if (state.showChecker) {
        dom.canvasStage?.classList.add('checkerboard');
        dom.canvasStage?.classList.remove('bg-ctp-crust');
        btn.classList.add('bg-ctp-blue/20', 'text-ctp-blue', 'border-ctp-blue/40');
        btn.classList.remove('bg-ctp-surface0', 'text-ctp-subtext1', 'border-transparent');
      } else {
        dom.canvasStage?.classList.remove('checkerboard');
        dom.canvasStage?.classList.add('bg-ctp-crust');
        btn.classList.remove('bg-ctp-blue/20', 'text-ctp-blue', 'border-ctp-blue/40');
        btn.classList.add('bg-ctp-surface0', 'text-ctp-subtext1', 'border-transparent');
      }
    });
  }

  // Botones de Loops de animación
  document.querySelectorAll('.loop-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      startAnimationLoop(btn.dataset.loop);
    });
  });

  const stopAnimBtn = document.getElementById('btn-stop-anim');
  if (stopAnimBtn) {
    stopAnimBtn.addEventListener('click', stopAnimationLoop);
  }

  // Slider FPS
  if (dom.fpsSlider) {
    dom.fpsSlider.addEventListener('input', (e) => {
      state.fps = parseInt(e.target.value, 10);
      if (dom.fpsValue) dom.fpsValue.textContent = `${state.fps} FPS`;
      if (state.activeLoop) {
        startAnimationLoop(state.activeLoop);
      }
    });
  }

  // Copiar JSON y Snippet JS
  const btnCopyJson = document.getElementById('btn-copy-json');
  if (btnCopyJson) {
    btnCopyJson.addEventListener('click', () => {
      copyTextToClipboard(dom.jsonPreview?.textContent || '', 'Coordenadas JSON copiadas');
    });
  }

  const btnCopySnippet = document.getElementById('btn-copy-snippet');
  if (btnCopySnippet) {
    btnCopySnippet.addEventListener('click', () => {
      copyTextToClipboard(dom.jsSnippet?.textContent || '', 'Código JavaScript copiado');
    });
  }

  // Clic interactivo en el Minimapa del Atlas
  if (dom.minimapCanvas) {
    dom.minimapCanvas.addEventListener('click', (e) => {
      const rect = dom.minimapCanvas.getBoundingClientRect();
      const scaleX = dom.minimapCanvas.width / rect.width;
      const scaleY = dom.minimapCanvas.height / rect.height;
      const clickX = (e.clientX - rect.left) * scaleX;
      const clickY = (e.clientY - rect.top) * scaleY;

      // Buscar qué frame contiene ese punto (x, y)
      const foundKey = Object.keys(state.atlas.frames).find(key => {
        const f = state.atlas.frames[key].frame;
        return clickX >= f.x && clickX < f.x + f.w && clickY >= f.y && clickY < f.y + f.h;
      });

      if (foundKey) {
        stopAnimationLoop();
        selectFrame(foundKey);
      }
    });
  }

  // Inputs de archivos
  const inputPng = document.getElementById('input-png');
  if (inputPng) {
    inputPng.addEventListener('change', (e) => {
      if (e.target.files.length) handleFilesUpload(e.target.files);
    });
  }

  const inputJson = document.getElementById('input-json');
  if (inputJson) {
    inputJson.addEventListener('change', (e) => {
      if (e.target.files.length) handleFilesUpload(e.target.files);
    });
  }

  const btnResetDemo = document.getElementById('btn-reset-demo');
  if (btnResetDemo) {
    btnResetDemo.addEventListener('click', resetToProceduralDemo);
  }

  // Drag & Drop global en la ventana
  window.addEventListener('dragover', (e) => {
    e.preventDefault();
    if (dom.dragOverlay) dom.dragOverlay.classList.remove('hidden');
  });
  window.addEventListener('dragleave', (e) => {
    if (e.relatedTarget === null && dom.dragOverlay) {
      dom.dragOverlay.classList.add('hidden');
    }
  });
  window.addEventListener('drop', (e) => {
    e.preventDefault();
    if (dom.dragOverlay) dom.dragOverlay.classList.add('hidden');
    if (e.dataTransfer && e.dataTransfer.files.length) {
      handleFilesUpload(e.dataTransfer.files);
    }
  });
}
