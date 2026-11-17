/**
 * ============================================================================
 * ESTADO GLOBAL DE LA APLICACIÓN
 * Objeto reactivo/mutable que mantiene la configuración y datos del canvas.
 * ============================================================================
 */

import { DEFAULT_ATLAS_JSON } from './constants.js';

export const state = {
  atlas: JSON.parse(JSON.stringify(DEFAULT_ATLAS_JSON)),
  sheetImage: null,
  isCustomPng: false,
  isCustomJson: false,
  currentCategory: 'turnaround',
  activeFrame: 'turnaround_front_0.png',
  zoom: 4,
  showGrid: false,
  showChecker: true,
  activeLoop: null,
  loopTimer: null,
  loopIndex: 0,
  fps: 6
};
