/**
 * ============================================================================
 * CONSTANTES DE LA APLICACIÓN
 * Atlas por defecto, etiquetas legibles y secuencias de animación predefinidas.
 * ============================================================================
 */

export const DEFAULT_ATLAS_JSON = {
  frames: {
    // Fila 0 (y: 0) - Vistas Ortográficas y Perspectivas (Turnaround)
    "turnaround_front_0.png": { frame: { x: 0, y: 0, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "turnaround_3q_front_left_45.png": { frame: { x: 64, y: 0, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "turnaround_3q_front_right_45.png": { frame: { x: 128, y: 0, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "turnaround_profile_left_90.png": { frame: { x: 192, y: 0, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "turnaround_profile_right_90.png": { frame: { x: 256, y: 0, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "turnaround_3q_back_left_135.png": { frame: { x: 320, y: 0, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "turnaround_3q_back_right_135.png": { frame: { x: 384, y: 0, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "turnaround_back_180.png": { frame: { x: 448, y: 0, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "turnaround_top_down.png": { frame: { x: 512, y: 0, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "turnaround_isometric.png": { frame: { x: 576, y: 0, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },

    // Fila 1 (y: 64) - Estados y Posturas de Interacción
    "state_idle_1.png": { frame: { x: 0, y: 64, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "state_idle_2.png": { frame: { x: 64, y: 64, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "state_alert_surprise.png": { frame: { x: 128, y: 64, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "state_success_smile.png": { frame: { x: 192, y: 64, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "state_processing_1.png": { frame: { x: 256, y: 64, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "state_processing_2.png": { frame: { x: 320, y: 64, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "state_processing_3.png": { frame: { x: 384, y: 64, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "state_extra_1.png": { frame: { x: 448, y: 64, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "state_extra_2.png": { frame: { x: 512, y: 64, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "state_extra_3.png": { frame: { x: 576, y: 64, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },

    // Fila 2 (y: 128) - Emociones y Expresiones Faciales
    "emotion_neutral.png": { frame: { x: 0, y: 128, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "emotion_happy.png": { frame: { x: 64, y: 128, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "emotion_sad.png": { frame: { x: 128, y: 128, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "emotion_angry.png": { frame: { x: 192, y: 128, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "emotion_confused.png": { frame: { x: 256, y: 128, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "emotion_sleepy.png": { frame: { x: 320, y: 128, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "emotion_wink.png": { frame: { x: 384, y: 128, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "emotion_extra_1.png": { frame: { x: 448, y: 128, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "emotion_extra_2.png": { frame: { x: 512, y: 128, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "emotion_extra_3.png": { frame: { x: 576, y: 128, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },

    // Fila 3 (y: 192) - Poses de Brazos
    "arms_relaxed.png": { frame: { x: 0, y: 192, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "arms_waving.png": { frame: { x: 64, y: 192, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "arms_pointing_side.png": { frame: { x: 128, y: 192, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "arms_pointing_up.png": { frame: { x: 192, y: 192, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "arms_crossed.png": { frame: { x: 256, y: 192, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "arms_hands_together.png": { frame: { x: 320, y: 192, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "arms_celebration_both_up.png": { frame: { x: 384, y: 192, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "arms_dynamic_swing_1.png": { frame: { x: 448, y: 192, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "arms_dynamic_swing_2.png": { frame: { x: 512, y: 192, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } },
    "arms_dynamic_swing_3.png": { frame: { x: 576, y: 192, w: 64, h: 64 }, rotated: false, trimmed: false, spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 }, sourceSize: { w: 64, h: 64 } }
  },
  meta: {
    app: "Cuboide Sprite Atlas",
    version: "1.0",
    image: "Cuboide_SpriteSheet_64x64.png",
    format: "RGBA8888",
    size: { w: 640, h: 256 },
    scale: "1",
    cell_size: { w: 64, h: 64 }
  }
};

// Etiquetas amigables en español para la UI
export const FRAME_LABELS = {
  // Vistas
  "turnaround_front_0.png": "Frente (0°)",
  "turnaround_3q_front_left_45.png": "3/4 Frente Izq (45°)",
  "turnaround_3q_front_right_45.png": "3/4 Frente Der (45°)",
  "turnaround_profile_left_90.png": "Perfil Izq (90°)",
  "turnaround_profile_right_90.png": "Perfil Der (90°)",
  "turnaround_3q_back_left_135.png": "3/4 Trasero Izq (135°)",
  "turnaround_3q_back_right_135.png": "3/4 Trasero Der (135°)",
  "turnaround_back_180.png": "Espalda (180°)",
  "turnaround_top_down.png": "Vista Cenital (Arriba)",
  "turnaround_isometric.png": "Vista Isométrica",
  // Estados
  "state_idle_1.png": "Reposo (Idle 1)",
  "state_idle_2.png": "Reposo (Idle 2)",
  "state_alert_surprise.png": "Sorpresa / Alerta (!)",
  "state_success_smile.png": "Sonriendo / Éxito",
  "state_processing_1.png": "Procesando 1",
  "state_processing_2.png": "Procesando 2",
  "state_processing_3.png": "Procesando 3",
  "state_extra_1.png": "Energía / Carga",
  "state_extra_2.png": "Desactivado / Offline",
  "state_extra_3.png": "Flotando",
  // Emociones
  "emotion_neutral.png": "Neutral / Calma",
  "emotion_happy.png": "Feliz / Entusiasmado",
  "emotion_sad.png": "Triste / Decaído",
  "emotion_angry.png": "Enojado / Frustrado",
  "emotion_confused.png": "Confundido (?)",
  "emotion_sleepy.png": "Dormido (Zzz)",
  "emotion_wink.png": "Guiño / Cómplice",
  "emotion_extra_1.png": "Asombro (O_O)",
  "emotion_extra_2.png": "Sonrojo / Tímido",
  "emotion_extra_3.png": "Duda / Escéptico",
  // Brazos
  "arms_relaxed.png": "Brazos Relajados",
  "arms_waving.png": "Saludando",
  "arms_pointing_side.png": "Señalando al Lado",
  "arms_pointing_up.png": "Señalando Arriba",
  "arms_crossed.png": "Brazos Cruzados",
  "arms_hands_together.png": "Manos al Frente",
  "arms_celebration_both_up.png": "Celebración (Arriba)",
  "arms_dynamic_swing_1.png": "Balanceo Paso 1",
  "arms_dynamic_swing_2.png": "Balanceo Paso 2",
  "arms_dynamic_swing_3.png": "Balanceo Paso 3"
};

// Secuencias de animación predefinidas
export const ANIMATION_LOOPS = {
  idle: ["state_idle_1.png", "state_idle_2.png"],
  turnaround: [
    "turnaround_front_0.png",
    "turnaround_3q_front_right_45.png",
    "turnaround_profile_right_90.png",
    "turnaround_3q_back_right_135.png",
    "turnaround_back_180.png",
    "turnaround_3q_back_left_135.png",
    "turnaround_profile_left_90.png",
    "turnaround_3q_front_left_45.png"
  ],
  processing: ["state_processing_1.png", "state_processing_2.png", "state_processing_3.png"],
  swing: ["arms_relaxed.png", "arms_dynamic_swing_1.png", "arms_dynamic_swing_2.png", "arms_dynamic_swing_3.png"]
};
