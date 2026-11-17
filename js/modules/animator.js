/**
 * ============================================================================
 * REPRODUCTOR DE ANIMACIONES (LOOPS)
 * Control del temporizador de animación por fotogramas y actualización de UI.
 * ============================================================================
 */

import { state } from './state.js';
import { dom, showToast } from './dom.js';
import { ANIMATION_LOOPS } from './constants.js';
import { selectFrame, registerStopAnimationCallback } from './catalog.js';

export function stopAnimationLoop() {
  if (state.loopTimer) {
    clearInterval(state.loopTimer);
    state.loopTimer = null;
  }
  state.activeLoop = null;
  if (dom.btnStopAnim) {
    dom.btnStopAnim.classList.add('hidden');
  }
  document.querySelectorAll('.loop-btn').forEach(btn => {
    btn.classList.remove('border-ctp-blue', 'bg-ctp-blue/15');
  });
}

// Registrar callback en catalog.js para pausar la animación al hacer clic en un fotograma
registerStopAnimationCallback(stopAnimationLoop);

export function startAnimationLoop(loopName) {
  stopAnimationLoop();
  const sequence = ANIMATION_LOOPS[loopName];
  if (!sequence) return;

  // Filtrar solo los frames que existan en el atlas actual
  const validFrames = sequence.filter(f => state.atlas.frames[f]);
  if (validFrames.length === 0) {
    showToast('El JSON actual no contiene los frames de este ciclo', 'error');
    return;
  }

  state.activeLoop = loopName;
  state.loopIndex = 0;
  if (dom.btnStopAnim) {
    dom.btnStopAnim.classList.remove('hidden');
  }

  document.querySelectorAll('.loop-btn').forEach(btn => {
    if (btn.dataset.loop === loopName) {
      btn.classList.add('border-ctp-blue', 'bg-ctp-blue/15');
    } else {
      btn.classList.remove('border-ctp-blue', 'bg-ctp-blue/15');
    }
  });

  const tick = () => {
    const frameKey = validFrames[state.loopIndex];
    selectFrame(frameKey);
    state.loopIndex = (state.loopIndex + 1) % validFrames.length;
  };

  tick();
  state.loopTimer = setInterval(tick, 1000 / state.fps);
}
