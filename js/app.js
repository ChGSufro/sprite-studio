/**
 * ============================================================================
 * 1. ATLAS JSON POR DEFECTO (10 Columnas x 4 Filas = 40 Celdas de 64x64 px)
 * ============================================================================
 */
const DEFAULT_ATLAS_JSON = {
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
const FRAME_LABELS = {
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
const ANIMATION_LOOPS = {
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

/**
 * ============================================================================
 * 2. GENERADOR PROCEDURAL DE PIXEL ART DE "CUBOIDE" (640x256 px)
 *    Dibuja las 40 celdas con estética voxel cian-turquesa, detalles naranjas
 *    y contorno oscuro para que la aplicación sea 100% funcional sin archivos.
 * ============================================================================
 */
function generarSpriteSheetProcedural() {
  const offCanvas = document.createElement('canvas');
  offCanvas.width = 640;
  offCanvas.height = 256;
  const ctx = offCanvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  // Paleta fiel a Cuboide_Vistas_Referencia
  const PAL = {
    outline: '#0d1b2a',
    cyanLight: '#48f5e0',
    cyanMain: '#19d3c5',
    cyanMid: '#0ea5b5',
    cyanDark: '#0b7a94',
    orangeLight: '#ffb703',
    orangeDark: '#fb8500',
    cheek: '#ff9e64',
    white: '#ffffff',
    red: '#f38ba8',
    yellow: '#f9e2af'
  };

  // Helper para dibujar rectángulos alineados a grilla de 2px (estilo 32x32 escalado 2x a 64x64)
  function px(ox, oy, x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(ox + x * 2, oy + y * 2, w * 2, h * 2);
  }

  // Dibuja el cuerpo base de Cuboide (en coordenadas de sub-grilla 32x32)
  function dibujarCuerpoBase(ox, oy, opts = {}) {
    const yOff = opts.yOff || 0;
    const view = opts.view || 'front'; // front, back, left, right, 3qL, 3qR, top, iso
    const armPose = opts.armPose || 'relaxed';

    if (view === 'top') {
      // Vista cenital (desde arriba)
      px(ox, oy, 7, 6, 18, 20, PAL.outline);
      px(ox, oy, 8, 7, 16, 18, PAL.cyanMain);
      px(ox, oy, 9, 8, 14, 16, PAL.cyanLight);
      // Relieve de bloques escalonados arriba
      px(ox, oy, 11, 10, 10, 12, PAL.cyanMid);
      px(ox, oy, 13, 12, 6, 8, PAL.cyanLight);
      // Esquina naranja
      px(ox, oy, 8, 19, 3, 4, PAL.orangeLight);
      px(ox, oy, 9, 20, 2, 2, PAL.orangeDark);
      // Orejas laterales
      px(ox, oy, 5, 13, 2, 6, PAL.outline);
      px(ox, oy, 6, 14, 1, 4, PAL.cyanDark);
      px(ox, oy, 25, 13, 2, 6, PAL.outline);
      px(ox, oy, 25, 14, 1, 4, PAL.cyanDark);
      return;
    }

    if (view === 'iso') {
      // Vista Isométrica Voxel
      px(ox, oy, 8, 7 + yOff, 16, 18, PAL.outline);
      // Cara superior
      px(ox, oy, 10, 6 + yOff, 12, 4, PAL.cyanLight);
      px(ox, oy, 12, 5 + yOff, 8, 2, PAL.cyanLight);
      // Cara izquierda (iluminada)
      px(ox, oy, 8, 9 + yOff, 9, 14, PAL.cyanMain);
      px(ox, oy, 8, 19 + yOff, 9, 4, PAL.cyanMid);
      // Cara derecha (sombra)
      px(ox, oy, 17, 9 + yOff, 7, 14, PAL.cyanDark);
      // Esquina naranja superior
      px(ox, oy, 14, 8 + yOff, 3, 3, PAL.orangeLight);
      // Ojos isométricos
      px(ox, oy, 10, 13 + yOff, 2, 2, PAL.outline);
      px(ox, oy, 10, 13 + yOff, 1, 1, PAL.white);
      px(ox, oy, 14, 13 + yOff, 2, 2, PAL.outline);
      px(ox, oy, 14, 13 + yOff, 1, 1, PAL.white);
      px(ox, oy, 12, 15 + yOff, 2, 1, PAL.outline);
      // Pies
      px(ox, oy, 10, 24 + yOff, 3, 3, PAL.outline);
      px(ox, oy, 11, 24 + yOff, 2, 2, PAL.cyanDark);
      px(ox, oy, 17, 24 + yOff, 3, 3, PAL.outline);
      px(ox, oy, 17, 24 + yOff, 2, 2, PAL.cyanDark);
      return;
    }

    // Ancho y desplazamiento según ángulo
    let bodyX = 8, bodyW = 16;
    if (view === 'left' || view === 'right') {
      bodyX = 10; bodyW = 12;
    } else if (view === '3qL' || view === '3qR') {
      bodyX = 9; bodyW = 14;
    }

    // Bloque superior (cresta voxel)
    px(ox, oy, bodyX + 4, 4 + yOff, bodyW - 8, 2, PAL.outline);
    px(ox, oy, bodyX + 5, 5 + yOff, bodyW - 10, 1, PAL.cyanLight);

    // Contorno principal del cubo
    px(ox, oy, bodyX, 6 + yOff, bodyW, 18, PAL.outline);
    // Relleno principal cian
    px(ox, oy, bodyX + 1, 7 + yOff, bodyW - 2, 16, PAL.cyanMain);
    // Franja superior iluminada
    px(ox, oy, bodyX + 2, 7 + yOff, bodyW - 4, 2, PAL.cyanLight);
    // Franja inferior sombreada (patrón de color base)
    px(ox, oy, bodyX + 1, 20 + yOff, bodyW - 2, 3, PAL.cyanMid);

    // Detalles de relieve según vista
    if (view === 'front' || view === '3qL' || view === '3qR') {
      // Esquinas superiores naranjas
      if (view !== '3qR') px(ox, oy, bodyX + 1, 7 + yOff, 2, 2, PAL.orangeLight);
      if (view !== '3qL') px(ox, oy, bodyX + bodyW - 3, 7 + yOff, 2, 2, PAL.orangeLight);
    } else if (view === 'back') {
      // Relieve de bloques trasero
      px(ox, oy, 13, 9 + yOff, 6, 5, PAL.outline);
      px(ox, oy, 14, 10 + yOff, 4, 3, PAL.cyanMid);
    } else if (view === 'left' || view === 'right') {
      // Relieve lateral de bloques
      const rx = view === 'left' ? 12 : 15;
      px(ox, oy, rx, 10 + yOff, 5, 4, PAL.outline);
      px(ox, oy, rx + 1, 11 + yOff, 3, 2, PAL.cyanMid);
      px(ox, oy, view === 'left' ? 18 : 11, 7 + yOff, 2, 2, PAL.orangeLight);
    }

    // Orejas / nodos laterales
    if (view === 'front' || view === 'back' || view === '3qL' || view === '3qR') {
      px(ox, oy, bodyX - 2, 10 + yOff, 2, 4, PAL.outline);
      px(ox, oy, bodyX - 1, 11 + yOff, 1, 2, PAL.cyanDark);
      px(ox, oy, bodyX + bodyW, 10 + yOff, 2, 4, PAL.outline);
      px(ox, oy, bodyX + bodyW, 11 + yOff, 1, 2, PAL.cyanDark);
    }

    // Pies de apoyo
    if (view === 'left' || view === 'right') {
      px(ox, oy, 14, 24 + yOff, 4, 3, PAL.outline);
      px(ox, oy, 15, 24 + yOff, 2, 2, PAL.cyanMid);
      px(ox, oy, 15, 25 + yOff, 2, 1, PAL.orangeLight);
    } else {
      px(ox, oy, bodyX + 2, 24 + yOff, 4, 3, PAL.outline);
      px(ox, oy, bodyX + 3, 24 + yOff, 2, 2, PAL.cyanMid);
      px(ox, oy, bodyX + 3, 25 + yOff, 2, 1, PAL.orangeLight);

      px(ox, oy, bodyX + bodyW - 6, 24 + yOff, 4, 3, PAL.outline);
      px(ox, oy, bodyX + bodyW - 5, 24 + yOff, 2, 2, PAL.cyanMid);
      px(ox, oy, bodyX + bodyW - 5, 25 + yOff, 2, 1, PAL.orangeLight);
    }

    // Brazos según pose
    dibujarBrazos(ox, oy, bodyX, bodyW, yOff, view, armPose);
  }

  function dibujarBrazos(ox, oy, bodyX, bodyW, yOff, view, pose) {
    if (view === 'left' || view === 'right') {
      // Brazo central en vista de perfil
      px(ox, oy, 14, 15 + yOff, 4, 5, PAL.outline);
      px(ox, oy, 15, 16 + yOff, 2, 3, PAL.cyanMid);
      px(ox, oy, 15, 18 + yOff, 2, 1, PAL.orangeLight);
      return;
    }

    const lx = bodyX - 3;
    const rx = bodyX + bodyW;

    if (pose === 'relaxed') {
      px(ox, oy, lx, 16 + yOff, 3, 4, PAL.outline);
      px(ox, oy, lx + 1, 17 + yOff, 2, 2, PAL.cyanMid);
      px(ox, oy, lx + 1, 18 + yOff, 1, 1, PAL.orangeLight);

      px(ox, oy, rx, 16 + yOff, 3, 4, PAL.outline);
      px(ox, oy, rx, 17 + yOff, 2, 2, PAL.cyanMid);
      px(ox, oy, rx + 1, 18 + yOff, 1, 1, PAL.orangeLight);
    } else if (pose === 'waving') {
      // Izquierdo abajo, derecho saludando arriba
      px(ox, oy, lx, 16 + yOff, 3, 4, PAL.outline);
      px(ox, oy, lx + 1, 17 + yOff, 2, 2, PAL.cyanMid);
      px(ox, oy, rx, 9 + yOff, 3, 5, PAL.outline);
      px(ox, oy, rx, 10 + yOff, 2, 3, PAL.cyanLight);
      px(ox, oy, rx + 1, 10 + yOff, 1, 1, PAL.orangeLight);
    } else if (pose === 'pointing_side') {
      px(ox, oy, lx, 16 + yOff, 3, 4, PAL.outline);
      px(ox, oy, lx + 1, 17 + yOff, 2, 2, PAL.cyanMid);
      px(ox, oy, rx, 15 + yOff, 5, 3, PAL.outline);
      px(ox, oy, rx, 16 + yOff, 4, 1, PAL.orangeLight);
    } else if (pose === 'pointing_up') {
      px(ox, oy, lx, 16 + yOff, 3, 4, PAL.outline);
      px(ox, oy, rx, 7 + yOff, 3, 6, PAL.outline);
      px(ox, oy, rx + 1, 8 + yOff, 1, 4, PAL.orangeLight);
    } else if (pose === 'crossed') {
      px(ox, oy, 11, 17 + yOff, 10, 3, PAL.outline);
      px(ox, oy, 12, 18 + yOff, 8, 1, PAL.cyanDark);
    } else if (pose === 'hands_together') {
      px(ox, oy, 13, 17 + yOff, 6, 4, PAL.outline);
      px(ox, oy, 14, 18 + yOff, 4, 2, PAL.orangeLight);
    } else if (pose === 'celebration') {
      px(ox, oy, lx, 8 + yOff, 3, 5, PAL.outline);
      px(ox, oy, lx + 1, 9 + yOff, 2, 3, PAL.cyanLight);
      px(ox, oy, lx + 1, 9 + yOff, 1, 1, PAL.orangeLight);

      px(ox, oy, rx, 8 + yOff, 3, 5, PAL.outline);
      px(ox, oy, rx, 9 + yOff, 2, 3, PAL.cyanLight);
      px(ox, oy, rx + 1, 9 + yOff, 1, 1, PAL.orangeLight);
    } else if (pose === 'swing1') {
      px(ox, oy, lx, 14 + yOff, 3, 4, PAL.outline);
      px(ox, oy, lx + 1, 15 + yOff, 2, 2, PAL.cyanLight);
      px(ox, oy, rx, 18 + yOff, 3, 4, PAL.outline);
      px(ox, oy, rx, 19 + yOff, 2, 2, PAL.cyanDark);
    } else if (pose === 'swing2') {
      px(ox, oy, lx, 18 + yOff, 3, 4, PAL.outline);
      px(ox, oy, lx + 1, 19 + yOff, 2, 2, PAL.cyanDark);
      px(ox, oy, rx, 14 + yOff, 3, 4, PAL.outline);
      px(ox, oy, rx, 15 + yOff, 2, 2, PAL.cyanLight);
    }
  }

  // Dibuja expresiones faciales sobre el rostro frontal
  function dibujarRostro(ox, oy, expr = 'neutral', yOff = 0, faceShiftX = 0) {
    const fx = faceShiftX;
    // Mejillas rosadas/naranjas
    px(ox, oy, 10 + fx, 16 + yOff, 2, 1, PAL.cheek);
    px(ox, oy, 20 + fx, 16 + yOff, 2, 1, PAL.cheek);

    if (expr === 'neutral') {
      px(ox, oy, 11 + fx, 13 + yOff, 2, 2, PAL.outline);
      px(ox, oy, 11 + fx, 13 + yOff, 1, 1, PAL.white);
      px(ox, oy, 19 + fx, 13 + yOff, 2, 2, PAL.outline);
      px(ox, oy, 19 + fx, 13 + yOff, 1, 1, PAL.white);
      px(ox, oy, 15 + fx, 16 + yOff, 2, 1, PAL.outline);
    } else if (expr === 'happy') {
      // Ojos arqueados felices ^ ^
      px(ox, oy, 11 + fx, 13 + yOff, 3, 1, PAL.outline);
      px(ox, oy, 10 + fx, 14 + yOff, 1, 1, PAL.outline);
      px(ox, oy, 14 + fx, 14 + yOff, 1, 1, PAL.outline);

      px(ox, oy, 18 + fx, 13 + yOff, 3, 1, PAL.outline);
      px(ox, oy, 17 + fx, 14 + yOff, 1, 1, PAL.outline);
      px(ox, oy, 21 + fx, 14 + yOff, 1, 1, PAL.outline);

      // Sonrisa
      px(ox, oy, 14 + fx, 16 + yOff, 4, 2, PAL.outline);
    } else if (expr === 'sad') {
      px(ox, oy, 11 + fx, 14 + yOff, 2, 2, PAL.outline);
      px(ox, oy, 19 + fx, 14 + yOff, 2, 2, PAL.outline);
      px(ox, oy, 14 + fx, 18 + yOff, 4, 1, PAL.outline);
      px(ox, oy, 13 + fx, 19 + yOff, 1, 1, PAL.outline);
      px(ox, oy, 18 + fx, 19 + yOff, 1, 1, PAL.outline);
    } else if (expr === 'angry') {
      // Cejas inclinadas
      px(ox, oy, 11 + fx, 12 + yOff, 3, 1, PAL.outline);
      px(ox, oy, 18 + fx, 12 + yOff, 3, 1, PAL.outline);
      px(ox, oy, 12 + fx, 14 + yOff, 2, 2, PAL.outline);
      px(ox, oy, 18 + fx, 14 + yOff, 2, 2, PAL.outline);
      px(ox, oy, 14 + fx, 18 + yOff, 4, 1, PAL.outline);
    } else if (expr === 'confused') {
      px(ox, oy, 11 + fx, 13 + yOff, 2, 2, PAL.outline);
      px(ox, oy, 19 + fx, 12 + yOff, 2, 3, PAL.outline);
      px(ox, oy, 14 + fx, 17 + yOff, 3, 1, PAL.outline);
      // Signo '?' flotante
      px(ox, oy, 25, 2, 3, 1, PAL.yellow);
      px(ox, oy, 27, 3, 1, 2, PAL.yellow);
      px(ox, oy, 26, 5, 1, 1, PAL.yellow);
      px(ox, oy, 26, 7, 1, 1, PAL.yellow);
    } else if (expr === 'sleepy') {
      // Ojos cerrados - -
      px(ox, oy, 11 + fx, 14 + yOff, 3, 1, PAL.outline);
      px(ox, oy, 18 + fx, 14 + yOff, 3, 1, PAL.outline);
      px(ox, oy, 15 + fx, 17 + yOff, 2, 1, PAL.outline);
      // Zzz
      px(ox, oy, 24, 3, 3, 1, PAL.white);
      px(ox, oy, 25, 4, 1, 1, PAL.white);
      px(ox, oy, 24, 5, 3, 1, PAL.white);
    } else if (expr === 'wink') {
      px(ox, oy, 11 + fx, 13 + yOff, 2, 2, PAL.outline);
      px(ox, oy, 11 + fx, 13 + yOff, 1, 1, PAL.white);
      // Guiño derecho
      px(ox, oy, 18 + fx, 14 + yOff, 3, 1, PAL.outline);
      px(ox, oy, 14 + fx, 16 + yOff, 4, 1, PAL.outline);
      px(ox, oy, 17 + fx, 15 + yOff, 1, 1, PAL.outline);
    } else if (expr === 'alert') {
      // Ojos muy abiertos + signo '!'
      px(ox, oy, 10 + fx, 12 + yOff, 4, 4, PAL.white);
      px(ox, oy, 11 + fx, 13 + yOff, 2, 2, PAL.outline);
      px(ox, oy, 18 + fx, 12 + yOff, 4, 4, PAL.white);
      px(ox, oy, 19 + fx, 13 + yOff, 2, 2, PAL.outline);
      px(ox, oy, 15 + fx, 17 + yOff, 2, 2, PAL.outline);
      // Signo !
      px(ox, oy, 15, 0, 2, 3, PAL.red);
      px(ox, oy, 15, 4, 2, 1, PAL.red);
    } else if (expr === 'off') {
      px(ox, oy, 11 + fx, 14 + yOff, 3, 1, PAL.cyanDark);
      px(ox, oy, 18 + fx, 14 + yOff, 3, 1, PAL.cyanDark);
    }
  }

  // --- FILA 0 (y = 0): Vistas Ortográficas y Perspectivas ---
  dibujarCuerpoBase(0, 0, { view: 'front' }); dibujarRostro(0, 0, 'happy');
  dibujarCuerpoBase(64, 0, { view: '3qL' }); dibujarRostro(64, 0, 'neutral', 0, -1);
  dibujarCuerpoBase(128, 0, { view: '3qR' }); dibujarRostro(128, 0, 'neutral', 0, 1);
  dibujarCuerpoBase(192, 0, { view: 'left' });
  dibujarCuerpoBase(256, 0, { view: 'right' });
  dibujarCuerpoBase(320, 0, { view: '3qL' });
  dibujarCuerpoBase(384, 0, { view: '3qR' });
  dibujarCuerpoBase(448, 0, { view: 'back' });
  dibujarCuerpoBase(512, 0, { view: 'top' });
  dibujarCuerpoBase(576, 0, { view: 'iso' });

  // --- FILA 1 (y = 64): Estados de Interacción ---
  dibujarCuerpoBase(0, 64, { yOff: 0 }); dibujarRostro(0, 64, 'neutral', 0);
  dibujarCuerpoBase(64, 64, { yOff: -1 }); dibujarRostro(64, 64, 'neutral', -1);
  dibujarCuerpoBase(128, 64, { yOff: -1 }); dibujarRostro(128, 64, 'alert', -1);
  dibujarCuerpoBase(192, 64, { armPose: 'celebration' }); dibujarRostro(192, 64, 'happy');
  // Procesando 1, 2, 3 (spinner arriba)
  [256, 320, 384].forEach((xPos, idx) => {
    dibujarCuerpoBase(xPos, 64);
    dibujarRostro(xPos, 64, 'neutral');
    px(ctx, 0, 0, 0, 0, 0, ''); // noop
    const dotX = 13 + idx * 2;
    px(xPos, 64, dotX, 1, 2, 2, PAL.yellow);
  });
  dibujarCuerpoBase(448, 64, { yOff: -1, armPose: 'celebration' }); dibujarRostro(448, 64, 'happy', -1);
  dibujarCuerpoBase(512, 64, { yOff: 1 }); dibujarRostro(512, 64, 'off', 1);
  dibujarCuerpoBase(576, 64, { yOff: -2 }); dibujarRostro(576, 64, 'happy', -2);

  // --- FILA 2 (y = 128): Expresiones Faciales ---
  const exprList = ['neutral', 'happy', 'sad', 'angry', 'confused', 'sleepy', 'wink', 'alert', 'happy', 'confused'];
  exprList.forEach((expr, col) => {
    const ox = col * 64;
    dibujarCuerpoBase(ox, 128);
    dibujarRostro(ox, 128, expr);
  });

  // --- FILA 3 (y = 192): Poses de Brazos ---
  const armList = [
    'relaxed', 'waving', 'pointing_side', 'pointing_up', 'crossed',
    'hands_together', 'celebration', 'swing1', 'relaxed', 'swing2'
  ];
  armList.forEach((pose, col) => {
    const ox = col * 64;
    dibujarCuerpoBase(ox, 192, { armPose: pose });
    dibujarRostro(ox, 192, pose === 'celebration' || pose === 'waving' ? 'happy' : 'neutral');
  });

  return offCanvas;
}

/**
 * ============================================================================
 * 3. ESTADO GLOBAL DE LA APLICACIÓN Y REFERENCIAS DOM
 * ============================================================================
 */
const state = {
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

const dom = {
  mainCanvas: document.getElementById('main-canvas'),
  minimapCanvas: document.getElementById('minimap-canvas'),
  logoCanvas: document.getElementById('logo-canvas'),
  canvasStage: document.getElementById('canvas-stage'),
  canvasInfoBadge: document.getElementById('canvas-info-badge'),
  framesGrid: document.getElementById('frames-grid'),
  jsonPreview: document.getElementById('json-preview'),
  jsSnippet: document.getElementById('js-snippet'),
  statX: document.getElementById('stat-x'),
  statY: document.getElementById('stat-y'),
  statW: document.getElementById('stat-w'),
  statH: document.getElementById('stat-h'),
  fpsSlider: document.getElementById('fps-slider'),
  fpsValue: document.getElementById('fps-value'),
  btnStopAnim: document.getElementById('btn-stop-anim'),
  sourceBadge: document.getElementById('source-badge'),
  sheetDimensions: document.getElementById('sheet-dimensions'),
  dragOverlay: document.getElementById('drag-overlay'),
  dropZoneMain: document.getElementById('drop-zone-main')
};

const mainCtx = dom.mainCanvas.getContext('2d');
const minimapCtx = dom.minimapCanvas.getContext('2d');
const logoCtx = dom.logoCanvas.getContext('2d');

/**
 * ============================================================================
 * 4. SISTEMA DE NOTIFICACIONES (TOAST) Y PORTAPAPELES
 * ============================================================================
 */
function showToast(mensaje, tipo = 'info') {
  const container = document.getElementById('toast-container');
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

function copyTextToClipboard(text, successMsg) {
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

/**
 * ============================================================================
 * 5. RENDERIZADO EN CANVAS PRINCIPAL Y MINI-MAPA
 * ============================================================================
 */
function renderMainCanvas() {
  const frameEntry = state.atlas.frames[state.activeFrame];
  if (!frameEntry || !state.sheetImage) return;

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

  dom.canvasInfoBadge.textContent = `${state.activeFrame} • ${targetW}×${targetH} px (${state.zoom}x)`;
  updateJsonInspector(frameEntry);
  renderMinimap();
}

function renderMinimap() {
  if (!state.sheetImage) return;
  const imgW = state.sheetImage.width || 640;
  const imgH = state.sheetImage.height || 256;

  dom.minimapCanvas.width = imgW;
  dom.minimapCanvas.height = imgH;
  dom.sheetDimensions.textContent = `${imgW}×${imgH} px`;

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

function renderLogoIcon() {
  if (!state.sheetImage) return;
  logoCtx.clearRect(0, 0, 32, 32);
  logoCtx.imageSmoothingEnabled = false;
  logoCtx.drawImage(state.sheetImage, 0, 0, 64, 64, 0, 0, 32, 32);
}

function updateJsonInspector(frameEntry) {
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

/**
 * ============================================================================
 * 6. CATÁLOGO DE FOTOGRAMAS Y SELECTOR POR CATEGORÍAS
 * ============================================================================
 */
function getFramesByCategory(cat) {
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

function renderFramesCatalog() {
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
      stopAnimationLoop();
      selectFrame(key);
    });

    dom.framesGrid.appendChild(card);
  });
}

function selectFrame(frameKey) {
  if (!state.atlas.frames[frameKey]) return;
  state.activeFrame = frameKey;
  renderMainCanvas();
  renderFramesCatalog();
}

/**
 * ============================================================================
 * 7. REPRODUCTOR DE ANIMACIONES (LOOPS)
 * ============================================================================
 */
function startAnimationLoop(loopName) {
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
  dom.btnStopAnim.classList.remove('hidden');

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

function stopAnimationLoop() {
  if (state.loopTimer) {
    clearInterval(state.loopTimer);
    state.loopTimer = null;
  }
  state.activeLoop = null;
  dom.btnStopAnim.classList.add('hidden');
  document.querySelectorAll('.loop-btn').forEach(btn => {
    btn.classList.remove('border-ctp-blue', 'bg-ctp-blue/15');
  });
}

/**
 * ============================================================================
 * 8. CARGA DE ARCHIVOS EXTERNOS (PNG Y JSON POR INPUT O DRAG & DROP)
 * ============================================================================
 */
function handleFilesUpload(fileList) {
  Array.from(fileList).forEach(file => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          state.sheetImage = img;
          state.isCustomPng = true;
          document.getElementById('png-status-label').textContent = file.name.slice(0, 16) + (file.name.length > 16 ? '…' : '');
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
          document.getElementById('json-status-label').textContent = file.name.slice(0, 16) + (file.name.length > 16 ? '…' : '');
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

function updateSourceBadge() {
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

function resetToProceduralDemo() {
  stopAnimationLoop();
  state.atlas = JSON.parse(JSON.stringify(DEFAULT_ATLAS_JSON));
  state.sheetImage = generarSpriteSheetProcedural();
  state.isCustomPng = false;
  state.isCustomJson = false;
  state.activeFrame = 'turnaround_front_0.png';
  document.getElementById('png-status-label').textContent = 'Cargar PNG';
  document.getElementById('json-status-label').textContent = 'Cargar JSON';
  updateSourceBadge();
  renderLogoIcon();
  renderMainCanvas();
  renderFramesCatalog();
  showToast('Sprite Sheet procedural restaurado', 'info');
}

/**
 * ============================================================================
 * 9. EVENT LISTENERS E INICIALIZACIÓN
 * ============================================================================
 */
function initEventListeners() {
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
  document.getElementById('toggle-grid').addEventListener('click', (e) => {
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

  // Toggle Fondo Transparencia (Checkerboard)
  document.getElementById('toggle-checker').addEventListener('click', (e) => {
    state.showChecker = !state.showChecker;
    const btn = e.currentTarget;
    if (state.showChecker) {
      dom.canvasStage.classList.add('checkerboard');
      dom.canvasStage.classList.remove('bg-ctp-crust');
      btn.classList.add('bg-ctp-blue/20', 'text-ctp-blue', 'border-ctp-blue/40');
      btn.classList.remove('bg-ctp-surface0', 'text-ctp-subtext1', 'border-transparent');
    } else {
      dom.canvasStage.classList.remove('checkerboard');
      dom.canvasStage.classList.add('bg-ctp-crust');
      btn.classList.remove('bg-ctp-blue/20', 'text-ctp-blue', 'border-ctp-blue/40');
      btn.classList.add('bg-ctp-surface0', 'text-ctp-subtext1', 'border-transparent');
    }
  });

  // Botones de Loops de animación
  document.querySelectorAll('.loop-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      startAnimationLoop(btn.dataset.loop);
    });
  });

  document.getElementById('btn-stop-anim').addEventListener('click', stopAnimationLoop);

  // Slider FPS
  dom.fpsSlider.addEventListener('input', (e) => {
    state.fps = parseInt(e.target.value, 10);
    dom.fpsValue.textContent = `${state.fps} FPS`;
    if (state.activeLoop) {
      startAnimationLoop(state.activeLoop);
    }
  });

  // Copiar JSON y Snippet JS
  document.getElementById('btn-copy-json').addEventListener('click', () => {
    copyTextToClipboard(dom.jsonPreview.textContent, 'Coordenadas JSON copiadas');
  });
  document.getElementById('btn-copy-snippet').addEventListener('click', () => {
    copyTextToClipboard(dom.jsSnippet.textContent, 'Código JavaScript copiado');
  });

  // Clic interactivo en el Minimapa del Atlas
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

  // Inputs de archivos
  document.getElementById('input-png').addEventListener('change', (e) => {
    if (e.target.files.length) handleFilesUpload(e.target.files);
  });
  document.getElementById('input-json').addEventListener('change', (e) => {
    if (e.target.files.length) handleFilesUpload(e.target.files);
  });
  document.getElementById('btn-reset-demo').addEventListener('click', resetToProceduralDemo);

  // Drag & Drop global en la ventana
  window.addEventListener('dragover', (e) => {
    e.preventDefault();
    dom.dragOverlay.classList.remove('hidden');
  });
  window.addEventListener('dragleave', (e) => {
    if (e.relatedTarget === null) {
      dom.dragOverlay.classList.add('hidden');
    }
  });
  window.addEventListener('drop', (e) => {
    e.preventDefault();
    dom.dragOverlay.classList.add('hidden');
    if (e.dataTransfer && e.dataTransfer.files.length) {
      handleFilesUpload(e.dataTransfer.files);
    }
  });
}

// Arranque inmediato
window.addEventListener('DOMContentLoaded', () => {
  state.sheetImage = generarSpriteSheetProcedural();
  initEventListeners();
  renderLogoIcon();
  renderMainCanvas();
  renderFramesCatalog();
});
